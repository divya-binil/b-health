const originUrlAttrName = "origin-url";

function ReadabilityComponent() {
    const element = Reflect.construct(HTMLElement, [], ReadabilityComponent);
    return element;
}

ReadabilityComponent.prototype = Object.create(HTMLElement.prototype);
ReadabilityComponent.prototype.constructor = ReadabilityComponent;

ReadabilityComponent.observedAttributes = [originUrlAttrName];

ReadabilityComponent.prototype.connectedCallbackRender = function () {
    $script(
        "https://raw.githack.com/mozilla/readability/0.4.1/Readability.js",
        () => {
            const originURL = this.getAttribute(originUrlAttrName);
            if (originURL) {
                fetch(originURL, { redirect: "follow" })
                    .then((response) => {
                        if (response.status === 200) {
                            response.text().then((html) => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(html, "text/html");
                                const result = new Readability(doc).parse();
                                this.innerHTML = result.content;
                            });
                        } else {
                            this.innerHTML = `Error fetching <a href="${originURL}">${originURL}</a>: response.status = ${response.status} in ReadabilityComponent`;
                        }
                    })
                    .catch((error) => {
                        this.innerHTML = `Error fetching ${originURL}: ${error} in ReadabilityComponent`;
                    });
            } else {
                this.innerHTML = `originURL (attribute "${originUrlAttrName}") not supplied for ReadabilityComponent`;
            }
        }
    );
};

ReadabilityComponent.prototype.connectedCallback = function () {
    if ("$script" in window) {
        this.connectedCallbackRender();
    } else {
        const scriptElem = document.createElement("script");
        scriptElem.onload = () => this.connectedCallbackRender();
        scriptElem.type = "text/javascript";
        scriptElem.src =
            "https://cdnjs.cloudflare.com/ajax/libs/script.js/2.5.9/script.min.js";
        document.head.appendChild(scriptElem);
    }
};

customElements.define("mozilla-readable", ReadabilityComponent);

export default ReadabilityComponent;
const hostAttrName = "host";
const diagramAttrName = "type";
const outputAttrName = "output";
const diagnoseAttrName = "diagnose";

class KrokiComponent extends HTMLElement {
  static get observedAttributes() {
    return [hostAttrName, diagramAttrName, outputAttrName, diagnoseAttrName];
  }

  constructor() {
    super();
    this.style.display = "none";
    this.host = this.getAttribute(hostAttrName) || "http://kroki.io";
    this.diagramType = this.getAttribute(diagramAttrName) || "plantuml";
    this.output = this.getAttribute(outputAttrName) || "svg";
    this.diagnose = this.getAttribute(diagnoseAttrName) || false;
  }

  connectedCallback() {
    this.render();
  }

  loadScript(url, callback) {
    const script = document.createElement("script");
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  }

  render() {
    const decodeHTML = (html) => {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };

    const loadDependencies = () => {
      const pakoUrl = "https://unpkg.com/pako@1.0.10/dist/pako_deflate.min.js";
      this.loadScript(pakoUrl, () => {
        const encodedKrokiUrlPath = (srcText, srcTextType) => {
          if (
            !srcText ||
            !(typeof srcText === "string") ||
            srcText.trim().length == 0 ||
            !srcTextType ||
            srcTextType.trim().length == 0
          ) {
            srcText = "digraph G { Missing -> srcText }";
            srcTextType = "dot";
          }
          let base64Encoded;
          if (window.TextEncoder) {
            base64Encoded = new TextEncoder("utf-8").encode(srcText);
          } else {
            const utf8 = unescape(encodeURIComponent(srcText));
            const base64Encoded = new Uint8Array(utf8.length);
            for (let i = 0; i < utf8.length; i++) {
              base64Encoded[i] = utf8.charCodeAt(i);
            }
          }
          const compressed = pako.deflate(base64Encoded, {
            level: 9,
            to: "string",
          });
          return btoa(compressed).replace(/\+/g, "-").replace(/\//g, "_");
        };

        const diagram = decodeHTML(this.textContent);
        if (diagram) {
          const diagramType = this.diagramType;
          const host = this.host;
          const output = this.output;
          const krokiURL = [
            host,
            diagramType,
            output,
            encodedKrokiUrlPath(diagram, diagramType),
          ].join("/");
          if (this.diagnose) {
            console.dir({ host, diagramType, output, diagram, krokiURL });
          }
          this.innerHTML = `<div><a href='${krokiURL}'><img src='${krokiURL}'/></a></div>`;
          this.style.display = "";
        }
      });
    };

    loadDependencies();
  }
}

customElements.define("kroki-diagram", KrokiComponent);

export default KrokiComponent;

const diagnoseAttrName = "diagnose";
const drawIoSrcUrlAttrName = "drawio-url";
const diagramTitleAttrName = "diagram-title";
const widthAttrName = "width";
const heightAttrName = "height";

class DiagramsNetViewer extends HTMLElement {
    constructor() {
        super();
        this.diagramsViewerBaseURL = "https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1";
        this.drawIoSrcUrl = this.getAttribute(drawIoSrcUrlAttrName) || "";
        this.diagramTitle = this.getAttribute(diagramTitleAttrName) || "";
        this.diagnose = this.getAttribute(diagnoseAttrName) || false;
        this.width = this.getAttribute(widthAttrName) || "100%";
        this.height = this.getAttribute(heightAttrName) || "400px";
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <iframe frameborder="0" style="width:${this.width};height:${this.height};"></iframe>
    `;

        if (this.diagnose) {
            console.log(`preparing diagrams.net viewer ${this.drawIoSrcUrl}`);
        }

        fetch(this.drawIoSrcUrl)
            .then(async (response) => {
                const diagram = await response.text();
                const iFrame = this.shadowRoot.querySelector('iframe');
                if (this.diagnose) {
                    console.dir(response);
                    console.dir(diagram);
                    console.dir(iFrame);
                }
                iFrame.src = `${this.diagramsViewerBaseURL}&title=${encodeURIComponent(this.diagramTitle)}\#R${encodeURIComponent(diagram)}`;

                if (this.diagnose) {
                    console.log(`completed preparing ${this.drawIoSrcUrl}`);
                }
            })
            .catch((error) => {
                console.error(`Error fetching diagram: ${error}`);
            });
    }
}

customElements.define("diagrams-net-viewer", DiagramsNetViewer);

export default DiagramsNetViewer;
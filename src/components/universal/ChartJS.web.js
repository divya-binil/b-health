function ChartJsComponent() {
    const configHrefAttrName = "config-href";
  }
  
  ChartJsComponent.prototype = Object.create(HTMLElement.prototype);
  
  ChartJsComponent.prototype.connectedCallbackRender = function () {
    const configHref = this.getAttribute("config-href");
    if (configHref) {
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://cdn.jsdelivr.net/npm/chart.js";
      scriptElem.onload = () => {
        const configURL = configHref;
        fetch(configURL)
          .then((response) => {
            if (response.status == 200) {
              response.json().then((config) => {
                const canvas = this.shadowRoot.querySelector("canvas");
                const chart = new Chart(canvas, config);
                this.onclick = (evt) => {
                  const points = chart.getElementsAtEventForMode(
                    evt,
                    "nearest",
                    { intersect: true },
                    true
                  );
                  if (points.length) {
                    const firstPoint = points[0];
                    const data =
                      chart.data.datasets[firstPoint.datasetIndex].data[
                        firstPoint.index
                      ];
                    this.navigate(data);
                  }
                };
              });
            } else {
              this.innerHTML = `Error loading ${configURL}: response.status = ${response.status} in ChartJsComponent`;
            }
          })
          .catch((error) => {
            this.innerHTML = `Error loading ${configURL}: ${error} in ChartJsComponent`;
          });
      };
  
      this.shadowRoot.appendChild(scriptElem);
    } else {
      this.innerHTML = `config-href attribute not supplied for ChartJsComponent`;
    }
  };
  
  ChartJsComponent.prototype.navigate = function (data) {
    if (("navigation" in data) && data.navigation) {
      window.location = data.navigation.url;
    }
    if (("url" in data) && data.url) {
      window.location = data.url;
    }
  };
  
  customElements.define("chart-js", ChartJsComponent);
  
  export default ChartJsComponent;
  
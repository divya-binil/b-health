class AgGridComponent extends HTMLElement {
    static configHrefAttrName = "config-href";
    static domLayoutAttrName = "dom-layout";
    static displayAfterGridReady = "display-after-grid-ready";
    static observedAttributes = [
      AgGridComponent.configHrefAttrName,
      AgGridComponent.domLayoutAttrName,
      AgGridComponent.displayAfterGridReady,
    ];
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }
  
    render() {
      const domLayout = this.getAttribute(AgGridComponent.domLayoutAttrName) || "autoHeight";
  
      const configure = (inherit) => {
        const config = {
          domLayout,
          rowSelection: "single",
          ...inherit.gridDefn,
          onGridReady: (event) => {
            const displayAfterGridReadyMS = this.getAttribute(AgGridComponent.displayAfterGridReady) ?? 0;
            if (displayAfterGridReadyMS) {
              this.style.display = "";
              delay(displayAfterGridReadyMS).then(() => event.columnApi.autoSizeAllColumns());
            } else {
              event.columnApi.autoSizeAllColumns();
            }
          },
          components: {
            navigationCellRenderer: (params) => {
              if ("navigation" in params.data) {
                return `<a href="${params.data.navigation.url}">${params.value}</a>`;
              }
              return params.value;
            },
            hideZerosRenderer: (params) => {
              return typeof params.value === "number" ? (params.value == 0 ? "" : params.value) : params.value;
            },
            ...inherit.components,
          },
        };
        new agGrid.Grid(this, config);
      };
  
      const configURL = this.getAttribute(AgGridComponent.configHrefAttrName);
      if (configURL) {
        fetch(configURL)
          .then((response) => {
            if (response.status === 200) {
              response.json().then((gridDefn) => {
                configure({ gridDefn });
              });
            } else {
              this.innerHTML = `Error loading <a href="${configURL}">${configURL}</a>: response.status = ${response.status} in AgGridComponent`;
            }
          })
          .catch((error) => {
            this.innerHTML = `Error loading ${configURL}: ${error} in AgGridComponent`;
          });
      } else {
        try {
          const data = JSON.parse(this.innerText);
          this.innerText = "";
          configure(data);
        } catch (err) {
          this.innerHTML = `configURL (attribute "${AgGridComponent.configHrefAttrName}") not supplied for AgGridComponent, tried to use this.innerText as JSON but failed: ${err}`;
        }
      }
    }
  }
  
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  if (!customElements.get("ag-grid")) {
    customElements.define("ag-grid", AgGridComponent);
  }
  
  export default AgGridComponent;
  
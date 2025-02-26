/**
 * @classdesc A component in which users can create their own cookbooks
 */
class CreateCookbook extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "/source/styles/create-cookbook.css";

    const createCookbook = document.getElementById(
      "create-cookbook-template"
    ).content;

    this.shadowRoot.append(stylesheet);
    this.shadowRoot.append(createCookbook);
  }
}

customElements.define("create-cookbook", CreateCookbook);

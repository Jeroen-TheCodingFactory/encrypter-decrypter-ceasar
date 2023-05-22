
class Header {
    htmlElement;
    view;
    headingHtmlElement;
    constructor(view, headingText) {
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.innerText = headingText;
        this.headingHtmlElement.classList.add("view__heading")
        this.htmlElement.appendChild(this.headingHtmlElement);

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

}
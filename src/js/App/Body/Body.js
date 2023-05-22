
class Body {
    htmlElement;
    view;
    inputHtmlElement;
    text;
    constructor(view, object) {
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        this.htmlElement.appendChild(this.inputHtmlElement);
        this.inputHtmlElement.placeholder = object.placeholder;
        this.inputHtmlElement.value = object.value;
        this.text = object.value;
        this.inputHtmlElement.oninput = this.typed;

        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    typed = (event) => {
        this.text = event.target.value;
    }

    changeBody(newText){
        this.inputHtmlElement.value = newText;
    }
}
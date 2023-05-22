class DecrypterView {

    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.type = "DECRYPT";
        this.main = main;

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Decrypt");
    }

    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }

    changeBody(decryptedText){
        this.body.changeBody(decryptedText);
    }
}

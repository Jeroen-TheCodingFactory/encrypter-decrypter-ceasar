class EncrypterView {

    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, object) {
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");

        this.main = main;
        this.type = "ENCRYPT";
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody() {
        this.main.cipher(this.body.text, this.type);
    }

    changeBody(encryptedText){
        this.body.changeBody(encryptedText);
    }
}
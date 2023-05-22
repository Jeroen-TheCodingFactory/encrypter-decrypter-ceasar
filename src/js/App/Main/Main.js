class Main {
    encrypterView;
    decrypterView;
    htmlElement;
    app;
    constructor(data, app) {
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this, data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    cipher(textToCipher, type) {
        if (type === "ENCRYPT") {
            this.app.encrypt(textToCipher);
        }
        else {
            this.app.decrypt(textToCipher);
        }
    }

    changeEncrypter(encryptedText){
       this.encrypterView.changeBody(encryptedText);
    }

    changeDecrypter(decryptedText){
        this.decrypterView.changeBody(decryptedText);
    }
}

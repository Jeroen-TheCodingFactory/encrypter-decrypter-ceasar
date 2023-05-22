class App {
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor() {
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then((data) => {
            this.main = new Main(data, this);
        });
    }

    encrypt = (textToEncrypt) => {
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted);
    }

    decrypt(textToDecrypt) {
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);

    }

}


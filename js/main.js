// Setup Classes
class API{

}

class Decrypter{

}

class Encrypter{

}

class Cleaner{

}

class Renderer{

}

/* View classes */

class Main{
    encrypterView;
    decrypterView;

    constructor(){
        this.encrypterView = new EncrypterView();
        this.decrypterView = new DecrypterView();
    }
}

class EncrypterView{

    header;
    body;
    footer;

    constructor(){
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class DecrypterView{

    header;
    body;
    footer;

    constructor(){
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class Header{

}

class Body{

}

class Footer{

}

class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor(){
        this.api = new API();
        this.decrypter = new Decrypter();
        this.encrypter = new Encrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.main = new Main();
    }
}

const app = new App();
console.log(app);
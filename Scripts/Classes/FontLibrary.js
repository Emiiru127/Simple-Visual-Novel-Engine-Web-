class Fontlibrary{
    
    constructor(){

        this.fontLibrary = new Map();

    }

    addFont(font){

        this.fontLibrary.set(font.name, font);

    }

    showFontlibraryOnConsole(){

        console.log(this.fontLibrary);

    }

}

console.log("FontLibrary Class Loaded");
class Backgrounds{

    constructor(){

        this.backgrounds = new Map();

    }

    addBackground(background){

        this.backgrounds.set(background.name, background);

    }

    showBackgroundsOnConsole(){

        console.log(this.backgrounds);

    }

}

console.log("Backgrounds Class Loaded");
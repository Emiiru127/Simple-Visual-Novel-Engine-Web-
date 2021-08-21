class Characters{

    constructor(){

        this.characters = new Map();

    }

    addCharacter(character){

        this.characters.set(character.name, character);

    }

    showCharactersOnConsole(){

        console.log(this.characters);

    }

}

console.log("Characters Class Loaded");
class State{

    constructor(name, state){

        this.name = name;
        this.state = document.getElementById(state);
        this.active = false;
        this.buttons = [];
        this.buttonNames = [];

    }

    addButton(name, button){

        this.buttons.push(document.getElementById(button));
        this.buttonNames.push(name);

    }

    setImageBackground(background, backgroundNumber){

        this.state.style.backgroundImage = "url('" + background.backgrounds[backgroundNumber-1] + "')";

    }

}

console.log("State Class Loaded");
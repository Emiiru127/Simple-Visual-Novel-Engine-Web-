class Animations {

    constructor(){

        this.animations = new Map();

    }

    addAnimation(customAnimation){

        this.animations.set(customAnimation.name, customAnimation);

    }

    showAnimationsOnConsole(){

        console.log(this.animations);

    }

}

console.log("Animations Class Loaded");
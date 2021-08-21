class CharacterDisplay{

    constructor(characters, animations, characterLeftImg , characterCenterImg, characterRightImg){

        this.animations = animations.animations;

        this.currentShowAnimation = ["animation", "seconds", "iteration"];
        this.currentHideAnimation = ["animation", "seconds", "iteration"];

        this.characters = characters.characters;
        this.characterSlots = [];
        this.characterSlots.length = 3;
        this.slots = [false, false, false];

        this.left = document.getElementById(characterLeftImg);
        this.center = document.getElementById(characterCenterImg);
        this.right = document.getElementById(characterRightImg);
        
    }

    // primary methods

    showCharacterLeft(character, spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterLeft();

        }else{

            this.unflippedCharacterLeft();

        }   
            
        this.setLeftPath((this.characters.get(character.name)).sprites[(spriteNumber-1)]);
        this.characterSlots[0] = this.characters.get(character.name);
        this.displayLeft();
        this.slots[0] = true;

    }

    showCharacterCenter(character, spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterCenter();

        }else{

            this.unflippedCharacterCenter();
            
        }   
            
        this.setCenterPath((this.characters.get(character.name)).sprites[(spriteNumber-1)]);
        this.characterSlots[1] = this.characters.get(character.name);
        this.displayCenter();
        this.slots[1] = true;

    }

    showCharacterRight(character, spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterRight();

        }else{

            this.unflippedCharacterRight();
        }   
            
        this.setRightPath((this.characters.get(character.name)).sprites[(spriteNumber-1)]);
        this.characterSlots[2] = this.characters.get(character.name);
        this.displayRight();
        this.slots[2] = true;

    }

    changeCharacterSpriteLeft(spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterLeft();

        }else{

            this.unflippedCharacterLeft();

        }   

        this.setLeftPath(this.characterSlots[0].sprites[(spriteNumber-1)]);

    }

    changeCharacterSpriteCenter(spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterCenter();

        }else{

            this.unflippedCharacterCenter();
            
        }   

        this.setCenterPath(this.characterSlots[1].sprites[(spriteNumber-1)]);

    }

    changeCharacterSpriteRight(spriteNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedCharacterRight();

        }else{

            this.unflippedCharacterRight();
            
        }   

        this.setRightPath(this.characterSlots[2].sprites[(spriteNumber-1)]);

    }

    removeCharacterLeft(){
            
        this.characterSlots[0] = null;
        this.hideLeft();
        this.slots[0] = false;

    }

    removeCharacterCenter(){
            
        this.characterSlots[1] = null;
        this.hideCenter();
        this.slots[1] = false;

    }

    removeCharacterRight(){
            
        this.characterSlots[2] = null;
        this.hideRight();
        this.slots[2] = false;

    }

    removeCharacterAll(){

        this.characterSlots[0] = null;
        this.characterSlots[1] = null;
        this.characterSlots[2] = null;

        this.hideLeft();
        this.hideCenter();
        this.hideRight();

        this.slots[0] = false;
        this.slots[1] = false;
        this.slots[2] = false;

    }


    // secondary methods

    displayLeft() {

        this.left.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.left.style.opacity = 1;

    }
    
    displayCenter() {

        this.center.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.center.style.opacity = 1;

    }
    
    displayRight() {
    
        this.right.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.right.style.opacity = 1;
    
    }
    
    hideLeft() {
    
        this.left.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.left.style.opacity = 0;

    }
    
    hideCenter() {
    
        this.center.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.center.style.opacity = 0;
    
    }
    
    hideRight() {
    
        this.right.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.right.style.opacity = 0;
    
    }

    setLeftPath(path){

        this.left.src = path;

    }

    setCenterPath(path){

        this.center.src = path;
        
    }

    setRightPath(path){

        this.right.src = path;
        
    }

    setCurrentShowAnimation(animation){
 
        this.currentShowAnimation[0] = (this.animations.get(animation.name)).animationName;
        this.currentShowAnimation[1] = (this.animations.get(animation.name)).seconds;
        this.currentShowAnimation[2] = (this.animations.get(animation.name)).iteration;

    }

    setCurrentHideAnimation(animation){

        this.currentHideAnimation[0] = (this.animations.get(animation.name)).animationName;
        this.currentHideAnimation[1] = (this.animations.get(animation.name)).seconds;
        this.currentHideAnimation[2] = (this.animations.get(animation.name)).iteration;

    }

    setCharacterLeftAnimation(animation){

        if(animation != undefined)
        this.left.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setCharacterCenterAnimation(animation){

        if(animation != undefined)
        this.center.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setCharacterRightAnimation(animation){

        if(animation != undefined)
        this.right.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    resetCharacterLeftAnimation(){

        this.left.style.animation = "";

    }

    resetCharacterCenterAnimation(){

        this.center.style.animation = "";

    }

    resetCharacterRightAnimation(){

        this.right.style.animation = "";

    }

    flippedCharacterLeft(){

        this.left.style.transform = "scaleX(-1)";
        
    }

    flippedCharacterCenter(){

        this.center.style.transform = "scaleX(-1)";
        
    }

    flippedCharacterRight(){

        this.right.style.transform = "scaleX(-1)";
        
    }

    unflippedCharacterLeft(){

        this.left.style.transform = "scaleX(1)";
        
    }

    unflippedCharacterCenter(){

        this.center.style.transform = "scaleX(1)";
        
    }

    unflippedCharacterRight(){

        this.right.style.transform = "scaleX(1)";
        
    }

}

//All Functions

function showCharacterLeft(Character, spriteNumber, flipped, animation){
    return new Promise((resolve) => {

        characterDisplay.showCharacterLeft(Character, spriteNumber, flipped);
        characterDisplay.setCharacterLeftAnimation(animation);
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentShowAnimation[1]).substring(0,(backgroundDisplay.currentShowAnimation[1]).length))*1000));

    });
}

function showCharacterCenter(Character, spriteNumber, flipped, animation){
    return new Promise((resolve) => {

        characterDisplay.showCharacterCenter(Character, spriteNumber, flipped);
        characterDisplay.setCharacterCenterAnimation(animation);
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentShowAnimation[1]).substring(0,(backgroundDisplay.currentShowAnimation[1]).length))*1000));

    });
}

function showCharacterRight(Character, spriteNumber, flipped, animation){
    return new Promise((resolve) => {

        characterDisplay.showCharacterRight(Character, spriteNumber, flipped);
        characterDisplay.setCharacterRightAnimation(animation);
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentShowAnimation[1]).substring(0,(backgroundDisplay.currentShowAnimation[1]).length))*1000));

    });
}

function changeCharacterSpriteLeft(spriteNumber, flipped, animation){

    characterDisplay.setCharacterLeftAnimation(animation);
    characterDisplay.changeCharacterSpriteLeft(spriteNumber, flipped);

}

function changeCharacterSpriteCenter(spriteNumber, flipped, animation){

    characterDisplay.setCharacterCenterAnimation(animation);
    characterDisplay.changeCharacterSpriteCenter(spriteNumber, flipped);

}

function changeCharacterSpriteRight(spriteNumber, flipped, animation){

    characterDisplay.setCharacterRightAnimation(animation);
    characterDisplay.changeCharacterSpriteRight(spriteNumber, flipped);

}

function removeCharacterLeft() {
    return new Promise((resolve) => {

        characterDisplay.removeCharacterLeft();
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentHideAnimation[1]).substring(0,(backgroundDisplay.currentHideAnimation[1]).length))*1000));

    });
}

function removeCharacterCenter() {
    return new Promise((resolve) => {

        characterDisplay.removeCharacterCenter();
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentHideAnimation[1]).substring(0,(backgroundDisplay.currentHideAnimation[1]).length))*1000));

    });
}

function removeCharacterRight() {
    return new Promise((resolve) => {

        characterDisplay.removeCharacterRight();
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentHideAnimation[1]).substring(0,(backgroundDisplay.currentHideAnimation[1]).length))*1000));

    });
}

function removeCharacterAll() {
    return new Promise((resolve) => {

        characterDisplay.removeCharacterAll();
        setTimeout(resolve, (parseFloat((backgroundDisplay.currentHideAnimation[1]).substring(0,(backgroundDisplay.currentHideAnimation[1]).length))*1000));

    });
}

function setCharacterLeftAnimation(animation){
    
    characterDisplay.setCharacterLeftAnimation(animation);

}

function setCharacterCenterAnimation(animation){
    
    characterDisplay.setCharacterCenterAnimation(animation);

}

function setCharacterRightAnimation(animation){
    
    characterDisplay.setCharacterRightAnimation(animation);

}

function setCharacterAllAnimation(animation){
    
    characterDisplay.setCharacterLeftAnimation(animation);
    characterDisplay.setCharacterCenterAnimation(animation);
    characterDisplay.setCharacterRightAnimation(animation);

}

function resetCharacterLeftAnimation(){
    
    characterDisplay.resetCharacterLeftAnimation();

}

function resetCharacterCenterAnimation(){
    
    characterDisplay.resetCharacterCenterAnimation();

}

function resetCharacterRightAnimation(){
    
    characterDisplay.resetCharacterRightAnimation();

}

function resetCharacterAllAnimation(){
    
    characterDisplay.resetCharacterLeftAnimation();
    characterDisplay.resetCharacterCenterAnimation();
    characterDisplay.resetCharacterRightAnimation();

}

function setCharacterDisplayCurrentShowAnimation(animation) {
    
    characterDisplay.setCurrentShowAnimation(animation);

}

function setCharacterDisplayCurrentHideAnimation(animation) {

    characterDisplay.setCurrentHideAnimation(animation);
    
}

//End of all Functions

console.log("CharacterDisplay Class Loaded");
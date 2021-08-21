class BackgroundDisplay{

    constructor(backgrounds, animations, background1, background2, background3){

        this.animations = animations.animations;

        this.currentShowAnimation = ["animation", "seconds", "iteration"];
        this.currentHideAnimation = ["animation", "seconds", "iteration"];

        this.backgrounds = backgrounds.backgrounds;
        this.slots = [true, false, false];

        this.BG1 = document.getElementById(background1);
        this.BG2 = document.getElementById(background2);
        this.BG3 = document.getElementById(background3);

    }

    //Primary Methods

    showBackground1(background, backgroundNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedBackground1();

        }else{

            this.unflippedBackground1();

        }   

        this.setBackground1Path((this.backgrounds.get(background.name)).backgrounds[(backgroundNumber-1)]);
        this.displayBackground1();
        this.slots[0] = true;

    }

    showBackground2(background, backgroundNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedBackground2();

        }else{

            this.unflippedBackground2();

        }   
        
        this.setBackground2Path((this.backgrounds.get(background.name)).backgrounds[(backgroundNumber-1)]);
        this.displayBackground2();
        this.slots[1] = true;

    }

    showInstantBackground(background, backgroundNumber, flipped){

        if(flipped == undefined){

            flipped = false;

        }
        
        if(flipped){

            this.flippedBackground3();

        }else{

            this.unflippedBackground3();

        }   

        this.setBackground3Path((this.backgrounds.get(background.name)).backgrounds[(backgroundNumber-1)]);
        this.displayBackground3();
        this.slots[2] = true;

    }

    hideBG1(){

        this.hideBackground1();
        this.slots[0] = false;

    }

    hideBG2(){

        this.hideBackground2();
        this.slots[1] = false;

    }

    hideInstantBackground(){

        this.hideBackground3();
        this.slots[2] = false;

    }

    //Secondary Methods

    displayBackground1() {

        this.BG1.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.BG1.style.opacity = 1;

    }
    
    displayBackground2() {
    
        this.BG2.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.BG2.style.opacity = 1;
    
    }

    displayBackground3() {
    
       this.BG3.style.opacity = 1;
    
    }
    
    hideBackground1() {
    
        this.BG1.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.BG1.style.opacity = 0;

    }
    
    hideBackground2() {
    
        this.BG2.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.BG2.style.opacity = 0;
    
    }

    hideBackground3() {
    
        this.BG3.style.opacity = 0;
    
    }


    setBackground1Path(path){
        
        this.BG1.src = path;

    }

    setBackground2Path(path){

        this.BG2.src = path;
        
    }

    setBackground3Path(path){

        this.BG3.src = path;
        
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

    setBackground1Animation(animation){

        if(animation != undefined)
        this.BG1.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setBackground2Animation(animation){

        if(animation != undefined)
        this.BG2.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);
        
    }

    setBackground3Animation(animation){

        if(animation != undefined)
        this.BG3.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);
        
    }

    resetBackground1Animation(){

        this.BG1.style.animation = "";

    }

    resetBackground2Animation(){

        this.BG2.style.animation = "";

    }

    resetBackground3Animation(){

        this.BG3.style.animation = "";

    }

    flippedBackground1(){

        this.BG1.style.transform = "scaleX(-1)";
        
    }

    flippedBackground2(){

        this.BG2.style.transform = "scaleX(-1)";

    }

    flippedBackground3(){

        this.BG3.style.transform = "scaleX(-1)";

    }

    unflippedBackground1(){

        this.BG1.style.transform = "scaleX(1)";
        
    }

    unflippedBackground2(){

        this.BG2.style.transform = "scaleX(1)";

    }

    unflippedBackground3(){

        this.BG3.style.transform = "scaleX(1)";

    }


}

//All Functions

function changeBackground(background, backgroundNumber, flipped, animation) {

    return new Promise((resolve) => {

        if(backgroundDisplay.slots[0] == true){

            backgroundDisplay.resetBackground1Animation();
            backgroundDisplay.hideBG1();
            backgroundDisplay.showBackground2(background, backgroundNumber, flipped);
            backgroundDisplay.setBackground2Animation(animation);
            setTimeout(resolve, (parseFloat((backgroundDisplay.currentShowAnimation[1]).substring(0,(backgroundDisplay.currentShowAnimation[1]).length))*1000));
            
        }
        else{

            backgroundDisplay.resetBackground2Animation();
            backgroundDisplay.hideBG2();
            backgroundDisplay.showBackground1(background, backgroundNumber, flipped);
            backgroundDisplay.setBackground1Animation(animation);
            setTimeout(resolve, (parseFloat((backgroundDisplay.currentShowAnimation[1]).substring(0,(backgroundDisplay.currentShowAnimation[1]).length))*1000));

        }
    
    });
    
}

function setBackroundAnimation(animation) {

    if(backgroundDisplay.slots[0] == true){

        backgroundDisplay.setBackground1Animation(animation);

    }else{

        backgroundDisplay.setBackground2Animation(animation);

    }
    
}

function resetBackgroundAnimation() {

    if(backgroundDisplay.slots[0] == true){

        backgroundDisplay.resetBackground1Animation();

    }else{

        backgroundDisplay.resetBackground2Animation();

    }
    
}

function showInstantBackground(background, backgroundNumber, flipped, animation){

    backgroundDisplay.setBackground3Animation(animation);
    backgroundDisplay.showInstantBackground(background, backgroundNumber, flipped);

}

function setInstantBackroundAnimation(animation) {

    backgroundDisplay.setBackground3Animation(animation);
    
}

function resetInstantBackroundAnimation() {

    backgroundDisplay.resetBackground3Animation();

}

function removeInstantBackground() {
    
    backgroundDisplay.resetBackground3Animation();
    backgroundDisplay.hideInstantBackground();

}

function setBackgroundDisplayCurrentShowAnimation(animation) {
    
    backgroundDisplay.setCurrentShowAnimation(animation);

}

function setBackgroundDisplayCurrentHideAnimation(animation) {

    backgroundDisplay.setCurrentHideAnimation(animation);
    
}

console.log("BackgroundDisplay Class Loaded");
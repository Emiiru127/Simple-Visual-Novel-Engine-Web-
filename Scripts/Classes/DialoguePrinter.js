class DialoguePrinter{

    constructor(animations, imageLibrary, fontLibrary, speechBox, nameBox, dialogueBox, clickRequester){

        this.animations = animations.animations;

        this.currentShowAnimation = ["animation", "seconds", "iteration"];
        this.currentHideAnimation = ["animation", "seconds", "iteration"];

        this.imageLibrary = imageLibrary.imageLibrary;
        this.fontLibrary = fontLibrary.fontLibrary;

        this.speechBox = document.getElementById(speechBox);
        this.nameBox = document.getElementById(nameBox);
        this.dialogueBox = document.getElementById(dialogueBox);
        this.clickRequester = document.getElementById(clickRequester);
        this.messageLength = 0;
        this.tempMessage = "";
        this.printTextSpeed = 15;

        this.defaultFont = ["DotGothic16", ""];

        this.resetDialogueBoxFont();
        this.resetNameBoxFont();

    }

    printText(message){

        this.tempMessage += message;
        this.dialogueBox.innerHTML = this.tempMessage;

    }

    clearDialogueBox() {
    
        this.nameBox.innerHTML = "";
        this.nameBox.style.opacity = 0;
        this.tempMessage = "";
        this.dialogueBox.innerHTML = "";
        
    }

    showClickRequester(){

        this.clickRequester.style.display = "block";

    }

    hideClickRequester(){

        this.clickRequester.style.display = "none";

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

    setClickRequesterAnimation(animation){

        this.clickRequester.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setClickRequesterSource(imageAlbum, imageNumber){

        this.clickRequester.src = ((this.imageLibrary.get(imageAlbum.name)).images[imageNumber-1]);

    }

    setDialogueBoxAnimation(animation){

        this.dialogueBox.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setDialogueBoxTextColor(color){

        this.dialogueBox.style.color = color;

    }

    setNameBoxAnimation(animation){

        this.nameBox.style.animation = ((this.animations.get(animation.name)).animationName + " " + (this.animations.get(animation.name)).seconds + " " + (this.animations.get(animation.name)).iteration);

    }

    setNameBoxTextColor(color){

        this.nameBox.style.color = color;

    }

    resetDialogueBoxAnimation(){

        this.dialogueBox.style.animation = "";

    }

    resetDialogueBoxTextColor(){

        this.dialogueBox.style.color = "black";
        
    }

    resetNameBoxAnimation(){

        this.nameBox.style.animation = "";

    }

    resetNameBoxTextColor(){

        this.nameBox.style.color = "black";
        
    }

    setDefaultFont(font1, font2){

        this.defaultFont[0] = (this.fontLibrary.get(font1.name)).font1;
        this.defaultFont[1] = (this.fontLibrary.get(font2.name)).font2;

    }

    setDialogueBoxFont(font){

        this.dialogueBox.style.fontFamily = (this.fontLibrary.get(font.name)).font;

    }

    setNameBoxFont(font){

        this.nameBox.style.fontFamily = (this.fontLibrary.get(font.name)).font;

    }

    resetDialogueBoxFont(){

        this.dialogueBox.style.fontFamily = this.defaultFont[0];

    }

    resetNameBoxFont(){

        this.nameBox.style.fontFamily = this.defaultFont[1];

    }


    displayDialoguePrinter() {
    
        this.speechBox.style.animation = (this.currentShowAnimation[0] + " " + this.currentShowAnimation[1] + " " + this.currentShowAnimation[2]);
        this.speechBox.style.opacity = 1;
    
    }
    
    hideDialoguePrinter() {
    
        this.speechBox.style.animation = (this.currentHideAnimation[0] + " " + this.currentHideAnimation[1] + " " + this.currentHideAnimation[2]);
        this.speechBox.style.opacity = 0;

    }

    setPrintTextSpeed(speed){

        this.printTextSpeed = speed;

    }

    resetDefaultPrintTextSpeed(){

        this.printTextSpeed = 15;

    }

}

function talk(character, message, voiceLine, dialogueBoxAnimation, dialogueBoxTextColor, nameBoxAnimation, nameBoxTextColor, dialogueBoxFont, nameBoxFont) {
    return new Promise((resolve) => {
       
        if(voiceLine != undefined)
        playVoice(character, voiceLine);

        if(dialogueBoxAnimation != undefined){

            dialoguePrinter.setDialogueBoxAnimation(dialogueBoxAnimation);

        }

        if(dialogueBoxTextColor != undefined){

            dialoguePrinter.setDialogueBoxTextColor(dialogueBoxTextColor);

        }

        if(nameBoxAnimation != undefined){

            dialoguePrinter.setNameBoxAnimation(nameBoxAnimation);

        }

        if(nameBoxTextColor != undefined){

            dialoguePrinter.setNameBoxTextColor(nameBoxTextColor);

        }

        if(dialogueBoxFont != undefined){

            dialoguePrinter.setDialogueBoxFont(dialogueBoxFont);

        }

        if(nameBoxFont != undefined){

            dialoguePrinter.setNameBoxFont(nameBoxFont);

        }

        let text = message;

        if(dialoguePrinter.messageLength != 0){

            dialoguePrinter.nameBox.innerHTML = "";
            dialoguePrinter.messageLength = 0;
            dialoguePrinter.tempMessage = "";
            dialoguePrinter.dialogueBox.innerHTML = "";

        }

        dialoguePrinter.nameBox.style.opacity = 1;
        dialoguePrinter.nameBox.innerText = character.name;
        let printer = setInterval( () => {
            
            dialoguePrinter.printText(text.charAt(dialoguePrinter.messageLength));
            dialoguePrinter.messageLength++;
            if(dialoguePrinter.messageLength == (text.length)){

                clearInterval(printer);
                requestClick().then(clearDialogueBox).finally(() =>{
                    
                    characterVoiceLinePlayer.pauseVoicePlayer();  
                    dialoguePrinter.resetDialogueBoxAnimation();
                    dialoguePrinter.resetDialogueBoxTextColor();
                    dialoguePrinter.resetNameBoxAnimation();
                    dialoguePrinter.resetNameBoxTextColor();
                    dialoguePrinter.resetDialogueBoxFont();
                    dialoguePrinter.resetNameBoxFont();
                    resolve();

                });

            }
        }, dialoguePrinter.printTextSpeed);

    });    

}

function soliloquy(message, character, voiceLine, dialogueBoxAnimation, dialogueBoxTextColor, dialogueBoxFont) {
    return new Promise((resolve) => {

        if(voiceLine != undefined)
        playVoice(character, voiceLine);

        if(dialogueBoxAnimation != undefined){

            dialoguePrinter.setDialogueBoxAnimation(dialogueBoxAnimation);

        }

        if(dialogueBoxTextColor != undefined){

            dialoguePrinter.setDialogueBoxTextColor(dialogueBoxTextColor);

        }

        if(dialogueBoxFont != undefined){

            dialoguePrinter.setDialogueBoxFont(dialogueBoxFont);

        }

        let text = message;
        
        if(dialoguePrinter.messageLength != 0){

            dialoguePrinter.nameBox.innerHTML = "";
            dialoguePrinter.messageLength = 0;
            dialoguePrinter.tempMessage = "";
            dialoguePrinter.dialogueBox.innerHTML = "";

        }

        dialoguePrinter.nameBox.style.opacity = 0;
        let printer = setInterval( () => {
            
            dialoguePrinter.printText(text.charAt(dialoguePrinter.messageLength));
            dialoguePrinter.messageLength++;
            if(dialoguePrinter.messageLength == (text.length)){

                clearInterval(printer);
                requestClick().then(clearDialogueBox).finally(() =>{
                    
                    characterVoiceLinePlayer.pauseVoicePlayer();  
                    dialoguePrinter.resetDialogueBoxAnimation();
                    dialoguePrinter.resetDialogueBoxTextColor();
                    dialoguePrinter.resetDialogueBoxFont();
                    resolve();

                });

            }
        }, dialoguePrinter.printTextSpeed);

    });   
    
}

function clearDialogueBox() {
    
    dialoguePrinter.clearDialogueBox();

}

function specialTalk(specialCharacter, message, character, voiceLine, dialogueBoxAnimation, dialogueBoxTextColor, nameBoxAnimation, nameBoxTextColor, dialogueBoxFont, nameBoxFont) {
    return new Promise((resolve) => {

        if(voiceLine != undefined)
        playVoice(character, voiceLine);

        if(dialogueBoxAnimation != undefined){

            dialoguePrinter.setDialogueBoxAnimation(dialogueBoxAnimation);

        }

        if(dialogueBoxTextColor != undefined){

            dialoguePrinter.setDialogueBoxTextColor(dialogueBoxTextColor);

        }

        if(nameBoxAnimation != undefined){

            dialoguePrinter.setNameBoxAnimation(nameBoxAnimation);

        }

        if(nameBoxTextColor != undefined){

            dialoguePrinter.setNameBoxTextColor(nameBoxTextColor);

        }

        if(dialogueBoxFont != undefined){

            dialoguePrinter.setDialogueBoxFont(dialogueBoxFont);

        }

        if(nameBoxFont != undefined){

            dialoguePrinter.setNameBoxFont(nameBoxFont);

        }

        let text = message;

        if(dialoguePrinter.messageLength != 0){

            dialoguePrinter.nameBox.innerHTML = "";
            dialoguePrinter.messageLength = 0;
            dialoguePrinter.tempMessage = "";
            dialoguePrinter.dialogueBox.innerHTML = "";

        }

        dialoguePrinter.nameBox.style.opacity = 1;
        dialoguePrinter.nameBox.innerText = specialCharacter;
        let printer = setInterval( () => {
            
            dialoguePrinter.printText(text.charAt(dialoguePrinter.messageLength));
            dialoguePrinter.messageLength++;
            if(dialoguePrinter.messageLength == (text.length)){

                clearInterval(printer);
                requestClick().then(clearDialogueBox).finally(() =>{
                    
                    characterVoiceLinePlayer.pauseVoicePlayer();  
                    dialoguePrinter.resetDialogueBoxAnimation();
                    dialoguePrinter.resetDialogueBoxTextColor();
                    dialoguePrinter.resetNameBoxAnimation();
                    dialoguePrinter.resetNameBoxTextColor();
                    dialoguePrinter.resetDialogueBoxFont();
                    dialoguePrinter.resetNameBoxFont();
                    resolve();

                });

            }
        }, dialoguePrinter.printTextSpeed);

    });

}

function instantSoliloquy(message) {

    let text = message;

    if(dialoguePrinter.messageLength != 0){

        dialoguePrinter.nameBox.innerHTML = "";
        dialoguePrinter.messageLength = 0;
        dialoguePrinter.tempMessage = "";
        dialoguePrinter.dialogueBox.innerHTML = "";

    }

    dialoguePrinter.nameBox.style.opacity = 0;
    dialoguePrinter.printText(text);
    
}

function showClickRequester() {
    
    dialoguePrinter.showClickRequester();

}

function hideClickRequester() {
    
    dialoguePrinter.hideClickRequester();

}

function showDialoguePrinter(){
    return new Promise((resolve) => {

        dialoguePrinter.displayDialoguePrinter();
        setTimeout(resolve, (parseFloat((dialoguePrinter.currentShowAnimation[1]).substring(0, (dialoguePrinter.currentShowAnimation[1]).length))*1000));

    });
}

function removeDialoguePrinter(){
    return new Promise((resolve) => {

        dialoguePrinter.hideDialoguePrinter();
        setTimeout(resolve, (parseFloat((dialoguePrinter.currentHideAnimation[1]).substring(0, (dialoguePrinter.currentHideAnimation[1]).length))*1000));

    });
}

function setDialoguePrinterCurrentShowAnimation(animation) {
    
    dialoguePrinter.setCurrentShowAnimation(animation);

}

function setDialoguePrinterCurrentHideAnimation(animation) {

    dialoguePrinter.setCurrentHideAnimation(animation);
    
}

function setClickRequesterAnimation(animation) {
    
    dialoguePrinter.setClickRequesterAnimation(animation);

}

function setClickRequesterSource(imageAlbum, imageNumber) {
    
    dialoguePrinter.setClickRequesterSource(imageAlbum, imageNumber);

}

function setDialoguePrinterDefaultFont(font) {
    
    dialoguePrinter.setDefaultFont(font);

}

console.log("DialoguePrinter Class Loaded");
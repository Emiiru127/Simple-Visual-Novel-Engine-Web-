class ObjectDisplay{

    constructor(objectHolder, display){

        this.objects = objectHolder.objects;
        this.objectNames = objectHolder.objectNames;

        this.display = document.getElementById(display);

    }

    //primary methods
    notify(message){

        (this.objects[this.objectNames.indexOf("notify")]).setMessage(message);
        this.displayObject("notify");
        return (this.objects[this.objectNames.indexOf("notify")]);
    
    }

    inquire(message){

        (this.objects[this.objectNames.indexOf("inquire")]).setMessage(message);
        this.displayObject("inquire");
        return (this.objects[this.objectNames.indexOf("inquire")]);
    
    }

    selection(){

        (this.objects[this.objectNames.indexOf("selection")]).setMessage();
        this.displayObject("selection");
        return (this.objects[this.objectNames.indexOf("selection")]);
    
    }

    //secondary Methods
    displayObject(name){

        this.display.style.display = "block";
        this.setDisplay((this.objects[this.objectNames.indexOf(name)]));

    }

    resetDisplay(){

        this.display.style.display = "none";
        this.display.innerHTML = "";

    }

    setDisplay(object){

        this.display.appendChild(object.getDisplay());

    }

}

function notify(message){
   
    return new Promise((resolve) => {

        let object = objectDisplay.notify(message);
        let check = setInterval(() =>{

            if(object.buttonClicked){

                object.resetClicked();
                objectDisplay.resetDisplay();
                clearInterval(check);
                resolve();

            }

        },100);

    });

}

function inquire(message){
   
    return new Promise((resolve) => {

        let object = objectDisplay.inquire(message);
        let check = setInterval(() =>{

            if(object.buttonClicked){

                object.resetClicked();
                objectDisplay.resetDisplay();
                clearInterval(check);
                resolve(object.getInfo());

            }

        },100);

    });

}

function selection(message, buttonContent, buttonValues) {

    return new Promise((resolve) => {

        if(buttonContent == undefined)
            resolve();

        let object = objectDisplay.selection();
        object.setMessage(message);
        object.setButtonContent(buttonContent);
        object.setButtonValues(buttonValues);
        object.createSelection();
        instantSoliloquy(object.getMessage());
        let check = setInterval(() =>{

            if(object.buttonClicked){

                object.resetClicked();
                object.resetSelection();
                objectDisplay.resetDisplay();
                clearInterval(check);
                clearDialogueBox();
                resolve(object.getInfo());

            }

        },100);

    });
    
}

console.log("ObjectDisplay Class Loaded");
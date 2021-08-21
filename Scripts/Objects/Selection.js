class Selection{

    constructor(){

        this.name = "selection";

        this.box = document.createElement("div");
        this.button1 = document.createElement("button");
        this.button2 = document.createElement("button");
        this.button3 = document.createElement("button");
        this.button4 = document.createElement("button");

        this.chosenButton = [false, false, false, false];
        this.message;
        this.buttonContent = [];
        this.buttonValues = [];

        this.box.setAttribute("id", "selectionBox");
 
        this.button1.setAttribute("id", "selectionButton1");
        this.button2.setAttribute("id", "selectionButton2");
        this.button3.setAttribute("id", "selectionButton3");    
        this.button4.setAttribute("id", "selectionButton4");

        this.button1.setAttribute("class", "selectionChoiceButton");
        this.button2.setAttribute("class", "selectionChoiceButton selectionAddButton");
        this.button3.setAttribute("class", "selectionChoiceButton selectionAddButton");    
        this.button4.setAttribute("class", "selectionChoiceButton selectionAddButton");

        this.buttonClicked = false;

        this.button1.addEventListener("click", () => {

            this.chosenButton[0] = true;
            this.buttonClicked = true;

        });

        this.button2.addEventListener("click", () => {

            this.chosenButton[1] = true;
            this.buttonClicked = true;

        });

        this.button3.addEventListener("click", () => {

            this.chosenButton[2] = true;
            this.buttonClicked = true;

        });

        this.button4.addEventListener("click", () => {

            this.chosenButton[3] = true;
            this.buttonClicked = true;

        });

    }

    setButtonContent(buttonContent){

        this.buttonContent = buttonContent;

    }

    setButtonValues(buttonValues){

        this.buttonValues = buttonValues;

    }

    setMessage(message){

        this.message = message;

    }

    getMessage(){

        return this.message;

    }

    getInfo(){

        if(this.buttonValues == undefined){
                
            this.buttonValues = [];
            this.buttonValues.length = 4;
            
        }

        for(let i = 0; i < 4; i++){

            if(this.buttonValues[i] == undefined){
                
                this.buttonValues[i] = i;
                
            }

            if(this.chosenButton[i]){

                let info =  this.buttonValues[i];
                this.resetChosenButton();
                return info;

            }
           
        }


    }

    createSelection(){

        if(1 <= this.buttonContent.length){
            
            this.button1.innerHTML = this.buttonContent[0];
            this.box.appendChild(this.button1);

        }
        if(2 <= this.buttonContent.length){
            
            this.button2.innerHTML = this.buttonContent[1];
            this.box.appendChild(this.button2);

        }
        if(3 <= this.buttonContent.length){
            
            this.button3.innerHTML = this.buttonContent[2];
            this.box.appendChild(this.button3);

        }
        if(4 <= this.buttonContent.length){
            
            this.button4.innerHTML = this.buttonContent[3];
            this.box.appendChild(this.button4);

        }
       
    }

    resetSelection(){

        this.box.innerHTML = "";

    }

    getDisplay(){

        return this.box;

    }

    resetChosenButton(){

        for(let i = 0; i < 4; i++){

            this.chosenButton[i] = false;

        }

    }

    resetClicked(){

        this.buttonClicked = false;

    }

}

console.log("Selection Object Loaded");
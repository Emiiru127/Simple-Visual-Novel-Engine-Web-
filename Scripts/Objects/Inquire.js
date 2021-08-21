class Inquire{

    constructor(){

        this.name = "inquire";

        this.box = document.createElement("div");
        this.message = document.createElement("div");
        this.input = document.createElement("input");
        this.button = document.createElement("button");
       

        this.box.setAttribute("id", "inquireBox");
        this.message.setAttribute("id", "inquireMessage");
        this.input.setAttribute("id", "inquireInput");
        this.button.setAttribute("id", "inquireButton");

        this.box.appendChild(this.message);
        this.box.appendChild(document.createElement("br"));
        this.box.appendChild(this.input);
        this.box.appendChild(document.createElement("br")); 
        this.box.appendChild(this.button);

        this.button.innerHTML = "Ok";
        this.buttonClicked = false;

        this.button.addEventListener("click", () => {

            this.buttonClicked = true;

        });

    }

    setMessage(message){

        this.message.innerHTML = message;

    }

    getDisplay(){

        return this.box;

    }

    getInfo(){

        let info = this.input.value;
        this.resetInfo();
        return info;

    }

    resetInfo(){

        this.input.value = "";

    }

    resetClicked(){
        
        this.buttonClicked = false;

    }

}

console.log("Inquire Object Loaded");
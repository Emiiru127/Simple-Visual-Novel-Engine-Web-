class Notify{

    constructor(){

        this.name = "notify";

        this.box = document.createElement("div");
        this.message = document.createElement("div");
        this.button = document.createElement("button");

        this.box.setAttribute("id", "notifyBox");
        this.message.setAttribute("id", "notifyMessage");
        this.button.setAttribute("id", "notifyButton");

        this.box.appendChild(this.message);
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

    resetClicked(){

        this.buttonClicked = false;

    }

}

console.log("Notify Object Loaded");
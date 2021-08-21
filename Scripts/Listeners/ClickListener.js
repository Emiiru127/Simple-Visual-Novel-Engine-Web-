class ClickListener{

    constructor(element){

    this.area = document.getElementById(element);
    this.areaClicked = false;
    
    this.area.addEventListener("click", () =>{

        this.areaClicked = true;
        
    });

    }

    reset(){

        this.areaClicked = false;

    }

}

function requestClick() {
    
    return new Promise((resolve) => {
        
        showClickRequester()
        clickListener.area.style.display = "block";

        let click = setInterval( () => { 

            if(clickListener.areaClicked){

                clearInterval(click);
                hideClickRequester();
                clickListener.area.style.display = "none";
                clickListener.reset();
                resolve();

            }

        }, 100);

    });
        
}

console.log("ClickListener Loaded");
class StateDisplay{

    constructor(states){

        this.states = states.states;
        this.stateNames = states.stateNames;
        this.currentState;

    }

    // primary methods

    update(){

        for(let i = 0 ; i < this.states.length; i++){

            if(this.currentState == this.stateNames[i]){

               (this.states[i]).state.style.display = "block";

            }
            else{

                (this.states[i]).state.style.display = "none";

            }

        }
        
    }

    // secondary methods

    setCurrentState(state){

        this.currentState = state.name;
        
    }


    getCurrentState(){

        return this.currentState;

    }

}

console.log("State Class Loaded");
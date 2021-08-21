class States{ 

     constructor(){

        this.states = [];
        this.stateNames = [];

    }

    addState(state){

        this.states.push(state);
        this.stateNames.push(state.name);

    }

    showStatesOnConsole(){

        console.log(this.states);
        console.log(this.stateNames);

    }

}

console.log("States Class Loaded");
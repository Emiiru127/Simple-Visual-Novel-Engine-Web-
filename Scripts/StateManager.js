var states = new States();
var stateDisplay = new StateDisplay(states);

states.addState(creditsState);
states.addState(gameState);
states.addState(settingsState);
states.addState(menuState);
states.addState(loadingState);

setTimeout( () =>{
stateDisplay.setCurrentState(menuState);
stateDisplay.update();
}, 3000);

//Menu State
(menuState.buttons[menuState.buttonNames.indexOf("Start")]).onclick = () => {
  
    stateDisplay.currentState = gameState.name;
    stateDisplay.update(); 
    stopBackgroundMusic();
    demo(); 

};

(menuState.buttons[menuState.buttonNames.indexOf("Settings")]).onclick = () => {
  
    stateDisplay.currentState = settingsState.name;
    stateDisplay.update();
    
};

(menuState.buttons[menuState.buttonNames.indexOf("Credits")]).onclick = () => {
  
    stateDisplay.currentState = creditsState.name;
    stateDisplay.update();
  
};

//Settings State
(settingsState.buttons[settingsState.buttonNames.indexOf("Back")]).onclick = () => {
  
    stateDisplay.currentState = menuState.name;
    stateDisplay.update();

  };

//Credits State
(creditsState.buttons[creditsState.buttonNames.indexOf("Back")]).onclick = () => {
  
    stateDisplay.currentState = menuState.name; 
    stateDisplay.update();

};

setTimeout(()=>{

  //Play backgrounds songs here

},(3*1000));
 
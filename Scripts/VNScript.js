addScript("Scripts/Classes/ClassLoader.js");
addScript("Scripts/Listeners/ListenerLoader.js");
addScript("Scripts/Objects/ObjectLoader.js");
setTimeout(() => {
addScript("Scripts/Assets.js");
addScript("Scripts/States/StateLoader.js")
}, 1000);
setTimeout(() => {
addScript("Scripts/Game.js");
addScript("Scripts/StateManager.js");
addScript("Scripts/SoundManager.js");
}, 2000);
setTimeout(() => {
addScript("Scripts/Routes/RouteLoader.js");
}, 3000);
console.log("Loading Visual Novel Scripts");
   

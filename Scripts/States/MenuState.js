var menuState = new State("MenuState", "menuState");

menuState.setImageBackground(sampleBackgrounds, 1);

menuState.addButton("Start", "menuStart");
menuState.addButton("Settings", "menuSettings");
menuState.addButton("Credits", "menuCredits");

console.log("Menu State Loaded");
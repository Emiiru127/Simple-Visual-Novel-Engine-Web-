/*

      ALWAYS USE ASYNC FUNCTIONS AND "AWAIT" KEYWORD IN ORDER FOR THE CODE TO NOT RUN IMMEDIATELY.

*/


async function demo() {

      await sleep(3000);
      await showDialoguePrinter();
      await soliloquy("Hello, testing... testing... this is from the Dialogue Printer");
      await removeDialoguePrinter();
      demoEnded();

}

function demoEnded() {
      
      stateDisplay.currentState = menuState.name;
      stateDisplay.update();

}
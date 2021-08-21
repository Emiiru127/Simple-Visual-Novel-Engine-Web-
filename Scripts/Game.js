function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}


backgroundDisplay.setBackground1Path(sampleBackgrounds.backgrounds[0]);
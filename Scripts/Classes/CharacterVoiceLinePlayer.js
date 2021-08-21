class CharacterVoiceLinePlayer{

    constructor(characters){

        this.characters = characters.characters;
        
        this.playerMainVolume = 100;
        this.playerVolume = 75;
        this.playerMaxVolume = this.computeMaxVolume();
        this.playerPercentageVolume = this.computePercentageVolume();

        this.player = new Audio();

        this.updatePlayerVolume(this.playerVolume);

    }

    //primary methods
    playVoice(character, voiceNumber){

        this.setVoicePlayerSource((this.characters.get(character.name)).voiceLines[voiceNumber-1]);
        this.playVoicePlayer();

        console.log(this.computeMaxVolume());
        console.log(this.player.volume);

    }

    // secondary methods
    playVoicePlayer(){

        this.player.play();

    }

    pauseVoicePlayer(){

        console.log("Paused");
        this.player.pause();

    }

    setVoicePlayerVolume(volume){

        this.player.volume = volume;
        
    }

    setVoicePlayerSource(source){

        this.player.src = source;

    }

    computeMaxVolume(){

        return parseFloat(this.playerVolume / 100);

    }

    computePercentageVolume(){
        
        return parseFloat(this.playerMaxVolume / 100);

    }

    updatePlayerVolume(volume){

        this.playerVolume = (volume/100)*this.playerMainVolume;
        this.playerMaxVolume = this.computeMaxVolume();
        this.playerPercentageVolume = this.computePercentageVolume();
        this.player.volume = (this.playerVolume * this.playerPercentageVolume);

    }

    updatePlayerMainVolume(mainVolume, playerVolume){

        this.playerMainVolume = mainVolume;
        this.updatePlayerVolume(playerVolume);

    }

    mutePlayer(){

        this.player.muted = true;

    }

    unmutePlayer(){

        this.player.muted = false;
        
    }

}

function playVoice(character, voiceNumber) {   

    characterVoiceLinePlayer.playVoice(character, voiceNumber);
    console.log(character);
}

function updateCharacterVoiceLineVolume(volume) {

    characterVoiceLinePlayer.updatePlayerVolume(volume);
    
}

function updateCharacterVoiceLineMainVolume(mainVolume, playerVolume) {

    characterVoiceLinePlayer.updatePlayerMainVolume(mainVolume, playerVolume);
    
}

function muteCharacterVoiceLinePlayer() {

    characterVoiceLinePlayer.mutePlayer();
    
}

function unmuteCharacterVoiceLinePlayer() {

    characterVoiceLinePlayer.unmutePlayer();
    
}

console.log("CharacterVoiceLinePlayer Class Loaded");
class SoundEffectPlayer{

    constructor(soundEffectLibrary){

        this.playlist = soundEffectLibrary.soundEffects;
        this.playingSoundEffects = [];
        this.playingSoundEffectNames = [];
        this.muted = false;
        this.playerMainVolume = 50;
        this.playerVolume = 75;
        this.playerMaxVolume = this.computeMaxVolume();
        this.playerPercentageVolume = this.computePercentageVolume();
        this.updatePlayerVolume(this.playerVolume);
        
    }

    //primary methods
    playSoundEffect(soundEffect, soundEffectNumber, startTime){

        let player = new Audio();
        player.src = (this.playlist.get(soundEffect.name)).soundEffects[soundEffectNumber-1];
        player.volume = (this.playerVolume * this.playerPercentageVolume);
        
        if(startTime != undefined)
            player.currentTime = startTime;

        if(this.muted){

            player.muted = true;

        }

        player.play();

    }

    playListedSoundEffect(soundEffect, soundEffectNumber, name, type, startTime){

        let player = new SoundEffect(this.playingSoundEffects, this.playingSoundEffectNames, (this.playlist.get(soundEffect.name)).soundEffects[soundEffectNumber-1], type);
        player.setName(name);
        player.changeVolume((this.playerVolume * this.playerPercentageVolume));

        if(startTime != undefined)
            player.setCurrentTime(startTime);

        if(this.muted){

            player.mutePlayer();

        }

        player.play();

        this.playingSoundEffects.push(player);
        this.playingSoundEffectNames.push(name);

    }

    // secondary methods
    resumeSoundEffect(name){

        (this.playingSoundEffects[this.playingSoundEffectNames.indexOf(name)]).play();

    }

    pauseSoundEffect(name){

        (this.playingSoundEffects[this.playingSoundEffectNames.indexOf(name)]).pause();

    }

    stopSoundEffect(name){

        (this.playingSoundEffects[this.playingSoundEffectNames.indexOf(name)]).pause();
        this.playingSoundEffects.splice((this.playingSoundEffectNames.indexOf(name)), 1);
        this.playingSoundEffectNames.splice((this.playingSoundEffectNames.indexOf(name)), 1);
    
    }

    muteAllListedSoundEffects(){

        for(let i = 0; i < this.playingSoundEffects.length; i++){

            this.playingSoundEffects[i].mutePlayer();

        }

    }

    unmuteAllListedSoundEffects(){

        for(let i = 0; i < this.playingSoundEffects.length; i++){

            this.playingSoundEffects[i].unmutePlayer();

        }

    }

    updateAllListedSoundEffectsVolume(){

        for(let i = 0; i < this.playingSoundEffects.length; i++){

            this.playingSoundEffects[i].changeVolume((this.playerVolume * this.playerPercentageVolume));

        }

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
        this.updateAllListedSoundEffectsVolume();

    }

    updatePlayerMainVolume(mainVolume, playerVolume){

        this.playerMainVolume = mainVolume;
        this.updatePlayerVolume(playerVolume);

    }

}

function playSoundEffect(soundEffect, soundEffectNumber, type, name, startTime) {   

    if(type == undefined || name == undefined)
        type = "play";

    if(type == "play"){

        soundEffectPlayer.playSoundEffect(soundEffect, soundEffectNumber, startTime);

    }
    else if(type == "single" || type == "looped"){

        soundEffectPlayer.playListedSoundEffect(soundEffect, soundEffectNumber, name, type, startTime);

    }

}

function resumeSoundEffect(name){

    soundEffectPlayer.resumeSoundEffect(name);

}
function pauseSoundEffect(name){

    soundEffectPlayer.pauseSoundEffect(name);

}
function stopSoundEffect(name){

    soundEffectPlayer.stopSoundEffect(name);

}

function updateSoundEffectsPlayerVolume(volume) {

    soundEffectPlayer.updatePlayerVolume(volume);
    
}

function updateSoundEffectsPlayerMainVolume(mainVolume, playerVolume) {

    soundEffectPlayer.updatePlayerMainVolume(mainVolume, playerVolume);
    
}

function muteSoundEffectsPlayer() {
    
    soundEffectPlayer.muted = true;
    soundEffectPlayer.muteAllListedSoundEffects();

}

function unmuteSoundEffectsPlayer() {
    
    soundEffectPlayer.muted = false;
    soundEffectPlayer.unmuteAllListedSoundEffects();

}


console.log("SoundEffectPlayer Class Loaded");
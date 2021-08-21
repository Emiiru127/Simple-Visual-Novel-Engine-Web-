class SoundEffectLibrary{

    constructor(){

        this.soundEffects = new Map();

    }

    addSoundEffectPlaylist(soundEffectPlaylist){

        this.soundEffects.set(soundEffectPlaylist.name, soundEffectPlaylist);

    }

    showBackgroundsOnConsole(){

        console.log(this.soundEffects);

    }

}

console.log("SoundEffectLibrary Class Loaded");
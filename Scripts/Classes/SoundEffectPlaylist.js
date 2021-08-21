class SoundEffectPlaylist{

    constructor(name){

        this.name = name;
        this.folderPath = "Assets/Audio/Sound Effects/" + name;
        this.soundEffects = [];

    }

    addSoundEffect(soundEffectName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        this.soundEffects.push(this.folderPath + "/" + extraPath + soundEffectName + fileExtension);

    }

}

console.log("SoundEffectPlaylist Class Loaded");
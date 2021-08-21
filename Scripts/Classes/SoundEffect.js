class SoundEffect{

    constructor(playingSoundEffects, playingSoundEffectNames, source, type){

        this.name;
        this.player = new Audio();
        this.player.src = source;

        if(type == undefined)
            type = "single";

        if(type == "single"){

            this.player.onended = () => {

                playingSoundEffects.splice((playingSoundEffectNames.indexOf(this.name)),1);
                playingSoundEffectNames.splice((playingSoundEffectNames.indexOf(this.name)),1);
    
            };  

        }
        else if(type == "looped"){

            this.player.loop = true;

        }
    
    }
    
    setName(name){

        this.name = name;

    }

    play(){

        this.player.play();

    }

    pause(){

        this.player.pause();

    }

    changeVolume(volume){

        this.player.volume = volume;

    }

    mutePlayer(){

        this.player.muted = true;

    }

    unmutePlayer(){

        this.player.muted = false;

    }

    setCurrentTime(startTime){

        this.player.currentTime = startTime;

    }

}

console.log("SingleSoundEffect Class Loaded");
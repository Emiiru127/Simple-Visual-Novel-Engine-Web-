class BackgroundMusicPlayer{

    constructor(backgroundMusicLibrary){

        this.playlist = backgroundMusicLibrary.backgroundMusics;
        this.active = false;  
        this.isPlayerActive = [false,false];
        this.playing;
        this.playerMainVolume = 50;
        this.playerVolume = 50;
        this.playerMaxVolume = this.computeMaxVolume();
        this.playerPercentageVolume = this.computePercentageVolume();
        this.playerMinVolume = this.playerPercentageVolume;

        this.musicPlayerOne = new Audio();
        this.musicPlayerTwo = new Audio();

        this.updatePlayerVolume(this.playerVolume);

        this.musicPlayerOne.loop = true;
        this.musicPlayerTwo.loop = true;

        this.musicPlayers = [this.musicPlayerOne, this.musicPlayerTwo];

    }

    // primary methods

    playBackgroundMusicPlayer(player, backgroundMusic, backgroundMusicNumber, startTime){

        this.pauseMusicPlayer(player);
        this.setMusicPlayerSong(player, (this.playlist.get(backgroundMusic.name)).songs[(backgroundMusicNumber-1)]);
        this.playMusicPlayer(player, startTime);
        this.isPlayerActive[(player-1)] = true;
        this.playing = (player-1);
        console.log("Music Player " + this.playing + " is Active!!!");

    }

    // secondary methods

    playMusicPlayer(player, startTime){

        if(startTime != undefined)
            (this.musicPlayers[(player-1)]).currentTime = startTime;

        (this.musicPlayers[(player-1)]).play();

    }

    pauseMusicPlayer(player){

        (this.musicPlayers[(player-1)]).pause();
        
    }

    setMusicPlayerVolume(player, volume){

        (this.musicPlayers[(player-1)]).volume = volume;

        
    }

    setMusicPlayerSong(player, source){

        (this.musicPlayers[(player-1)]).src = source;

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
        this.playerMinVolume = this.playerPercentageVolume;
        this.musicPlayerOne.volume = this.computeMaxVolume();
        this.musicPlayerTwo.volume = this.computeMaxVolume();

    }

    updatePlayerMainVolume(mainVolume, playerVolume){

        this.playerMainVolume = mainVolume;
        this.updatePlayerVolume(playerVolume);

    }

    mutePlayers(){

        this.musicPlayerOne.muted = true;
        this.musicPlayerTwo.muted = true;

    }

    unmutePlayers(){

        this.musicPlayerOne.muted = false;
        this.musicPlayerTwo.muted = false;
        
    }

}

function playBackgroundMusic(backgroundMusic, backgroundMusicNumber, startTime){

    let playerOne; 
    let playerTwo; 

    if(backgroundMusicPlayer.isPlayerActive[0] && backgroundMusicPlayer.active){

        backgroundMusicPlayer.playBackgroundMusicPlayer(2, backgroundMusic, backgroundMusicNumber, startTime);
        backgroundMusicPlayer.isPlayerActive[0] = false;
        playerOne = 0; 
        playerTwo = 1;

    }
    else if(backgroundMusicPlayer.isPlayerActive[1] && backgroundMusicPlayer.active){

        backgroundMusicPlayer.playBackgroundMusicPlayer(1, backgroundMusic, backgroundMusicNumber, startTime);
        backgroundMusicPlayer.isPlayerActive[1] = false;
        playerOne = 1; 
        playerTwo = 0;

    }

    if(backgroundMusicPlayer.active){

        let fadeOut = setInterval( () => {
            
            if((backgroundMusicPlayer.musicPlayers[playerOne]).volume > backgroundMusicPlayer.playerMinVolume && (backgroundMusicPlayer.musicPlayers[playerOne]).volume <= backgroundMusicPlayer.playerMaxVolume){

                (backgroundMusicPlayer.musicPlayers[playerOne]).volume -= backgroundMusicPlayer.playerPercentageVolume;

            }
            else{

                clearInterval(fadeOut);
                
                if(playerOne == 1){

                    backgroundMusicPlayer.setMusicPlayerVolume(playerOne, backgroundMusicPlayer.playerMaxVolume);
                    backgroundMusicPlayer.setMusicPlayerVolume((playerOne+1), backgroundMusicPlayer.playerMinVolume);
                    backgroundMusicPlayer.pauseMusicPlayer((playerOne+1));

                }
                
            }
        
        }, 1);


        let fadeIn = setInterval( () => {
            
            if((backgroundMusicPlayer.musicPlayers[playerTwo]).volume >= backgroundMusicPlayer.playerMinVolume && (backgroundMusicPlayer.musicPlayers[playerTwo]).volume < backgroundMusicPlayer.playerMaxVolume){

                (backgroundMusicPlayer.musicPlayers[playerTwo]).volume += backgroundMusicPlayer.playerPercentageVolume;

            }
            else{

                clearInterval(fadeIn);
            
                if(playerTwo == 1){

                    backgroundMusicPlayer.setMusicPlayerVolume(playerTwo, backgroundMusicPlayer.playerMinVolume);
                    backgroundMusicPlayer.setMusicPlayerVolume((playerTwo+1), backgroundMusicPlayer.playerMaxVolume);
                    backgroundMusicPlayer.pauseMusicPlayer(playerTwo);

                }
                
            }
        
        }, 1);

    }    

    if(!(backgroundMusicPlayer.active)){

        backgroundMusicPlayer.playBackgroundMusicPlayer(1, backgroundMusic, backgroundMusicNumber, startTime);
        (backgroundMusicPlayer.musicPlayers[1]).volume = 0;
        backgroundMusicPlayer.active = true; 
        console.log("BackgroundMusicPlayer now active");

    }

}

function pauseBackgroundMusic(){

    if(backgroundMusicPlayer.active){

        let fadeOut = setInterval( () => {
            
            if((backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume > backgroundMusicPlayer.playerMinVolume && (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume <= backgroundMusicPlayer.playerMaxVolume){

                (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume -= backgroundMusicPlayer.playerPercentageVolume;

            }
            else{

                clearInterval(fadeOut);
                backgroundMusicPlayer.setMusicPlayerVolume((backgroundMusicPlayer.playing+1), backgroundMusicPlayer.playerMinVolume);
                backgroundMusicPlayer.pauseMusicPlayer(backgroundMusicPlayer.playing+1);
         
            }
        
        }, 25);

    }    

}

function resumeBackgroundMusic(){

    if(backgroundMusicPlayer.active){

        backgroundMusicPlayer.playMusicPlayer(backgroundMusicPlayer.playing+1);
        let fadeIn = setInterval( () => {
            
            if((backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume >= backgroundMusicPlayer.playerMinVolume && (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume < backgroundMusicPlayer.playerMaxVolume){

                (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume += backgroundMusicPlayer.playerPercentageVolume;

            }
            else{

                clearInterval(fadeIn);
                backgroundMusicPlayer.setMusicPlayerVolume((backgroundMusicPlayer.playing+1), backgroundMusicPlayer.playerMaxVolume);

            }
        
        }, 25);

    }    

}

function stopBackgroundMusic(){

    if(backgroundMusicPlayer.active){

        let fadeOut = setInterval( () => {
            
            if((backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume > backgroundMusicPlayer.playerMinVolume && (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume <= backgroundMusicPlayer.playerMaxVolume){

                (backgroundMusicPlayer.musicPlayers[backgroundMusicPlayer.playing]).volume -= backgroundMusicPlayer.playerPercentageVolume;

            }
            else{

                clearInterval(fadeOut);
                backgroundMusicPlayer.setMusicPlayerVolume((backgroundMusicPlayer.playing+1), backgroundMusicPlayer.playerMinVolume);
                backgroundMusicPlayer.pauseMusicPlayer(backgroundMusicPlayer.playing+1);
                backgroundMusicPlayer.active = false;
                backgroundMusicPlayer.isPlayerActive = [false, false];
                backgroundMusicPlayer.playing = undefined;
                backgroundMusicPlayer.setMusicPlayerVolume(1, backgroundMusicPlayer.playerMaxVolume);
                backgroundMusicPlayer.setMusicPlayerVolume(2, backgroundMusicPlayer.playerMaxVolume);

            }
        
        }, 1);

    }    

}

function updateBackgroundMusicVolume(volume) {

    backgroundMusicPlayer.updatePlayerVolume(volume);
    
}

function updateBackgroundMusicMainVolume(mainVolume, playerVolume) {

    backgroundMusicPlayer.updatePlayerMainVolume(mainVolume, playerVolume);
    
}

function muteBackgroundMusicPlayer() {

    backgroundMusicPlayer.mutePlayers();
    
}

function unmuteBackgroundMusicPlayer() {

    backgroundMusicPlayer.unmutePlayers();
    
}

console.log("BackgroundMusicPlayer Class Loaded");
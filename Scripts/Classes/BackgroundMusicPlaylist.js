class BackgroundMusicPlaylist{

    constructor(name){

        this.name = name;
        this.folderPath = "Assets/Audio/Background Songs/" + name;
        this.songs = [];

    }

    addSong(songName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        this.songs.push(this.folderPath + "/" + extraPath + songName + fileExtension);

    }

}

console.log("BackgroundMusic Class Loaded");
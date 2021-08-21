class BackgroundMusicLibrary{

    constructor(){

        this.backgroundMusics = new Map();

    }

    addBackgroundMusicPlaylist(backgroundMusicPlaylist){

        this.backgroundMusics.set(backgroundMusicPlaylist.name, backgroundMusicPlaylist);

    }

    showBackgroundsOnConsole(){

        console.log(this.backgroundMusics);

    }

}

console.log("BackgroundMusicPlaylist Class Loaded");
class ImageLibrary{

    constructor(){

        this.imageLibrary = new Map();

    }

    addAlbum(imageAlbum){

        this.imageLibrary.set(imageAlbum.name, imageAlbum);

    }

    showImageLibraryOnConsole(){

        console.log(this.imageLibrary);

    }

}

console.log("ImageLibrary Class Loaded");
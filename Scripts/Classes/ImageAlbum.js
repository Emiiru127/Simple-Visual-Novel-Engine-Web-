class ImageAlbum{

    constructor(name){

        this.name = name;
        this.folderPath = "Assets/Images/" + name;
        this.images = [];

    }

    addImage(imagePath, fileExtension){
 
        this.images.push(this.folderPath + "/" + imagePath + fileExtension);
        
    }

    showImagesOnConsole(){

        console.log(this.images);

    }

}

console.log("ImageAlbum Class Loaded");
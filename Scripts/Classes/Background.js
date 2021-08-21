class Background{

    constructor(name){

        this.name = name;
        this.folderPath = "Assets/Backgrounds/" + name;
        this.backgrounds = [];

    }

    addSprite(spriteName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        this.backgrounds.push(this.folderPath + "/" + extraPath + spriteName + fileExtension);

    }


}



console.log("Background Class Loaded");
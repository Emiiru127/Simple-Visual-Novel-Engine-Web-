class Character{

    constructor(name){

        this.name = name;
        this.folderPath = "Assets/Characters/" + name;
        this.sprites = [];
        this.voiceLines = [];

    }

    addSprite(spriteName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";

        this.sprites.push(this.folderPath + "/Sprites/" + extraPath + spriteName + fileExtension);

    }

    addVoiceLine(voiceLineName, fileExtension, extraPath){

        if(extraPath == undefined)
            extraPath = "";
            
        this.voiceLines.push(this.folderPath + "/Voice Lines/" + extraPath + voiceLineName + fileExtension);

    }

}

console.log("Character Class Loaded");
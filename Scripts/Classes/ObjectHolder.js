class ObjectHolder{

    constructor(){

        this.objects = [];
        this.objectNames = [];

    }

    addObject(object){

        this.objects.push(object);
        this.objectNames.push(object.name);

    }

    showObjectsOnConsole(){

        console.log(this.objects);
        console.log(this.objectNames);

    }

}

console.log("ObjectHolder Class Loaded");
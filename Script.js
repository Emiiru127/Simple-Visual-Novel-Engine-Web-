function addScript( src ) {

    let visualNovelContainer = document.getElementById("VNContainer");
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    //s.defer = true;
    visualNovelContainer.appendChild( s );

}

addScript("Scripts/VNScript.js");



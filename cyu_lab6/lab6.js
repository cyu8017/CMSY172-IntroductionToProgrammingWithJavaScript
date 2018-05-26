//Name: Charlie Yu
//Program Description: The Document Object Model
//Date: 4/18/2018

// The init function sets the event handler
// functions for the mouseover and mouseout
// events.
function init()
{  
    // Use the image with the id of map
    var mapImage = document.getElementById("map");
  
    //Use the clearImage event
    //handler function for the
    //mouseover event.
    mapImage.onmouseover = clearImage;

    //Use the blurImage event
    //handler function for the
    //mouseout event.
    mapImage.onmouseout = blurImage;  
}

// mouseover event handler function
// Use the image with the id of map
function clearImage() 
{  
    // Use the image with the id of map
    var image = document.getElementById("map");
  
    // Use the map.jpg image for 
    // the image source.
    image.src = "map.jpg";
}

// mouseout event handler function

function blurImage()
{  

    // Use the image with the id of map
    var image = document.getElementById("map");
  
    // Use the mapblur.jpg image for 
    // the image source.
    image.src = "mapblur.jpg";
}

// Use the init function for the 
// onload event handler to make 
// sure the whole page is loaded 
// before executing any JavaScript..
window.onload = init;
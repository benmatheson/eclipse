//https://www.flickr.com/photos/billypalooza/2749664749/

//Saira Semi Condensed

//https://cdn.pixabay.com/photo/2014/04/02/16/27/moon-307307_1280.png

function toggleVis() {
  
  var ct = document.getElementById('con');
    event.preventDefault();

console.log("this is the current dispaly" +ct.style.opacity);
  if (ct.style.opacity == 0) { 
        ct.style.opacity = 1;   window.scroll(0,findPos(document.getElementById("con")));

    } else {
        ct.style.opacity= 0;
    }
  
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}
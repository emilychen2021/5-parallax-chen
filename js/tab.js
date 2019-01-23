function openPlace (PlaceName) {
    var i;
    var x = document.getElementsByClassName("place");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(PlaceName).style.display = "block"; 
}
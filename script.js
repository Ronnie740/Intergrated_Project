function get(x){
  return document.getElementById(x);
}



function showNav() {
  if (get("nav").style.display = "none") {
    return get("nav").style.display = "block";
  } 
}

function hideNav(){
  if (document.getElementById("nav").style.display = "block") {
   return document.getElementById("nav").style.display = "none";
  }
}

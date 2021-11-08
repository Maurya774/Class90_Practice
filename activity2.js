function back(){
    window.location="index.html";
    
}
function getscore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> score:"+score+"</h1>";
}
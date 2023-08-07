var inputPageDiv=document.getElementById("input-page");
var btnSubmit=document.querySelector("#btn-submit");
var outputDiv=document.querySelector("#output");
var btnRestart=document.getElementById("btn-restart");
var buildLayout=document.getElementById("layout")

btnSubmit.addEventListener("click",showLayout)
function showLayout(){
    var noOfFloors=document.querySelector("#no-of-floors").value;
    var noOfLifts=document.querySelector("#no-of-lifts").value;
    console.log(noOfFloors);
    console.log(noOfLifts);
    inputPageDiv.style.display="none";
    btnRestart.style.display="inline";
    buildLayout.style.display="inline";

}
btnRestart.addEventListener("click",showInput)
function showInput(){
    inputPageDiv.style.display="inline";
    buildLayout.style.display="none";
}
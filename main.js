var inputPageDiv=document.querySelector("#input-page");
var btnSubmit=document.querySelector("#btn-submit");
var outputDiv=document.querySelector("#output");
var btnRestart=document.querySelector("#btn-restart");
var buildLayout=document.querySelector("#layout")

btnSubmit.addEventListener("click",showLayout)
function showLayout(){
    var noOfFloors=document.querySelector("#no-of-floors").value;
    var noOfLifts=document.querySelector("#no-of-lifts").value;
    console.log(noOfFloors);
    console.log(noOfLifts);
    inputPageDiv.style.display="none";
    btnRestart.style.display="block";
    for(let i=1;i<=5;i++){
    buildLayout.style.display="block";
    console.log(buildLayout);
    }

}
btnRestart.addEventListener("click",showInput)
function showInput(){
    inputPageDiv.style.display="inline";
    btnRestart.style.display="none";
    buildLayout.style.display="none";
}
var inputPageDiv=document.querySelector("#input-page");
var btnSubmit=document.querySelector("#btn-submit");
var outputDiv=document.querySelector("#output");
var btnRestart=document.querySelector("#btn-restart");
var buildLayout=document.querySelector("#layout");
const floorDesign=document.createElement('div');
floorDesign.setAttribute("class","floorDesign");
    
btnSubmit.addEventListener("click",showLayout)
function showLayout(){
    var noOfFloors=document.querySelector("#no-of-floors").value;
    var noOfLifts=document.querySelector("#no-of-lifts").value;
    
    inputPageDiv.style.display="none";
    btnRestart.style.display="block";

    if(noOfFloors<=10 && noOfFloors>=1 && noOfLifts<=10 && noOfLifts>=1){
    
        for(var i=noOfFloors;i>=0;i--){
            
            const floorNo=document.createElement('div');
            floorNo.setAttribute("class","floorNo")
            const upBtn=document.createElement("button");
            upBtn.setAttribute("class","upBtn")
            const downBtn=document.createElement("button");
            downBtn.setAttribute("class","downBtn");
            
            floorNo.textContent="Floor "+i;
            floorNo.appendChild(upBtn);
            upBtn.textContent="Up";
            floorNo.appendChild(downBtn);
            downBtn.textContent="Down";

            floorDesign.appendChild(floorNo);
            buildLayout.appendChild(floorDesign);

        }
        for(var i=1;i<=noOfLifts;i++){

            const liftDesign=document.createElement('div');
            liftDesign.setAttribute("class","liftDesign");
            floorDesign.appendChild(liftDesign)
        }

    }else if(noOfFloors>10 && noOfLifts>10){
        alert("Maximum number of floors and lifts can be 10");
    }else if(noOfFloors>10){
        alert("Maximum number of floors can be 10");
    }else if(noOfLifts>10){
        alert("Maximum number of lifts can be 10");
    }else if(noOfFloors<=0 || noOfLifts<=0){
        alert("Number of floors or lifts cannot be 0 or negative");
    }


}

btnRestart.addEventListener("click",showInput)
function showInput(){
    inputPageDiv.style.display="inline";
    btnRestart.style.display="none";
    floorDesign.innerHTML="";
}

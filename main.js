var inputPageDiv=document.querySelector("#input-page");
var btnSubmit=document.querySelector("#btn-submit");
var outputDiv=document.querySelector("#output");
var btnRestart=document.querySelector("#btn-restart");
var buildLayout=document.querySelector("#layout");
let floorDesign=document.createElement('div');
floorDesign.setAttribute("class","floorDesign");
    
btnSubmit.addEventListener("click",showLayout)
function showLayout(){
    var noOfFloors=document.querySelector("#no-of-floors").value;
    var noOfLifts=document.querySelector("#no-of-lifts").value;
    
    inputPageDiv.style.display="none";
    btnRestart.style.display="block";

    if(noOfFloors<=10 && noOfFloors>=1 && noOfLifts<=10 && noOfLifts>=1){
    
        for(var i=noOfFloors;i>=0;i--){

            let floorNo=document.createElement('div');
            floorNo.setAttribute("class","floorNo")
            floorNo.setAttribute("id","floorNo"+i)
            let upBtn=document.createElement("button");
            upBtn.setAttribute("class","upBtn")
            upBtn.setAttribute("id","upBtn"+i)
            let downBtn=document.createElement("button");
            downBtn.setAttribute("class","downBtn");
            downBtn.setAttribute("id","downBtn"+i);

            floorNo.textContent="Floor "+i;
            floorNo.appendChild(upBtn);
            floorNo.appendChild(downBtn);
            floorDesign.appendChild(floorNo);
            buildLayout.appendChild(floorDesign);
            
            if(i>0 && i<noOfFloors){
            upBtn.textContent="Up";
            downBtn.textContent="Down";
            }else if (i==0){
                upBtn.textContent="Up";
                floorNo.removeChild(downBtn);
            }else if (i==noOfFloors){
                floorNo.removeChild(upBtn);
                downBtn.textContent="Down";
            }
        }    
        for(var i=1;i<=noOfLifts;i++){
            let liftDesign=document.createElement('div');
            liftDesign.setAttribute("class","liftDesign");
            floorDesign.appendChild(liftDesign);
            let liftArray = Array.from(liftDesign);
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
// let Butn;
// Butn.forEach((upBtn)=>{
//     upBtn.addEventListener("click",()=>{
//         let presentFloor=upBtn.getAttribute("id")
//         console.log("button is on floor "+floorNo)
//     })
    
// })

btnRestart.addEventListener("click",showInput)
function showInput(){
    inputPageDiv.style.display="inline";
    btnRestart.style.display="none";
    floorDesign.innerHTML="";
}
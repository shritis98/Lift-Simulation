const inputPage=document.querySelector("#input-page");
const btnSubmit=document.querySelector("#btn-submit");
const layout=document.querySelector("#layout");

//WHY DOES CHECKINPUT NOT WORK WHEN KEPT HERE?
// const noOfFloors= parseInt(document.querySelector("#no-of-floors").value);
// const noOfLifts=parseInt(document.querySelector("#no-of-lifts").value);


const checkInput = ()=>{
    const noOfFloors= document.querySelector("#no-of-floors").value;
    const noOfLifts=document.querySelector("#no-of-lifts").value;
    
    if(noOfFloors<=10 && noOfFloors>=1 && noOfLifts<=10 && noOfLifts>=1){
        inputPage.style.display = "none";
        reset()
        buildLayout(noOfFloors)//WHY THIS NEEDS TO BE MENTIONED IN BOTH THE PLACES?
        buildLift(noOfLifts)
    }else if(noOfFloors>10 && noOfLifts>10){
        alert("Maximum number of floors and lifts can be 10");
    }else if(noOfFloors<=0 || noOfLifts<=0){
        alert("Number of floors or lifts cannot be 0 or negative");
    }else if(noOfFloors>10){
        alert("Maximum number of floors can be 10");
    }else if(noOfLifts>10){
        alert("Maximum number of lifts can be 10");
    }
}

btnSubmit.addEventListener("click", checkInput);



const buildLayout = (noOfFloors)=>{

    console.log(noOfFloors);
    let floorLayout=document.createElement('div');
    floorLayout.setAttribute("class", "floorlay")
    layout.append(floorLayout);

    for(let i=noOfFloors;i>0;i--){
        console.log(i);

        let floorContainer=document.createElement('div');
            floorContainer.setAttribute("class","floor");
            floorContainer.setAttribute("id","floorCont"+i);

        let btnContainer = document.createElement('div');
            btnContainer.setAttribute("class", "btnCont");
            btnContainer.setAttribute("id", "btnCont"+i);
        
        let upBtn=document.createElement("button");
            upBtn.setAttribute("class","btn");
            upBtn.setAttribute("id","upBtn"+i)
            upBtn.innerText="Up";
        let downBtn=document.createElement("button");
            downBtn.setAttribute("class","btn");
            downBtn.setAttribute("id","downBtn"+i);
            downBtn.innerText="Down";
        let floorNumber=document.createElement("p")
            floorNumber.innerText="Floor"+i;
            
        btnContainer.append(upBtn, downBtn, floorNumber);
        floorContainer.append(btnContainer);
        floorLayout.append(floorContainer);
    }
    consolebtn();
}

const consolebtn = ()=>{
    let button = document.querySelectorAll(".btn");
    button.forEach((butn)=>{
        butn.addEventListener("click",()=>{
            const floorNo = butn.getAttribute("id");
            console.log(floorNo);
        })
    })
    }

const buildLift = (noOfLifts)=>{
    console.log(noOfLifts);
    let liftLayout=document.createElement('div')
    liftLayout.setAttribute("class", "liftLay")
    for(let i=0;i<noOfLifts;i++){
        console.log(i);
        let liftContainer=document.createElement('div');
            liftContainer.setAttribute("class", "lift");
            liftContainer.setAttribute("id", "idlift"+i);
            liftLayout.append(liftContainer);
    } 
    floorCont1.append(liftLayout);
    consolelift();
}

const consolelift = ()=>{
    const liftObj = document.querySelectorAll(".lift");
    let liftArray = Array.from(liftObj);
    console.log(liftArray);
}

const reset=()=>{
    let resetBtn = document.createElement("button");
    resetBtn.setAttribute("class", "resetbutton");
    resetBtn.innerText="Restart";
    layout.append(resetBtn);

    resetBtn.addEventListener("click", ()=>{
        console.log('reset');
        let hideFloor=document.querySelector(".floorlay");
        layout.removeChild(hideFloor);
        layout.removeChild(resetBtn);
        console.log(layout);
        document.querySelector("#no-of-floors").value = "";
        document.querySelector("#no-of-lifts").value = "";
        inputPage.style.display = "block";
    });
}
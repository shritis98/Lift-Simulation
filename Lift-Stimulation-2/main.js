const inputPage=document.querySelector("#input-page");
const btnSubmit=document.querySelector("#btn-submit");
const layout=document.querySelector("#layout");

const noOfFloors= parseInt(document.querySelector("#no-of-floors").value);
const noOfLifts=parseInt(document.querySelector("#no-of-lifts").value);


const checkInput = ()=>{
    const noOfFloors= document.querySelector("#no-of-floors").value;
    const noOfLifts=document.querySelector("#no-of-lifts").value;
    
    if(noOfFloors<=10 && noOfFloors>=1 && noOfLifts<=10 && noOfLifts>=1){
        inputPage.style.display = "none";
        reset()
        buildLayout(noOfFloors)
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

    // console.log(noOfFloors);
    let floorLayout=document.createElement('div');
    floorLayout.setAttribute("class", "floorlay");
    layout.append(floorLayout);

    for(let i=noOfFloors-1;i>=0;i--){
        // console.log(i);

        let floorContainer=document.createElement('div');
            floorContainer.setAttribute("class","floor");
            // floorContainer.setAttribute("id","floorCont"+i);

        let btnContainer = document.createElement('div');
            btnContainer.setAttribute("class", "btnCont");
            // btnContainer.setAttribute("id", "btnCont"+i);
        
        let upBtn=document.createElement("button");
            upBtn.setAttribute("class","btn");
            // upBtn.setAttribute("id","upBtn"+i);
            upBtn.setAttribute("data-buttonFloor",i);
            // upBtn.setAttribute("data-direction","Up");
            upBtn.innerText="Up";
        let downBtn=document.createElement("button");
            downBtn.setAttribute("class","btn");
            // downBtn.setAttribute("id","downBtn"+i);
            downBtn.setAttribute("data-buttonFloor",i);
            // downBtn.setAttribute("data-direction","Down");
            downBtn.innerText="Down";
            
        let floorNumber=document.createElement("p");
            floorNumber.innerText="Floor "+i;
        if(i==noOfFloors-1){
            btnContainer.append(downBtn, floorNumber);
        }else if(i==0){
            btnContainer.append(upBtn, floorNumber);
        }else{
            btnContainer.append(upBtn, downBtn, floorNumber);
        }
        floorContainer.append(btnContainer);
        floorLayout.append(floorContainer);
    }
    buttonsClicked();
    // moveLift();
}

const buildLift = (noOfLifts)=>{
    // console.log(noOfLifts);
    let liftLayout=document.createElement('div')
    liftLayout.setAttribute("class", "liftLay")
    for(let i=0;i<noOfLifts;i++){
        // console.log(i);
        let liftContainer=document.createElement('div');
            liftContainer.setAttribute("class", "lift");
            // liftContainer.setAttribute("id", "idlift"+i);
            // liftContainer.setAttribute("data-liftNumber", i);
            liftContainer.setAttribute("data-liftFloor", 0);
            liftContainer.setAttribute("data-liftAvailable", "available");
        let leftGate = document.createElement("div");
            leftGate.setAttribute("class", "lGate");
        let rightGate = document.createElement("div");
            rightGate.setAttribute("class", "rGate");

            liftContainer.append(leftGate, rightGate);
            liftLayout.append(liftContainer);
    } 
    floorCont0.append(liftLayout);
    
    // checkAvailableLift(liftArray);
    // consolelift();
    // moveLift();
}

const buttonsClicked = ()=>{
    let button = document.querySelectorAll(".btn");
    let buttonsClicked = [0];
    button.forEach((butn)=>{
        butn.addEventListener("click",()=>{
            const floorNo = butn.getAttribute("data-buttonFloor");
            console.log(floorNo);
            let totalBtnsClkd = buttonsClicked.push(floorNo);
            console.log("Recent button is: "+totalBtnsClkd);
            console.log("All the buttons clicked are "+buttonsClicked);
            AvailableLift(buttonsClicked, floorNo);
        })
        
    })
    
}

const AvailableLift = (buttonsClicked, floorNo)=>{
    const liftObj = document.querySelectorAll(".lift");
    let liftArray = Array.from(liftObj);
    // console.log(liftArray);
    let AvlblLiftNo=liftArray.length;
    for(let i=0; i<AvlblLiftNo;i++){

        if(liftArray[i].getAttribute("data-liftAvailable") == "available"){
            AvlblLiftNo = i;
            // console.log(AvlblLiftNo);
        }
        // console.log(liftArray[i])
    }
    // console.log(AvlblLiftNo);
    let distance = (-6.3)*(Number(floorNo))
    let diffInFloors = Math.abs(2*(buttonsClicked[0]-buttonsClicked[1]));
    let currentFloor = Number(floorNo);
    moveLift(liftArray, AvlblLiftNo, distance, diffInFloors, currentFloor)
}

const moveLift = (liftArray, AvlblLiftNo, distance, diffInFloors, currentFloor)=>{
    // console.log(liftArray);
    // console.log(AvlblLiftNo);
    // console.log(distance);
    // console.log(diffInFloors);
    // console.log(currentFloor);

    liftArray[AvlblLiftNo].setAttribute("data-liftAvailable", "busy");
    
    liftArray[AvlblLiftNo].style.transform = `translateY(${distance}rem)`;
    liftArray[AvlblLiftNo].style.transition = `transform ${diffInFloors}s`;

    liftArray[AvlblLiftNo].setAttribute("data-liftFloor", currentFloor);
    // liftArray[AvlblLiftNo].setAttribute("data-liftAvailable", "available");
    
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





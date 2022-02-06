//Define variables
let messageCount;
let theToggle = false;
messageCount = 0;


//Get elements from html document
let toggleMsg = document.querySelector("#toggle-messages")
let inputEl = document.querySelector("#entered-msg")
let messageEl = document.querySelector("#display-messages")

let countEl = document.querySelector("#count-el")
let hideOrDisplay = document.querySelector("#hide-or-display")


//Manipulate dom

function updateHtmlWithcount(){
    countEl.textContent = messageCount;
}

function submitMsg(){      
    let theMsg 
    if(inputEl.value){
        theMsg = inputEl.value;
        let p = document.createElement("p");
        p.textContent = theMsg;
        p.className = "bg-white p-2";
        p.style.cursor = "pointer";
        messageEl.append(p);
        messageCount++;
        countEl.textContent = messageCount;
        //console.log(messageCount);
        inputEl.value = "";
    } else {
        alert("Have you entered an input?")
    }
}

//Toggle message list
toggleMsg.addEventListener("click", function (e){
    //set theToggle to !theToggle
    //  while theToggle is true, displayMessage
    theToggle = (!theToggle);
    //console.log(theToggle);
    if(theToggle){
        hideOrDisplay.className = "d-block"
    } else {
        hideOrDisplay.className = "visually-hidden"    }
})

// Delete messages
messageEl.addEventListener("click", function(e){
    //console.log(e.target.tagName)
    if(e.target.tagName === "P"){
        e.target.remove()
        messageCount--
        updateHtmlWithcount()
    }

})

let homeScoreEl=document.getElementById("home-score-el")
let guestScoreEl=document.getElementById("guest-score-el")
let homeScoreNum=0
let guestScoreNum=0

function addOneHome(){
    homeScoreNum += 1
    homeScoreEl.textContent=homeScoreNum
}

function addTwoHome(){
    homeScoreNum += 2
    homeScoreEl.textContent=homeScoreNum
}

function addThreeHome(){
    homeScoreNum += 3
    homeScoreEl.textContent=homeScoreNum
}

function addOneGuest(){
    guestScoreNum += 1
    guestScoreEl.textContent=guestScoreNum
}

function addTwoGuest(){
    guestScoreNum += 2
    guestScoreEl.textContent=guestScoreNum
}

function addThreeGuest(){
    guestScoreNum += 1
    guestScoreEl.textContent=guestScoreNum
}

function resetGame(){
    homeScoreEl.textContent=0
    guestScoreEl.textContent=0
}
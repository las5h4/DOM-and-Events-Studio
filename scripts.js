// Write your JavaScript code here.
// Remember to pay attention to page loading!
function changeHeight(direction, height) {
    if (direction === "up") {
        height += 10000
    } else if (direction === "down") {
        height -= 10000
    }
    let imgHeight = height / 1000
    let heightObj = {
        height: height,
        imgHeight: imgHeight
    }
    return heightObj
}

window.addEventListener("load", function(){
    let takeoff = document.getElementById("takeoff")
    let flightStatus = document.getElementById("flightStatus")
    let rocket = document.querySelector("img") 
    let shuttleBackground = document.getElementById("shuttleBackground")
    let shuttleBackgroundWidth = shuttleBackground.clientWidth
    let startingPos = (shuttleBackgroundWidth / 2) - 37
    let horizontalPos = startingPos
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    shuttleHeightNum = Number(shuttleHeight.innerHTML)
    let land = document.getElementById("landing")
    let missionAbort = document.getElementById("missionAbort")
    let up = document.getElementById("up")
    let down = document.getElementById("down")
    let right = document.getElementById("right")
    let left = document.getElementById("left")
    rocket.style.left = String(horizontalPos)+"px"
       
    takeoff.addEventListener("click", function (){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (confirmation === true) {
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            let newHeightObj = changeHeight("up", shuttleHeightNum)            
            shuttleHeightNum = newHeightObj.height
            shuttleHeight.innerHTML = shuttleHeightNum
            rocket.style.bottom = String(newHeightObj.imgHeight)+"px"
        }
    })
    let landShuttle = function (){
        window.alert("Shuttle is landing. Langing gear engaged.")
        flightStatus.innerHTML = "Shuttle has landed"
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeightNum = 0
        shuttleHeight.innerHTML = 0
        rocket.style.bottom = "0px"
    }
    land.addEventListener("click", landShuttle)
    //     window.alert("Shuttle is landing. Langing gear engaged.")
    //     flightStatus.innerHTML = "Shuttle has landed"
    //     shuttleBackground.style.backgroundColor = "green"
    //     shuttleHeightNum = 0
    //     shuttleHeight.innerHTML = 0
    //     rocket.style.bottom = "0px"
    // })
    missionAbort.addEventListener("click", function(){
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.")
        if (abortConfirm === true) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor = "green"
            shuttleHeightNum = 0
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = "0px"
            rocket.style.left = String(startingPos)+"px"
        }
    })
    
    up.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight") {
            if ((shuttleHeightNum / 1000) < (shuttleBackground.clientHeight - 75)) {
                let newHeightObj = changeHeight("up", shuttleHeightNum)            
                shuttleHeightNum = newHeightObj.height
                shuttleHeight.innerHTML = shuttleHeightNum
                rocket.style.bottom = String(newHeightObj.imgHeight)+"px"
            } else if ((shuttleHeightNum / 1000) >= (shuttleBackground.clientHeight - 75)) {
                window.alert("Shuttle cannot leave the box!")
            }
        } else {
            window.alert("The shuttle must take off before it can move!")
        }
    })
    down.addEventListener("click", function(){
         if (flightStatus.innerHTML === "Shuttle in flight") {  
            if ((shuttleHeightNum / 1000) > 10) {
                let newHeightObj = changeHeight("down", shuttleHeightNum)            
                shuttleHeightNum = newHeightObj.height
                shuttleHeight.innerHTML = shuttleHeightNum
                rocket.style.bottom = String(newHeightObj.imgHeight)+"px"
            } else if ((shuttleHeightNum / 1000) <= 10) {
                let landConfirm = window.confirm("You are preparing to land the shuttle. Proceed?")
                if (landConfirm === true) {
                    landShuttle()
                }
            }
        } else {
            window.alert("The shuttle must take off before it can move!")
        }
    })
    left.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight") {   
            if (horizontalPos > 0) {
                horizontalPos -= 10
                rocket.style.left = String(horizontalPos)+"px"
            } else if (horizontalPos <= 0) {
                window.alert("Shuttle cannot leave the box!")
            }
        } else {
            window.alert("The shuttle must take off before it can move!")
        }
    })
    right.addEventListener("click", function(){
        if (flightStatus.innerHTML === "Shuttle in flight") {   
            if (horizontalPos < (shuttleBackgroundWidth - 75)){
                horizontalPos += 10
                rocket.style.left = String(horizontalPos)+"px"
            } else if (horizontalPos >= (shuttleBackgroundWidth - 75)) {
                window.alert("Shuttle cannot leave the box!")
            }
        } else {
            window.alert("The shuttle must take off before it can move!")
        }
    })
})
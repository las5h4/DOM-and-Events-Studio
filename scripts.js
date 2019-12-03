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
    let shuttleBackground = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    shuttleHeightNum = Number(shuttleHeight.innerHTML)
    let land = document.getElementById("landing")
    let missionAbort = document.getElementById("missionAbort")
    let up = document.getElementById("up")
    let down = document.getElementById("down")
    let right = document.getElementById("right")
    let left = document.getElementById("left")
    let rocket = document.querySelector("img")    
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
    land.addEventListener("click", function (){
        window.alert("Shuttle is landing. Langing gear engaged.")
        flightStatus.innerHTML = "Shuttle has landed"
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeightNum = 0
        shuttleHeight.innerHTML = 0
        rocket.style.bottom = "0px"
    })
    missionAbort.addEventListener("click", function(){
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.")
        if (abortConfirm === true) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor = "green"
            shuttleHeightNum = 0
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = "0px"
            rocket.style.left = "50%"
        }
    })
    
    up.addEventListener("click", function(){
        let newHeightObj = changeHeight("up", shuttleHeightNum)            
        shuttleHeightNum = newHeightObj.height
        shuttleHeight.innerHTML = shuttleHeightNum
        rocket.style.bottom = String(newHeightObj.imgHeight)+"px"
    })
    down.addEventListener("click", function(){
        let newHeightObj = changeHeight("down", shuttleHeightNum)            
        shuttleHeightNum = newHeightObj.height
        shuttleHeight.innerHTML = shuttleHeightNum
        rocket.style.bottom = String(newHeightObj.imgHeight)+"px"
    })
})
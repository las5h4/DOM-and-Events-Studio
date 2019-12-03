// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeoff = document.getElementById("takeoff")
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    let land = document.getElementById("landing")
    let missionAbort = document.getElementById("missionAbort")
    takeoff.addEventListener("click", function (){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (confirmation === true) {
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
            shuttleHeight.innerHTML = 10000
        }
    })
    land.addEventListener("click", function (){
        window.alert("Shuttle is landing. Langing gear engaged.")
        flightStatus.innerHTML = "Shuttle has landed"
        shuttleBackground.style.backgroundColor = "green"
        shuttleHeight.innerHTML = 0
    })
    missionAbort.addEventListener("click", function(){
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.")
        if (abortConfirm === true) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor = "green"
            shuttleHeight.innerHTML = 0
        }
    })
})
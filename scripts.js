// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeoff = document.getElementById("takeoff")
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    takeoff.addEventListener("click", function (){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (confirmation === true) {
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue"
        }
    })
})
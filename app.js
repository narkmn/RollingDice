var day = document.getElementById("day")

const interval = setInterval(function() {
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + ("00" + (currentdate.getMonth()+1)).slice (-2) + "/" 
                + currentdate.getFullYear() + " at "  
                + ("00" + currentdate.getHours()).slice (-2) + ":"  
                + ("00" + currentdate.getMinutes()).slice (-2)
    day.innerHTML = datetime
    
    }, 1000);

function rollingDice(){
    var numP1 = Math.floor(Math.random() * 6) + 1;
    var numP2 = Math.floor(Math.random() * 6) + 1;
    var total = numP1 + numP2

    const totalNumber = document.getElementById("total");
    totalNumber.innerHTML = total;

    const dices = document.getElementsByTagName("img");

    dices[0].src = 'dice-' + numP1 + '.svg'
    dices[1].src = 'dice-' + numP2 + '.svg'

    if (total>=8){
        var Msg = "You Win: Try Again!"
    } else {
        var Msg = "You didn't win: Try Again!"
    }

    const result = document.getElementById("result")
    result.innerHTML = Msg
}
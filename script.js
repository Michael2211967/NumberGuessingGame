let secret_Number = Math.round(Math.random()*100);
let count = 0;

function check_Secret(){
    count ++;
    displaycount.innerHTML = "Versuche: " + count;
    if(secret_Number == guess.value) {
        checkSecret.innerHTML = "Yeahh, das ist korrekt!!!";
        console.log(count + ". " + guess.value);
        
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        
    }
    else if(secret_Number > guess.value) {
        checkSecret.innerHTML = "Die gesuchte Zahl ist größer als " + guess.value;
        console.log(count + ". " + guess.value);
    }
    else {
        checkSecret.innerHTML = "Die gesuchte Zahl ist kleiner als " + guess.value;
        console.log(count + ". " + guess.value);
    }
}
function userInterface(){
    let name = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;

    age = parseFloat(ageInput)

    debugger
    
    if(name == "" || isNaN (age)){
        document.getElementById("result").innerText = "Please enter a valid name or a valid age"
    } else if ( age < 18){
        document.getElementById("result").innerText = `Hi ${name}, you are underage! Keep learning and enjoying coding!`
    } else {
        document.getElementById("result").innerText = `Hello ${name}, you are of legal age! Get ready to learn everything the world of coding has to teach you!`;
    }
};
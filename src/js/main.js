
//function onclick to button
function userInterface() {

    // Variables to inputs
    let name = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;


    console.log(typeof(name));
    
    age = parseFloat(ageInput)


    // Procces to validation
    if (isNaN(age)) {
        document.getElementById("result").innerText = "Please enter a valid age"
    } else if (name == "") {
        document.getElementById("result").innerText = "Please enter a valid name"

    } else if (age < 18) {
        document.getElementById("result").innerText = `Hi ${name}, you are underage! Keep learning and enjoying coding!`
    } else {
        document.getElementById("result").innerText = `Hello ${name}, you are of legal age! Get ready to learn everything about the world of coding has to teach you!`;
    }
};
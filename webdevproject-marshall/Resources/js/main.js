function validate(){
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(String("#uemail").toLowerCase())){
        alert("You have entered an invalid email address. Please try again.");
        return false;
    }

    var num = document.getElementById("zipcode").value;
    if (num.length != 0 && num.length != 5) {
        alert("Invalid zipcode. Please try again.")
        return false;
    }
}

window.onload = function(){
    document.getElementById("bodyContent").style.opacity = 1;
}
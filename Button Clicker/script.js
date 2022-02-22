
function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else element.innerText = "Login";
}


function hide(element) {
    element.remove();
}

var count = 1;

function counter(element) {
    element.innerText = count + " likes"
    count += 1;
}

var count2 = 1;

function counter2(element) {
    element.innerText = count2 + " likes"
    count2 += 1;
}
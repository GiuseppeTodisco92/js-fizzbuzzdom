const list = document.querySelector(".list");

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");

    element.classList.add("box_number");
    if (i % 3 == 0){
        element.innerText = "Fizz";
    } else if (i % 5 == 0) {
        element.innerText = "Buzz";
    } else {
        element.innerText = i;
    }
   
    list.append(element);
}
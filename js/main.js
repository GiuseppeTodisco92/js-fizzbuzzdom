const list = document.querySelector(".list");

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");

    element.classList.add("box_number");
    if (i % 3 == 0 && i % 5 == 0){
        element.innerText = "FizzBuzz";
        element.classList.add("fizz_buzz");
    } 
   else if (i % 3 == 0){
        element.innerText = "Fizz";
        element.classList.add("fizz");
    } else if (i % 5 == 0) {
        element.innerText = "Buzz";
        element.classList.add("buzz");
    } else {
        element.innerText = i;
    }
   
    list.append(element);
}
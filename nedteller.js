//const button = document.querySelector("#btn");
//button.addEventListener("click", function(event) {
//  console.log("event", event.target.textContent);
//});
let count = 0;
let count_string = "";

const container = document.querySelector(".buttons");
container.addEventListener("click", function(event) {
  const number = event.target.textContent;
  console.log(number);
  count = number;
  update_counter();
});

const button = document.querySelector(".startbutton");
button.addEventListener("click", function(event) {
  start_countdown();
});

const start_countdown = () => {
  update_counter();
  if (count > 0) {
    count--;
    setTimeout(start_countdown, 1000);
  }
};

const output_object = document.querySelector("output");
const update_counter = () => {
  output_object.innerText = count;
};

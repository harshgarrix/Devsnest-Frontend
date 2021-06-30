const option = document.querySelectorAll(".opBtn");
const option1 = document.querySelector(".option1-btn");
const option2 = document.querySelector(".option2-btn");
const option3 = document.querySelector(".option3-btn");
const option4 = document.querySelector(".option4-btn");
const optionN = document.querySelectorAll(".optionN");
const opName1 = document.querySelector(".optionN1");
const opName2 = document.querySelector(".optionN2");
const opName3 = document.querySelector(".optionN3");
const opName4 = document.querySelector(".optionN4");
const next = document.querySelector(".next");
const mainQ = document.querySelector(".mainQ");
const pageN = document.querySelector(".pageN");
const popUp = document.querySelector(".pop-up");
const main = document.querySelector(".main");
const play = document.querySelector(".play");

let lastScore = document.querySelector(".score");

const allMainQ = [
  "Who invented the Ball Point Pen?",
  "World Wildlife Day is celebrated at:",
  "Who is the author of the book 'Nineteen Eighty Four'?",
  "Which among the following personalities got the India’s highest civilian awards?",
];

const ques1 = [
  "Waterman Brothers",
  "Write Brothers",
  "Biro Brothers",
  "Bicc Brothers",
];
const ques2 = ["25th January", "2nd February", "27th February", "3rd March"];
const ques3 = ["Thomas Hardy", "Emile Zola", "George Orwell", "Walter Scott"];
const ques4 = [
  "Madan Mohan Malaviya",
  " Manmohan Singh",
  " Deendayal Upadhyaya",
  "L. K Advani",
];

pageN.innerText = "1";

let end = 1;

next.addEventListener(`click`, () => {
  if (pageN.innerText == "5") {
    pageN.innerText == 5;
    end++;
  } else {
    pageN.innerText++;
    end++;
  }

  if (end == 6) {
    popUp.classList.add("end");
    main.style.pointerEvents = "none";
    main.style.filter = "blur(1px)";
    window.addEventListener(`load`, () => {
      popUp.classList.add("end");
    });
  }

  var num2 = true;
  option.forEach((i) => {
    num2 = false;
    i.classList.remove("green");
    i.classList.remove("red");
    i.classList.remove("no-click");
    if (num2 == false && pageN.innerText > 1) {
      option1.classList.remove("correct");
    }
    if (pageN.innerText === "2") {
      option2.classList.remove("correct");
      option3.classList.add("correct");
      mainQ.innerText = allMainQ[0];
      let i = 0;
      while (i < ques1.length) {
        optionN.forEach((opt) => {
          opt.innerText = ques1[i];
          i++;
        });
      }
    }
    if (pageN.innerText === "3") {
      option3.classList.remove("correct");
      option4.classList.add("correct");
      mainQ.innerText = allMainQ[1];
      let i = 0;
      while (i < ques1.length) {
        optionN.forEach((opt) => {
          opt.innerText = ques2[i];
          i++;
        });
      }
    }
    if (pageN.innerText === "4") {
      option4.classList.remove("correct");
      option2.classList.remove("correct");
      option3.classList.add("correct");
      mainQ.innerText = allMainQ[2];
      let i = 0;
      while (i < ques1.length) {
        optionN.forEach((opt) => {
          opt.innerText = ques3[i];
          i++;
        });
      }
    }
    if (pageN.innerText === "5") {
      option4.classList.remove("correct");
      option3.classList.remove("correct");
      option1.classList.add("correct");
      mainQ.innerText = allMainQ[3];
      let i = 0;
      while (i < ques1.length) {
        optionN.forEach((opt) => {
          opt.innerText = ques4[i];
          i++;
        });
      }
    }
  });
});

let score = 0;
let num = 0;
option.forEach((i) => {
  i.addEventListener(`click`, () => {
    if (i.classList.contains("correct")) {
      i.classList.add("green");
      score++;
      num++;

      if (i.classList.contains("green")) {
        option1.classList.add("no-click");
        option2.classList.add("no-click");
        option3.classList.add("no-click");
        option4.classList.add("no-click");
      }
    } else {
      i.classList.add("red");
      num++;

      if (num == 1) {
        option1.classList.add("green");
      }
      if (num == 2) {
        option3.classList.add("green");
      }
      if (num == 3) {
        option4.classList.add("green");
      }
      if (num == 4) {
        option3.classList.add("green");
      }
      if (num == 5) {
        option1.classList.add("green");
      }

      if (i.classList.contains("red")) {
        option1.classList.add("no-click");
        option2.classList.add("no-click");
        option3.classList.add("no-click");
        option4.classList.add("no-click");
      }
    }
    lastScore.innerText = score;
  });
});

function reload() {
  reload = location.reload();
}

play.addEventListener(`click`, reload, false);
let emojies1 = ["🤖","😱","💩","👺","😆","👹"];
var emojies = [...emojies1, ...emojies1];

// Copied this Shuffle Function from stackoverflow
function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
shuffle(emojies);
// console.log(emojies);
var main = document.querySelector("main")
for(let i = 0; i < 12; i++){
    var div = document.createElement("div")
    div.classList.add("box")
    div.id = emojies[i]
    
    var front = document.createElement("div")
    front.classList.add("front")

    front.innerHTML = "Click"
    
    var back = document.createElement("div")
    back.classList.add("back")
    back.innerHTML = emojies[i]
    
    div.appendChild(front)
    div.appendChild(back)

    main.appendChild(div)
}

var totalBoxes = 6;
var res = document.querySelector("#res")
res.innerHTML = totalBoxes;
console.log(totalBoxes)
var boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
    box.addEventListener("click", el => {
        if(!box.classList.contains("clicked")){
            box.classList.toggle("clicked"); //Stops from Clicking a SIngle Card back to back
        }
        checkBoxes();
    })
})

function checkBoxes(){
    var clicked = document.querySelectorAll('.clicked');
    if(clicked.length == 2){
        var boxes = clicked;
        if(boxes[0].id == boxes[1].id){
            setTimeout(function(){
                boxes[0].style.visibility = "hidden";
                boxes[1].style.visibility = "hidden";
                totalBoxes--;
                // console.log(totalBoxes)
                this.res.innerHTML = totalBoxes;
                if(totalBoxes == 0){
                    confirm("Thank You for Playing!");
                    location.reload()
                }
            }, 300)
        }
        boxes.forEach(box => {
            setTimeout(function(){
                box.classList.remove("clicked")
            }, 500)
        })
    }
}
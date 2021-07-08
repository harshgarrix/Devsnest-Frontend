var occ_cells = 0;
var rem_cells = 36;
document.getElementById('num1').innerHTML = occ_cells;
document.getElementById('num2').innerHTML = rem_cells;
const box = Array.from(document.getElementsByClassName("flex-item"));
console.log(box);
for (let i = 0; i < box.length; i++) {
	console.log(box[i]);
	box[i].addEventListener('click',() =>{
		if(box[i].classList.contains('clicked')){
			box[i].classList.remove('clicked');
			occ_cells -=1;
			rem_cells +=1;
			document.getElementById("num1").innerHTML = occ_cells;
			document.getElementById("num2").innerHTML = rem_cells;
		}
		else{
			box[i].classList.add('clicked');
			occ_cells +=1;
			rem_cells -=1;
			document.getElementById("num1").innerHTML = occ_cells;
			document.getElementById("num2").innerHTML = rem_cells;
		}
});
}
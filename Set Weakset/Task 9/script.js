let per1 = document.getElementById('res1');
let per2 = new Set();
function AddToList(){
per2.add(per1.value);
document.getElementById('res2').innerHTML = [...per2];
}
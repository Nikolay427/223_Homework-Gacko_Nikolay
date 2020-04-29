let per = new Set;
let per1 = document.querySelectorAll('div p');

for (let p of per1) p.addEventListener('click',
 function(){ per.add(this); 
});

function button() {
 for (let elem of per) elem.innerHTML += "!"; per.clear(); 
}

let allbt = document.querySelector("#Allb");
let textilesbt = document.querySelector("#Textilesb");
let potterybt = document.querySelector("#potteryb");

let paintingsbt = document.querySelector("#paintingsb");

let bagsbt = document.querySelector("#bagsb");

let jewelrybt = document.querySelector("#jewelryb");


allbt.addEventListener("click", all);
textilesbt.addEventListener("click", textilesf);
potterybt.addEventListener("click" , potteryf);
paintingsbt.addEventListener("click" , paintingf);
bagsbt.addEventListener("click" , bagsf)
jewelrybt.addEventListener("click" , jewelryf);

let textilesC = document.querySelectorAll(".textilesc");
let potteryC = document.querySelectorAll(".pottery");
let paintingC = document.querySelectorAll(".painting");
let bagsC = document.querySelectorAll(".bags");
let jewelryC = document.querySelectorAll(".jewelry");


function all(){
    console.log("clicked")
  allbt.classList.add('current');
  textilesbt.classList.remove('current');
  potterybt.classList.remove('current');
  paintingsbt.classList.remove('current');
  bagsbt.classList.remove('current');
  jewelrybt.classList.remove('current');

for (let i = 0; i < textilesC.length; i++) {
    textilesC[i].style.display = "block";
  }

  for (let i = 0; i < potteryC.length; i++) {
    potteryC[i].style.display = "block";
  } 

  for (let i = 0; i < paintingC.length; i++) {
    paintingC[i].style.display = "block";
  }  

  for (let i = 0; i < bagsC.length; i++) {
        bagsC[i].style.display = "block";
  } 

  for (let i = 0; i < jewelryC.length; i++) {
    jewelryC[i].style.display = "block";
  } 


// potteryC.classList.add('hide');
// paintingC.classList.add('visible');
// bagsC.classList.add('visible');
// jewelryC.classList.add('visible');
}


function textilesf(){

    allbt.classList.remove('current');
    textilesbt.classList.add('current');
    potterybt.classList.remove('current');
    paintingsbt.classList.remove('current');
    bagsbt.classList.remove('current');
    jewelrybt.classList.remove('current');
  
  for (let i = 0; i < textilesC.length; i++) {
      textilesC[i].style.display = "block";
    }
  
    for (let i = 0; i < potteryC.length; i++) {
      potteryC[i].style.display = "none";
    } 
  
    for (let i = 0; i < paintingC.length; i++) {
      paintingC[i].style.display = "none";
    }  
  
    for (let i = 0; i < bagsC.length; i++) {
          bagsC[i].style.display = "none";
    } 
  
    for (let i = 0; i < jewelryC.length; i++) {
      jewelryC[i].style.display = "none";
    } 


}


function potteryf(){

    allbt.classList.remove('current');
    textilesbt.classList.remove('current');
    potterybt.classList.add('current');
    paintingsbt.classList.remove('current');
    bagsbt.classList.remove('current');
    jewelrybt.classList.remove('current');
  
  for (let i = 0; i < textilesC.length; i++) {
      textilesC[i].style.display = "none";
    }
  
    for (let i = 0; i < potteryC.length; i++) {
      potteryC[i].style.display = "block";
    } 
  
    for (let i = 0; i < paintingC.length; i++) {
      paintingC[i].style.display = "none";
    }  
  
    for (let i = 0; i < bagsC.length; i++) {
          bagsC[i].style.display = "none";
    } 
  
    for (let i = 0; i < jewelryC.length; i++) {
      jewelryC[i].style.display = "none";
    } 


}

function paintingf(){
    allbt.classList.remove('current');
    textilesbt.classList.remove('current');
    potterybt.classList.remove('current');
    paintingsbt.classList.add('current');
    bagsbt.classList.remove('current');
    jewelrybt.classList.remove('current');
  
  for (let i = 0; i < textilesC.length; i++) {
      textilesC[i].style.display = "none";
    }
  
    for (let i = 0; i < potteryC.length; i++) {
      potteryC[i].style.display = "none";
    } 
  
    for (let i = 0; i < paintingC.length; i++) {
      paintingC[i].style.display = "block";
    }  
  
    for (let i = 0; i < bagsC.length; i++) {
          bagsC[i].style.display = "none";
    } 
  
    for (let i = 0; i < jewelryC.length; i++) {
      jewelryC[i].style.display = "none";
    } 

}


function bagsf(){
    allbt.classList.remove('current');
    textilesbt.classList.remove('current');
    potterybt.classList.remove('current');
    paintingsbt.classList.remove('current');
    bagsbt.classList.add('current');
    jewelrybt.classList.remove('current');
  
  for (let i = 0; i < textilesC.length; i++) {
      textilesC[i].style.display = "none";
    }
  
    for (let i = 0; i < potteryC.length; i++) {
      potteryC[i].style.display = "none";
    } 
  
    for (let i = 0; i < paintingC.length; i++) {
      paintingC[i].style.display = "none";
    }  
  
    for (let i = 0; i < bagsC.length; i++) {
          bagsC[i].style.display = "block";
    } 
  
    for (let i = 0; i < jewelryC.length; i++) {
      jewelryC[i].style.display = "none";
    } 

}

function jewelryf(){
    allbt.classList.remove('current');
    textilesbt.classList.remove('current');
    potterybt.classList.remove('current');
    paintingsbt.classList.remove('current');
    bagsbt.classList.remove('current');
    jewelrybt.classList.add('current');
  
  for (let i = 0; i < textilesC.length; i++) {
      textilesC[i].style.display = "none";
    }
  
    for (let i = 0; i < potteryC.length; i++) {
      potteryC[i].style.display = "none";
    } 
  
    for (let i = 0; i < paintingC.length; i++) {
      paintingC[i].style.display = "none";
    }  
  
    for (let i = 0; i < bagsC.length; i++) {
          bagsC[i].style.display = "none";
    } 
  
    for (let i = 0; i < jewelryC.length; i++) {
      jewelryC[i].style.display = "block";
    } 

}
// uing gemini ai to create photos
 all()
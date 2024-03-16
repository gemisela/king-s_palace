let img_slide= document.getElementsByClassName('img_slide');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let evenement = 0;
let p = 0;
let q = 0;
let nbr_img = img_slide.length; 

function remover() {
    for (let i = 0; i < nbr_img; i++) {
        img_slide[i].classList.remove('act') 
    }
}
function shadow() {
    for (let i = 0; i < nbr_img; i++) {
        img_slide[i].classList.remove('shadow') 
    }
}
function shadow1() {
    for (let i = 0; i < nbr_img; i++) {
        img_slide[i].classList.remove('shadow1') 
    }
}

/*bouton suivant */
next.addEventListener('click', ()=>{
   
    p++
    shadow();
    
    if (p > nbr_img) {
        p=1;
    }
    img_slide[p-1].classList.add('shadow')

    evenement++; 
    remover();
    if (evenement >= nbr_img) {
        evenement=0;
    } 
   
    img_slide[evenement].classList.add('act')
  

    q++
    shadow1();
    if (q > nbr_img-2) {
        q=-1;
    }
    img_slide[q+1].classList.add('shadow1')
    clearInterval()
});






/*bouton precedant */
prev.addEventListener('click', ()=>{
    
    p--
     shadow();
     if (p <= 1 ) {
         p=nbr_img;
     }        
     console.log(nbr_img);
      console.log(p);
      img_slide[p-2].classList.add('shadow')
     

     evenement--;
    remover();
    if (evenement < 0) {
        evenement= nbr_img -1;
    }
    img_slide[evenement].classList.add('act')

    q--
    shadow1();
    if (q < -1) {
        q = nbr_img-2;
    }
    img_slide[q+1].classList.add('shadow1')
});

 setInterval(() => {
    p++
    shadow();
    if (p > nbr_img) {
        p=1;
    }
    img_slide[p-1].classList.add('shadow')

    evenement++; 
    remover();
    if (evenement >= nbr_img) {
        evenement=0;
    } 
   
    img_slide[evenement].classList.add('act')
  

    q++
    shadow1();
    if (q > nbr_img-2) {
        q=-1;
    }
    img_slide[q+1].classList.add('shadow1') }, 3000);

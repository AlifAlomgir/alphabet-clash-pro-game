function play(){
   hideElement("home");
   showElement('play-ground');
   const alphabet = generateRandomAlphabet();
   document.getElementById('letter').innerText =alphabet ;
   setBackgroundColorById(alphabet);

}


function generateRandomAlphabet(){
     const alphaString = 'abcdefghijklmnopqrstuvwxyz' ;
     const alphabetAry = alphaString.split('') ;
    const index = Math.round(Math.random()*25);
    const alphabet = alphabetAry[index];
    return alphabet;
    

}


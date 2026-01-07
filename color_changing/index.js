

let generatecode=function(){
  const hex="123456789ABCDEF";
let take='#'; // for the hexa and
  for(let i=0;i<6;i++){
   take+=hex[Math.floor(Math.random()*16)]  // for the rendering the 0-F words in the 
   //  hex   
}
return  take; // return the hex value 
}
 let changecolor;
let setchangecolor=function(){
   setchnage=function(){
    document.body.style.backgroundColor=generatecode(); // it is taking the 
    // backround position
  }
  changecolor=setInterval(setchnage,1000);

};
let stoptoclolor=function(){
   clearInterval(changecolor);
};

document.querySelector('#start').addEventListener('click',setchangecolor);
document.querySelector('#stop').addEventListener('click',stoptoclolor);

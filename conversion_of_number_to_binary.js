function bit(a){
  let n=a.length
  let res=[]
    for(let i=0;i<n;i++){
         let num=a[i];
         let binary=num.toString(2).padStart(8,'0');
         console.log(binary);
         num=num<<2

         // toString take the base mean if in the binary take the 2 and if decimal take the 10 and so on 
         let binary2=num.toString(2).padStart(8,'0');
          console.log(binary2);
          res.push(num);

    }
    return res 
}
  let a=[9, 14, 21, 28]
  console.log(bit(a));


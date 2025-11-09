function encryption(a){
     let n=a.length
     let mask=0b1010
     let res=[]
     for(let i=0;i<n;i++){
        let num=a[i];
        num=num^mask
        num=num|mask
        res.push(num);
     }
     return res
     }
     function transformed(a,m){
      let len=a.length;

       for(let i=0;i<len;i++){
         let num=a[i];
         num=(num<<2)
         num=num&m
         a[i]=num
       }
       return a;
     }

  let shift=[8, 15, 23];
  let mask=0b1111;
  console.log(transformed(shift,mask));

  // first to check to the case
     let a=[12, 25, 7]
    
     console.log(encryption(a));
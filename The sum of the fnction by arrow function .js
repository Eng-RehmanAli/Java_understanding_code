 let a=[1,34,45,56,67,87,7,89,8]
 let arrow=(a)=>{
    let n=a.length;
     let sum=(n)=>{
         let sum1=0;
         for(let i=0;i<n;i++){
             sum1+=a[i];
         }
         return sum1
     }
     
     return sum(n);
 }
 console.log(arrow(a));
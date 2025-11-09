function bit_manipulation(a){
  let n=a.length
  let res=[];
  for(let i=0;i<n;i++){
      let  num=a[i];
       num=(num<<1); // SAL
       num=(num>>a);// SAR 
       num =(num>>>1);
       num=num^(0b1010);
       num=(num|0b1010);
       num=(num&0b1111)
      res.push(num);

  }
  return res
}
let a=[1,3,4,45,5,6,7,78];
console.log(bit_manipulation(a));
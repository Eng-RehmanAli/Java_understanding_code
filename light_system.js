function  toggle(arr){
    let mask=1;
    let result=[];
  let n=arr.length
  for(let i=0;i<n;i++){
    let num=arr[i];
    num=num^mask// it  will apply the xor with each function 
    result.push(num);

  }
  return result;
}

let arr=[1, 0, 1, 0];
console.log(toggle(arr));
// The  pateren change of the light 

let a=[1, 0, 1, 1];

let res=[]
let shift=(a)=>{
    let n=a.length;
    for(let i=0;i<n;i++){
     let num=a[i];
    num=(num<<1)
     res.push(num);
    }
    return res;
}

console.log(shift(a))


let light_of=[5, 10, 12]

let take=(a)=>{
     let n=a.length;
      let mask=0b1110;
let res=[]
  for(let i=0;i<n;i++){
    let num=a[i];
    num=num&mask
    res.push(num);     
  }
  return res
}
console.log(take(light_of));

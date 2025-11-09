let sighn=(arr)=>{
    let n=arr.length
    for(let i=0;i<n;i++){
        let num=arr[i];
        num=(num>>>1);
        arr[i]=num;
    }

    return arr
}


let arr=[-8, -16, -32];
console.log(sighn(arr));

 
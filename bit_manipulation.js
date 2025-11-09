function bit_mainpulation(a){
    let n=a.length
    for(let i=0;i<n;i++){
        let num=a[i];
        if(num%2==0){
            num=num>>1
            a[i]=num
        }else if(num%2!=0){
            num=num<<1
             a[i]=num
        }

    }

let mask=0b101;
     for(let i=0;i<n;i++){
        let num=a[i];
        num=num^mask
        a[i]=num;
     }

  return a;
    }


    let arr=[3, 7, 12, 15]

    console.log(bit_mainpulation(arr));
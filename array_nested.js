function  check(arr){
     let res=[]
     for(let x of arr){
        if(!x.events){
           continue;
        }else{
        for(let y of  x.events){
            if(!res.includes(y)){
                res.push(y)
            }
     }
    }
    }
     return res; 
}
let arr=[
    {day:"monday",events:[32,3,4,5,6,66,7,"34"]
    },
    {day:"monday",eve:[32,3,4,5]
    },
    {day:"monday",events:[32,3,4,5,6,66,7,"34",34,34,34,]
    },
]
console.log(check(arr));

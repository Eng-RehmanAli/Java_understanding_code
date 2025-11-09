// i have the greate effort for the one-D array to convert the 2-D array  

let check=[
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  { events: ["carrot", "bread"], squirrel: false },
  { events: ["peanuts", "exercise"], squirrel: true },
  { events: ["peanuts", "brushed teeth"], squirrel: false },
  { events: ["weekend", "reading"], squirrel: true },
]
// collect the event 
  function  collect(arr){
    let res=[]
       for(let x of arr){
        if(!x.events){
            continue;
        }else{
            for(let y of x.events){
                if(!res.includes(y)){
                    res.push(y);
                }
            }
        }
       }
       return res;

  }
  // it will give the value to the corrrect position of the array 
  function  tarns(event ,jan){
    let res=[0,0,0,0]
    for(let entry of  jan){
        let index=0;
        if(entry.events.includes(event)) index+=1
        if(entry.squirrel) index+=2
        res[index]++;
        //[00,01,10m,11]
    }
    return res;
  }
  //  n00 and n01 is using becuse it is takig the array for thr phi arguments   from the lower calling case  
 function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
         Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}


for(let x of collect(check)){
    let  result= phi(tarns(x,check));
    if(result>0.1||result<-0.1){
        console.log(x +":" ,result)
    }
}
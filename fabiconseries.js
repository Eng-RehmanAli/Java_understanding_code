function fabicon(n){
    let first=0;
    let second=1;
console.log(first,second)
    for(let i=1;i<=n;i++){
         let next=first+second;
         console.log(next)
         first=second;
         second=next;

    }
}
fabicon(10);
var climbStairs=function(n){
    if(n<1 || n>45 || n==0 ){
        return `The number is out of the Range`;
    }
    if(n<=2){
        return n;
    }
    let  step1=1;
    let step2=2;
    for(let i=3;i<=n;i++){
         res=step1+step2;
         step1=step2;
         step2=res;
    }
    return step2;
}
for(let i=0;i<7;i++){
console.log(climbStairs(i));
}
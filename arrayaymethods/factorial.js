let start=100;
function factorial(n){
    if(n==0){
        return 1;
    }
    let temp=factorial(n-1);
     return temp*n;
}
let  result=factorial(5);
console.log(result);
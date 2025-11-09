let factorial=(n)=>{
    let sum=1;
    for(let i=1;i<=n;i++){
        sum*=i;
    }
    return sum
}
  let  user=Number(prompt("Enter the number:"));
let result=factorial(user);
console.log(result);




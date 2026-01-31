// keep in the mind that no '\0' null terminal at the end of the string in  the js 

let string="Hello";
let index=0;
function reverse(index,arr){
    if(index>4){
        return " ";
    } 
     let  take=reverse(index+1,arr);
      return take+arr[index];
}
let result=reverse(0,string);
console.log(result);
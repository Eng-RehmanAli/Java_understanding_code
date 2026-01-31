let array=[1,2,3,5,4,6,7,8,9,10]
let index=0;
let last=(array.length)-1;
let sum=0;
function rescursion(index,last,arr){
    if(index>last){
        return;
    }
    sum+=arr[index];
    rescursion(index+1,last,arr);
}
   rescursion(index,last,array);
//    console.log(sum);


   function fun1(index,last,arr){
     if(index>last){
        return 0;
     }
     return arr[index]+fun1(index+1,last,arr);

   }
let task=fun1(index,last,array);
 console.log(task);
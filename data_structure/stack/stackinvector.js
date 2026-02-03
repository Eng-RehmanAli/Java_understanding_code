//lets make  the  stack in the js  so  that  we make;
//  why the let make the erro with the  this;
// becuase the let make the variable in  any where and  this give use  the proprty in the object 
class stack{
    constructor(){
     this.vec=[];
    }
    push(val){
         this.vec.push(val)
    }
    pop(){
        this.vec.pop();
    }
    top(){
       return this.vec[this.vec.length-1];
    }
    empty(){
        if(this.vec.length==0){
        return true;   
        }
    }
}  
let s=new stack();
s.push(10)
s.push(13)
s.push(14)
s.push(15)
s.push(16)

 while(!s.empty()){
    console.log(s.top());
    s.pop();
 }
//  16
// 15
// 14
// 13
// 10      fisrt in last out in the stack 
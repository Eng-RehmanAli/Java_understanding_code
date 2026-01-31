   class Node{
      #data
      #next
      constructor(data){
        this.#data=data;
        this.#next=null;
      }
      getdata(){
         return  this.#data;
      }
         ysdata(x){
          this.#data=x;
         }
   }
   let one=new Node(8);
   console.log(one.ysdata(56));
   console.log(one.getdata());
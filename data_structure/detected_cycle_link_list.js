class node{
    constructor(data){
        this.data=data;
        this.next=null;

    }
}

class Linklist{
    constructor(){
        this.head=null    
    }
    makecycle(head,data){
         let newnode=new node(data);
         if(this.head==null){
            newnode.next=newnode;
            this.head=newnode
            return newnode;
         }
         let temp=this.head;
         while(temp.next!=this.head){
           temp=temp.next;
         }
          newnode.next=this.head; // give the  pointer to it self 
           temp.next=newnode; //   give  the  newnode to the temp
            this.head=newnode;
    }
     search_a_loop(){
        let count=1;
        let check=false;
        let slow= this.head;  // both slow and  fast are the pointers for that 
        let fast=this.head
        while(fast!=null && fast.next!==null){
            slow=slow.next;
            count++;
            fast=fast.next.next;
            if(slow==fast){
                 return `The cyclic node is at ${count} and  status is ${check=true}`;
            }
        }
         return `The cyclic is not found in the  link list and status is ${check=false}`
     }
       print(){
        let temp=this.head;
        let str="";
        do{
         str+=temp.data+"->"
         temp=temp.next;

        }while(temp!==this.head);
        console.log(str);
       }

}
let head=new Linklist();
  

  head.makecycle(head,41);
  head.makecycle(head,42);
  head.makecycle(head,43);
  head.makecycle(head,44);
  head.makecycle(head,45);
  head.makecycle(head,46);
  head.makecycle(head,47);
  head.makecycle(head,48);

  head.print();
  let result=head.search_a_loop();
  console.log(result);
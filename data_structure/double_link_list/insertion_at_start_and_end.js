//insertion at the star and end
// the link list is a dynamic  data structure 
// the link list can be made limited duo to the limited the memory becuse it is the 
// dynamic data structure 
// head is simplr pointer to node  at the first 
class node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class doubleLinklist{
    constructor(){
        this.head=null;
        this.prr=null;
    }
   insertion(nwenode){
    if(this.head==null){
         this.head=nwenode;
         this.head.next=null;
         this.head.prev=null;
         return; // retuen on the firt trun becuse it is the insert fisrt  time 
    }
       nwenode.next=this.head;
        this.head.prev=nwenode;
        this.head=nwenode;
        nwenode.prev=null;
   }
   inderatend(nwenode){
    if(!this.head==null){
         this.head=nwenode;
         nwenode.next=null;
         nwenode.prev=null;
         return;
    }
    let temp=this.head;
    while(temp.next!==null){
        temp=temp.next;
    }
      temp.next=nwenode;
      nwenode.prev=temp;
      nwenode.next=null;
   }
   display(){
   let temp=this.head;
   let str=" ";
   while(temp!=null){
       str+=temp.data+"-";
       temp=temp.next;    
   }
   console.log(str);
   }
   display_by_end(){
    let temp=this.head;
     let str="";
     while(temp.next!==null){
        temp=temp.next;
     }
     while(temp!=null){
        str+=temp.data+"-"
        temp=temp.prev;
     }
     console.log( str);
   }
}
let list =new doubleLinklist();
let node1=new node(3);
let node2=new node(4);
let node3=new node(5);
let node4=new node(6);
let node5=new node(7);
let node6=new node(8);
let node7=new node(9);


list.insertion(node1);
list.insertion(node2);
list.insertion(node3);
list.insertion(node4);



list.inderatend(node5)
list.inderatend(node6)
list.inderatend(node7)
list.display();
list.display_by_end();


class node{
    constructor(data){
        this.data=data;
         this.next=null;
    }
    
}

class Quese{
    constructor(){
        this.head=null;
    }
     push(newnode){
    if(this.head==null){
         this.head=newnode;
         return;
    }
        let temp=this.head;
        while(temp.next!==null){
            temp=temp.next;
        }
         temp.next=newnode;
         newnode.next=null;
     
       }
       pop(){
        let temp=this.head;
       if(temp==null){
         return `Queue is empty`;
       }else{}
        this.head=temp.next;
        return  temp.data;
       }
    front(){
        // we want to get the front simply with out removing  
         if(this.head) return null;
         return this.head.data;
}
}
let q=new Quese();
let node1=new node(1)
let node2=new node(2)
let node3=new node(3)
let node4=new node(4)
let node5=new node(5)
let node6=new node(6)
q.push(node1)
q.push(node2)
q.push(node3)
q.push(node4)
q.push(node5)
q.push(node6);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());


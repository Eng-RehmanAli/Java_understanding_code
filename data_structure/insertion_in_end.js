// insetion complete singly link list 
class node{
    constructor(data){
        this.data=data;
         this.next=null;
    }
    inertionatstar(newnode){
         newnode.next=this.next;
         this.next=newnode;
    }
    inertionaAtmiddle(position,newnode){
        let temp=this;
         for(let i=0;i<position;i++){
            if(temp.next==null){
             return temp;
            }
            temp=temp.next;

         }
         newnode.next=temp.next;
         temp.next=newnode;
         return this;
    }
    insertionend(newnode){
        let temp=this;
        while(temp.next!==null){
             temp=temp.next;
        }
         temp.next=newnode;
    }
    pinting(){
        let temp=this;
        let str=""
        while(temp!==null){
            str+=temp.data+"->";
             temp=temp.next;
        }
        console.log(str+"null");
    }
}

let list=new node(45);
let node1=new node(1)
let node2=new node(2)
let node3=new node(3)
let node4=new node(4)
let node5=new node(5)
let node6=new node(6)
let node7=new node(7)
let node8=new node(8)
let node9=new node(9)
let node10=new node(10)
let node11=new node(11)
let node12=new node(12)
let node13=new node(13)
let node14=new node(14)
let node15=new node(15)
list.inertionatstar(node1)
list.inertionatstar(node2)
list.inertionatstar(node3)
list.inertionatstar(node4)
list.inertionatstar(node5)
list.inertionatstar(node6)
list.inertionatstar(node7)
list.inertionatstar(node8)
list.inertionatstar(node9);

list.pinting();
list.inertionaAtmiddle(2,node10)
list.inertionaAtmiddle(3,node11)
list.inertionaAtmiddle(4,node12)
list.inertionaAtmiddle(5,node13)
list.insertionend(node14)
list.insertionend(node15)

list.pinting();
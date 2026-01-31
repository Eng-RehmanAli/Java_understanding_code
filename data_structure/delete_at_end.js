/// it is the at the end and it will be better case for the understanding 
// for the mid dlet


class node{
    constructor(data){
        this.data=data;
        this.next=null; // meam no one is conected 
    }
    stat(newnode){
        newnode.next=this.next;
        this.next=newnode;
    }
    end(newnode){
        let temp=this;
        while(temp.next==null){
            return  temp;
            console.log("The link is empty or at the end");
        }
        temp.next=newnode;
    }
    mid(newnode,position){
        let current=this;
        if(current.next===null){
           console.log("The link list is empty and please insert at the first");
        }
        for(let i=0;i<position;i++){ //keep in the mind that position is after that we want to insert to that 
            if(current.next==null){
            return console.log("please keep it up to the insertion at the start or you are at the end ")
                        }

            current=current.next;
        }
        newnode.next=current.next;
             current.next=newnode;
         }
         delete_at_first(){
            if(!this){
                return console.log("link list is empty");
            }
            this.next=this.next.next;
         }

         // main case for the dlet the end 
         delete_at_end(){
            if(!this){
                console.log("The list is empty");

            }
            let temp=this;
            while(temp.next.next!=null){
                 temp=temp.next;
         }
         temp.next=null;
        }

         print(){
            let  temp=this;
            let str="";
            while(temp!=null){
                str+=temp.data+"->";
                temp=temp.next;
            }
            console.log(str);
         }
}



let list =new node(45);
let node1=new node(1)
let node2=new node(2)
let node3=new node(3)
let node4=new node(4);
let node5=new node(5);
let node6=new node(6);
let node7=new node(7);
let node8=new node(8);
let node9=new node(9);
let node10=new node(10);
let node11=new node(11);



list.stat(node1)
list.stat(node2)
list.stat(node3)
list.stat(node4)
list.print();


list.mid(node6,2);
list.mid(node7,2);
 list.mid(node8,2);
 list.mid(node9,2);
 list.mid(node10,2);
 list.mid(node11,2);
list.print();
list.delete_at_first();
list.print();
list.delete_at_end();
list.print();
// console.log(list.delete_at_end());
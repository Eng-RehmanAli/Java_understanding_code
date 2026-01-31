class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
    start(newnode){
       newnode.next=this.next;
       this.next=newnode;
    }
    dlet_from_mid(position){
        if(!this){
         console.log("The list is empty");
            }
            let temp=this;
            for(let i=1;i<position;i++){
             temp=temp.next;
             }

             temp.next=temp.next.next;
        }
     print(){
        let temp=this;
        let str="";
        while(temp){
            str+=temp.data+"->";
            temp=temp.next;
        }
        console.log(str);
     }
}

list= new node(45);
let node1=new node(1);
let node2=new node(2);
let node3=new node(3);
let node4=new node(4);
let node5=new node(5);

list.start(node1)
list.start(node2)
list.start(node3)
list.start(node4)
list.print();
list.dlet_from_mid(2);
list.print();
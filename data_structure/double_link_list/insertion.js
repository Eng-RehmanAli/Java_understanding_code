class node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class dlubleLinklist{
    constructor(){
        this.head=null;
        this.prepointer=null;
    }    
    insertat(newnode){
        if(this.head==null){
                this.head=newnode; //  give the nwenode to the this.head  and  the prevpointer will 
                // remain empty 
        }else{
     newnode.next=this.head;
     this.head.prev=newnode; //
     this.head=newnode;
        }

    }
    display(){
        let temp=this.head;
        let str="";
        while(temp!=null){
            str+=temp.data+"-";
            temp=temp.next;
        }
        console.log(str);
    }
    display_backward(){
        let temp=this.head;
        if(this.head===null){
            return;
        }
        let str="";
        // fisrt we will go to the last one  of the node S
        // and then 
    while(temp.next!=null){
        temp=temp.next
    }
        while(temp!=null){
             str+=temp.data+"-";      
              temp=temp.prev;
            }
            console.log(str);
    }
}
let list=new dlubleLinklist();
let node1=new node(23);
let node2=new node(22);
let node3=new node(24);
let node4=new node(25);
let node5=new node(26);
let node6=new node(27);
let node7=new node(28);

list.insertat(node1)
list.insertat(node2)
list.insertat(node3)
list.insertat(node4)
list.insertat(node5)
list.insertat(node6)

list.display();
list.display_backward();
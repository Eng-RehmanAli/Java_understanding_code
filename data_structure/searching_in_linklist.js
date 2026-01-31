class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
    start(newnode){
    newnode.next=this.next;
    this.next=newnode;
    }
    search(xdata){
        if(!this){
            console.log("The link list is empty ");
        }
       let temp=this
       let  count=0;
       let check=false;
             while(temp!=null){
             if(temp.data==xdata){
                check=true;
                return console.log(`The data is here node  ${count}`);
             }
             count++;
             temp=temp.next;
             }
             if(check==false){
                console.log("The data is not in the list ");
             }
    }
}

let list=new node(45);
let node1=new node(1);
let node2=new node(2);
let node3=new node(3);
let node4=new node(4);
let node5=new node(5);
list.start(node1)
list.start(node2)
list.start(node3)
list.start(node4)
list.start(node5)

list.search(2);

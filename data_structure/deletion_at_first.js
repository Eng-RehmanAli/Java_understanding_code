class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
  start(newnode){
    newnode.next=this.next;
    this.next=newnode;
  }
  mid(newnode,position){
     let temp=this;
     for(let i=0;i<position;i++){
        if(temp.next===null){
            return temp;
        }
        temp=temp.next;
     }    
       newnode.next=temp.next;
        temp.next=newnode;
  }
  end(newnode){
      let  current=this;
       while(current.next!==null){
            current=current.next;
       }
       current.next=newnode;
  }

deletefromfirst(){ // no need  of any input  
    
    let head=this.next;    
    if(head===null){
        return console.log("The link list is empty ")
    }
   this.next=this.next.next;   // this.proprty mean the propety of the object that is 
    // this.head.next is  reference to reference so  it will not work  how we can do it 
}
printing(){
    let temp=this.next;
    let str="";
    while(temp!=null){
        str+=temp.data+"->";
        temp=temp.next;
    }
    console.log(str+"null");
}

}

let list=new node(0);
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

list.start(node1);
list.start(node2);
list.start(node3);
list.printing();
// at the mid 
list.mid(node4);
list.mid(node5);
list.mid(node6);
list.mid(node7);
list.printing();
//  at the end
list.end(node8)
list.end(node9)
list.end(node10);
list.printing();

list.deletefromfirst();
list.printing();
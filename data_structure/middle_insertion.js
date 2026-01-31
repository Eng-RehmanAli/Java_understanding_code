class  node{
    constructor(data){
         this.data=data;
         this.next=null;
    }
    startinsertion(newnode){
            newnode.next=this.next;
             this.next=newnode;
    }
    printing(){
        let temp=this;
        let str="";
        while(temp!=null){
            str+=temp.data+ "->";
            temp=temp.next;
        }
       console.log(str+"null");
    }
    midleinsertion(position,insert){
            let current=this;
            for(let i=1;i<position;i++){
                 if(current.next==null){ // check if the next node is null ? exsit or not 
                    console.log("The node is empty ");
                    return  current;
                 }
                 current=current.next;
            }     
            insert.next=current.next
             current.next=insert;
              return this
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
let node8=new node(8);


list.startinsertion(node1)
list.startinsertion(node2)
list.startinsertion(node3)
list.startinsertion(node4)
list.startinsertion(node5)
list.startinsertion(node6)
list.startinsertion(node7)
// list.startinsertion(node7) // we can not  inser the same node again and again becuase it 
// is 

list.printing();
list.midleinsertion(3,node8);
list.printing();

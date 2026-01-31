class  node{
    constructor(data){
        this.data=data;
        this.head=null;
    }
    insertionatstar(newnode){
        newnode.head=this.head;
        this.head=newnode;
    }
     reverserinsertion(){
      let prev=null; // intialize with the previous
      let current=this.head; // current node;
                         // next pointing to prevent the break of the link list
      while(current!==null){
        let next=current.head;     //  it will run untill it will not reache at the at the end  
        current.head=prev;        // give the currrent to  next 
       prev=current;              // then prev will move on the current so  
       current=next;          //  then current move on the next node 
      }
       return this.head=prev  // mean   point beacause we are giving the head to previous 
     }
    
      print(){
        let temp=this;
        let str="";
        while(temp!=null){
         str+=temp.data+"->";
         temp=temp.head;
        }
        console.log(str +"null");
      }
}
let list= new node(" ");
let node1=new node(2);
let node2=new node(3);
let node3=new node(4);
let node4=new node(5);

list.insertionatstar(node1)
list.insertionatstar(node2)
list.insertionatstar(node3)
list.insertionatstar(node4)

list.print();
list.reverserinsertion();
list.print();
class node{
    constructor(data){
        this.data=data;
        this.next=null;
         this.prev=null;

    }
}

class doublelinklist{
    constructor(){
        this.head=null;
    }
    inserstar(newnode){
        if(this.head==null){
            this.head=newnode;
            newnode.next=null;
            newnode.prev=null;
            return;
        }else{
        newnode.next=this.head;
         this.head.prev=newnode;
         this.head=newnode;
          newnode.pre=null;
        }
    }
    insetatend(newnode){
        if(this.head){
            this.head=newnode;
            newnode.next=null;
            newnode.prev=null;
            return;
        }
        let temp=this.head;
        while(temp.next!==null){
             temp=temp.next;

        }
        temp.next=newnode;
        newnode.pre=temp;
        newnode.next=null;
    }
    insert_at_middle(newnode){
        if(this.head===null){
              this.head=newnode
              newnode.next=null;
              newnode.prev=null;
              return;

        }
        //  if(this.head.next===null){
        //      newnode.next=this.head;
        //      this.head.prev=newnode;
        //      this.head=newnode;
             
        //  }
       let count=0;
       
       let temp=this.head;
       while(temp.next!==null){
        count++
        temp=temp.next;
       }
       console.log(`you have only the linklist of the ${count}`);
    // enter by the user position of the link list so 
    let num;
    const readline=require("readline");
     let r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout,
     });
     r1.question("Enter the position of the node",function(n){
           num=Number(n);
          rl.close();
      });
     
      for(let i=0;i<num;i++){
               temp=temp.next;
      }
       temp.next=newnode;
       newnode.prev=temp;
       newnode.next=temp.next.next;
    }
      display(){
         let temp=this.head;
        
         let str="";
         
           while(temp!==null){
            str+=temp.data+"_";
            temp=temp.next;

           }
           console.log(str);
        
      }
}
let list=new doublelinklist();
let node1=new node(1)
let node2=new node(2)
let node3=new node(3)
let node4=new node(4)
let node5=new node(5)
let node6=new node(6);
let node7=new node(7);
let node8=new node(8);

list.inserstar(node1)
list.inserstar(node2)
list.inserstar(node3)

list.insetatend(node4)
list.insetatend(node5)
list.insetatend(node6);


list.display();

// list.insert_at_middle(node7);z
// list.insert_at_middle(node8);

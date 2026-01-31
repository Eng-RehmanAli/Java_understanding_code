// insert at the start and then make the circuler link list  etc;
class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Linklist{
    constructor(){
        this.head;

    }
    insert_and_circuler(data){
       let newnode=new node(data);

       if(this.head==null){
        this.head=newnode;
        newnode.next=this.head;

    //  -------------------
    //  |   DATA | ADRESS |
    //  |      |            |
    //  |      |            |
    //  |      |            |
    //    -----------------
       }
       let temp=this.head;
       while(temp.next!==this.head){
        temp=temp.next;
       }
         newnode.next=this.head; // it will show  point point to it self  mean to the 
         // same node 
         temp.next=newnode;
         this.head=newnode;

         
    }

    printing(){
        let temp=this.head;
        let str="";
        do{
             str+=temp.data+"->";
             temp=temp.next;
        }while(temp!=this.head);
        console.log(str);       
    }
}


let list=new Linklist()
list.insert_and_circuler(34)
list.insert_and_circuler(34)
list.insert_and_circuler(35)
list.insert_and_circuler(36)
list.insert_and_circuler(37)
list.insert_and_circuler(30)
list.insert_and_circuler(0)

list.printing();
class node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class doubleLinklist{
    constructor(){
        this.head=null;
        this.prev1=null;
    }

    insertatstar(newnode){
       if( this.head== null){
        this.head=newnode;
       }else{
        newnode.next=this.next;
        this.head.prev=newnode;
         this.head=newnode;
       }
    }
  insert_at_end(nwenode){
        let temp=this.head;
        if(this.head==null){
               nwenode.next=this.head;
               this.head.prev=nwenode;
               this.head=nwenode;
        }
        while(temp.next!=null){
            temp=temp.next;       
    }  
      temp.next=nwenode;
       nwenode.prev=temp;
       nwenode.next=null;
               

}
}

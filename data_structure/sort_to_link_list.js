class node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.count=0;
    }
    insert_at_stat(newnode){
        newnode.next=this.next;
        this.next=newnode;
        this.count++;
    }
     assendind_sort(){
      let  first,second;
    for(first=this;first!=null;first=first.next){
        for(second=first.next;second!=null;second=second.next){
            if(first.data>second.data){
                let  result=first.data;
                first.data=second.data;
                second.data=result;
            }
        }
    }
     console.log(`sorting is done`);
}
    print(){
        let temp=this
        let str="";
        while(temp.next!==null){
            str+=temp.data+"->";
            temp=temp.next;
        }
        console.log(str);
    

}
}

let head=new node(0);
  let  node1=new node(34)
  let  node2=new node(1)
  let  node3=new node(43)
  let  node4=new node(5)
  let  node5=new node(6)
  let  node6=new node(8)
  let  node7=new node(456)
  
  head.insert_at_stat(node1)
  head.insert_at_stat(node2)
  head.insert_at_stat(node3)
  head.insert_at_stat(node4)
  head.insert_at_stat(node5)
  head.insert_at_stat(node6)
  head.print();
  head.assendind_sort();
  head.print();

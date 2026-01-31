class node{
     constructor(data){
        this.data=data;
        this.next=null;
     }
    startinsert(newnode){
          newnode.next=this.next;
          this.next=newnode;
    }
    madenode(index,size,arr,list){
        general(index,size,arr);
     function general(index,size,arr){
        if(index===size){
            return null;
        }
        let  take= new node(arr[index]);
       let  temp=general(index+1,size,arr);
            take.next=temp
            list.startinsert(take);
            return take;
     }

    }
    printing(){
        let temp=this;
        let str="";
        while(temp){
            str+=temp.data+"->";
            temp=temp.next;
        }
        console.log(str);
    }
}
let arr=[1,2,3,4,5,6,7];
let  len=arr.length;
let list=new node(45)
list.madenode(0,len,arr,list);

list.printing();
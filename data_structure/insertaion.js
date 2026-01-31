// class Linklist{
//     constructor(){
//      this.head=null;
//     }     
//     insertsatrt(newnode){
//     newnode.next=this.head; // at the fisrt it will be  null and then it automatically
//     this.head=newnode;   // and then the for the next node      
//      }
//      printlist(){
//         let temp=this.head;
//         let str="";
//         while(temp){
//             str+=temp.data +"->";
//             temp=temp.next;
//         }
//         // console.log(`The link list in the  case of the ${str} null`);
//     }
// }
// class node{
//     constructor(data){
//         this.data=data; 
//         this.next=null;
//     }   
// }
// let list=new Linklist();
// let node1=new node(34);
// let node2=new node(0);
// let node3=new node(90);
// // insertion function as  the main case 
//   list.insertsatrt(node1);
//   list.insertsatrt(node2);
//   list.insertsatrt(node3);
//   list.printlist();
//   console.log(list.head);
//   // we use the head as the  reference  in the js  becuse we do not take the addrees of the head in the memery 



class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
      insertionstar(newnode){
        newnode.next=this.next;
        this.next=newnode;
      }
        print(){
            let temp=this.next;
            let str="";
            while(temp){
                str+=temp.data +"->";
                temp=temp.next;
            }
            console.log(str);
        }
}
let list=new node("0");
let   node1=new node(45);
let   node2=new node(434);
list.insertionstar(node1)
list.insertionstar(node2);
list.print();
let lrange=1;
Urange=10;
 function   recursion(Lrang,Urang){
         if(Lrang>Urang){
            return;
         } 
         recursion(Lrang+1,Urang);
         console.log(Lrang);
 }
 recursion(lrange,Urange);
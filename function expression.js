
let a=0;
console.log("The Even and odd\n");
while(a<1){
    let check=function (x){
        if(x%2==0){ // one case is chech here 
            return true
        }else if(x%2!=0){// second case is here 
            return false;
        }
        // return false so its no need
    }
    for(let i=1;i<=10;i++){
        console.log(i,check(check(i)));
    }
    ++a;
    
}


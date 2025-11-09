function applyoperation(a,b){
    let take=prompt("Enter the * and - and + and / for oparation :");
    switch(take){
        case "-":
        let sub=(a,b)=>{
            return a-b;
        }
        
    console.log(sub(a,b));
    break;
    case "+":
        let ADD=(a,b)=>{
            return a+b;
        }
    console.log(ADD(a,b));
    break;
    case "*":
           let MUL=(a,b)=>{
            return a*b;
        }
    console.log(MUL(a,b));
    break;
    case "/":
              let DIV=(a,b)=>{
            return a/b;
        }
    console.log(DIV(a,b));
    break;
    default:
console.log("Enter the vaild case");
    }
    return "done";
}
console.log(applyoperation(5,4));
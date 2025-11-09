
let check=[
    {day:"Sunday",events:["23","234",234]
    },
     {day:"MOnday",events:["23"]
    },
     {day:"Friday",events:["234",234]
    }
    
    ]
    
    
    // array loop 
    for(let x of check ){
        console.log(`${x.events.length} on day ${x.day}`)
    }
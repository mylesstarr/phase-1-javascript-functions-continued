function saturdayFun(activity="roller-skate"){
    {return(`This Saturday, I want to ${activity}!`)}
}

const mondayWork = function(toDo="go to the office")
    {return (`This Monday, I will ${toDo}.`)
    }

// const wrapAdjective = function(defaultParameter="special"){
//     return
// }
    
function wrapAdjective(flair="*") {
    const inner = function(adjective="special",){
        return (`You are ${flair}${adjective}${flair}!`)
    }
return inner
}


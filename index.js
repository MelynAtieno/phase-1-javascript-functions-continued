// code your solution here

function saturdayFun(sat1 = "roller-skate"){
    return `This Saturday, I want to ${sat1}!`
           
}

function mondayWork(mon = "go to the office"){
    return `This Monday, I will ${mon}.`

}

let wrapAdjective = function(def="*") {
    return function(adj="special") {
          return `You are ${def}${adj}${def}!`
        }
}


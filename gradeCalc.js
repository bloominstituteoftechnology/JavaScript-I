// let getTip = function(total, tioPercent=.20) {
//     // percent= tioPercent * 100
//     // totalBill= total * tioPercent
//     return `a ${tioPercent * 100}% tip on $${total} would be S ${total * tioPercent }`
// }
// let tip = getTip(50 ,.25)
// console.log(tip)


let scored = function (totalPossible, studentScore) {
    tScore= studentScore / totalPossible
    totalScore = tScore * 100
    letterGrade= ''
    if (totalScore >= 90 && totalScore <= 100 || totalScore > 100) {
        return `you got an ${letterGrade} ${totalScore}!`
    } else if (totalScore <= 89 && totalScore >= 80) {
        return `you got a B ${totalScore}`
    } else if (totalScore <= 79 && totalScore >= 70) {
        return `you got a C ${totalScore}`
    } else if (totalScore <= 69 && totalScore >= 60) {
        return `you got a D ${totalScore}`
    } else {
        return `I'm sorry you failed`
    }
}
    let score = scored(100,98)
    console.log(score)

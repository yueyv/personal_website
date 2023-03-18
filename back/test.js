let firsttime="12:12:12"
let lesttime="00:00:00"
function get(firsttime,lesttime){
    let arrFirst=firsttime.split(":").map(Number)
    let arrLeast=lesttime.split(":").map(Number)
    let hour=parseInt((arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])/3600)
    let minutes=parseInt((arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])%3600/60)
    let seconds=(arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])%3600%60
    return (hour+":"+minutes+":"+seconds)
}
console.log(get(firsttime,lesttime))
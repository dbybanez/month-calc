function monthDiff (d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function test(d1, d2) {
    var diff = monthDiff(d1, d2);
    let name = "Awiwo"
    console.log(`Happy ${diff} months, ${name}!!! I love you!!!`)
    console.log(`From ${d1.toISOString().substring(0, 10)} to ${d2.toISOString().substring(0, 10)}: ${diff}`);
    console.log(`${Math.floor(diff/12)} years and ${diff%12} months`)
    
}

let epoch = 1522195200
let d = new Date(0)

test(
    /* new Date(2018, 2, 29), // March 28, 2018 */
    new Date(d.setUTCSeconds(epoch)),
    new Date(Date.now())
);
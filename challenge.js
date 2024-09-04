

const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${scoreDolphins},${scoreKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${scoreKoalas},${scoreDolphins})`)
    } else {
        console.log("No team wins...")
    }
}
checkWinner(scoreDolphins, scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins wins (${avgDolphins},${avgKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas wins (${avgKoalas},${avgDolphins})`)
//     } else {
//         console.log("No team wins...")
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas)
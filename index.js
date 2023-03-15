let names = ["Guadalupe", "Ollie", "Aki"]
let cards=[]
function writeCards(names) {
    for (let i=0; i < names.length; i++) {
    cards[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return cards
}
writeCards(names)

function countDown(){
let count = 10; 
while (count >= 0) {
    console.log(count--)
}
}
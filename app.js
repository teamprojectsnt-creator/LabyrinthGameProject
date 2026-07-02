import { start, prompt, moveInfo } from "./info/menu.js"
const player = start()
while (true) {
    for(const row of player.getInfo.get("labirint").get("labirint")){
        console.log(row.join(""))
    }
    console.log(moveInfo())
    const choice = prompt("yuring: ")
    switch (choice) {
        case "a":
            (player)
            break;
        case "w":
            
            break;
        case "d":
            
            break;
        case "s":
            
            break;
        default:
            console.log("xato tanlov qildingiz❌ Iltimos qaytadan kiriting❗️")
            continue
    }
}
// console.log(player.getInfo.get("labirint").get("labirint"))
if (!player) console.log("O'yin tugadi")

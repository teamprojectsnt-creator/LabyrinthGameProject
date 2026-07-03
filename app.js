import { start, prompt, moveInfo } from "./info/menu.js"
import { RightMove } from "./move/right.js"

const player = start()
while (true) {
    for(const row of player.getInfo.get("labirint").get("labirint")){
        console.log(row.join(""))
    }
    console.log(moveInfo())
    const choice = prompt("yuring: ")
    switch (choice) {
        case "a":
            break;
        case "w":
            
            break;
        case "d":
            const result = RightMove.rightMove(player)
            console.clear()
            switch (result) {
                case "continue":
                    continue
                    break;
                case "death":
                    break;
                case "finish":
                    break;
                default:
                    console.log("xato tanladingiz❗️")
                    break;
            }
            break;
        case "s":
            
            break;
        default:
            console.log("xato tanlov qildingiz❌ Iltimos qaytadan kiriting❗️")
            continue
    }
}
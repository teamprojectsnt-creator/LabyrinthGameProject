import { start, prompt, moveInfo } from "./info/menu.js"
import { RightMove } from "./move/right.js"
import { ForwardMove } from "./move/forward.js" 
import { BackMove } from "./move/back.js"
import { LeftMove } from "./move/left.js"

const player = start()
let game = true;
let result;

while (game) {
    for(const row of player.getInfo.get("labirint")){
        console.log(row.join(""))
    }
    console.log(moveInfo())
    const choice = prompt("yuring: ")
    switch (choice) {
        case "a":
            result = LeftMove.leftMove(player);
            console.clear()
            switch (result) {
                case "continue":
                    break;
                case "death":
                    game = false;
                    break;
                case "finish":
                    game = false;
                    break;
                default:
                    console.log("xato tanladingiz❗️")
                    break;
            }
            break;
        case "w":
            result = ForwardMove.forward(player);
            console.clear()
            switch (result) {
                case "continue":
                    break;
                case "death":
                    game = false;
                    break;
                case "finish":
                    game = false;
                    break;
                default:
                    console.log("xato tanladingiz❗️")
                    break;
            }
            break;
        case "d":
            result = RightMove.rightMove(player)
            console.clear()
            switch (result) {
                case "continue":
                    break;
                case "death":
                    game = false;
                    break;
                case "finish":
                    game = false;
                    break;
                default:
                    console.log("xato tanladingiz❗️")
                    break;
            }
            break;
        case "s":
            result = BackMove.backMove(player);
            console.clear()
            switch (result) {
                case "continue":
                    break;
                case "death":
                    game = false;
                    break;
                case "finish":
                    game = false;
                    break;
                default:
                    console.log("xato tanladingiz❗️")
                    break;
            }            
            break;
        case "x":
            process.exit(0)
            break;
        default:
            console.log("xato tanlov qildingiz❌ Iltimos qaytadan kiriting❗️")
            continue
    }
}


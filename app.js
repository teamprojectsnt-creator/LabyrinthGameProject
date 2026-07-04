import { start, prompt, moveInfo } from "./info/menu.js"
import { RightMove } from "./move/right.js"
import { ForwardMove } from "./move/forward.js" 
import { BackMove } from "./move/back.js"
import { LeftMove } from "./move/left.js"
import { timeStart, diffTime} from "./time/time.js"


const player = start()
let game = true;
let result;

if (!player){
    game = false;
    console.log('Sizni kutamiz')
}

if (game){
    console.clear()
    for(const row of player.getInfo.get("labirint")){
        console.log(row.join(""))
    }
    console.log('vaqt boshlandi')
    player.setStartTime = timeStart();
    console.log(moveInfo())
}

while (game) {
    
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
                    player.setTimeToPath = diffTime(player.getStartTime)
                    break;
                case "finish":
                    game = false;
                    player.setTimeToPath = diffTime(player.getStartTime)
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
                    player.setTimeToPath = diffTime(player.getStartTime)
                    break;
                case "finish":
                    game = false;
                    player.setTimeToPath = diffTime(player.getStartTime)
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
                    player.setTimeToPath = diffTime(player.getStartTime)
                    break;
                case "finish":
                    game = false;
                    player.setTimeToPath = diffTime(player.getStartTime)
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
                    player.setTimeToPath = diffTime(player.getStartTime)
                    break;
                case "finish":
                    game = false;
                    player.setTimeToPath = diffTime(player.getStartTime)
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
    for(const row of player.getInfo.get("labirint")){
        console.log(row.join(""))
    }
    console.log(game ? moveInfo() : 'tu-gaadi!')

    
}
console.log(player.getInfo)


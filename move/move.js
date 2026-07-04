import { RightMove } from "../move/right.js"
import { ForwardMove } from "../move/forward.js" 
import { BackMove } from "../move/back.js"
import { LeftMove } from "../move/left.js"
import { diffTime } from "../time/time.js"
import { prompt } from "../info/menu.js" 

export function move(player){
    const choice = prompt("yuring: ")
    let result;
    switch (choice) {
        case "a":
            result = LeftMove.leftMove(player);
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;         
                case "finish":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;
                default:
                    console.log("xato tanladingiz❗️")
                    return true 
            }   
            break;
        case "w":
            result = ForwardMove.forward(player);
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;         
                case "finish":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;
                default:
                    console.log("xato tanladingiz❗️")
                    return true 
            }   
            break;
        case "d":
            result = RightMove.rightMove(player)
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;         
                case "finish":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;
                default:
                    console.log("xato tanladingiz❗️")
                    return true 
            }   
            break;
        case "s":
            result = BackMove.backMove(player);
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;         
                case "finish":
                    player.setTimeToPath = diffTime(player.getStartTime)
                    return false;
                default:
                    console.log("xato tanladingiz❗️")
                    return true 
            }            
            break;
        case "x":
            process.exit(0);           
        default:
            console.log("xato tanlov qildingiz❌ Iltimos qaytadan kiriting❗️")
            return true
    }
}
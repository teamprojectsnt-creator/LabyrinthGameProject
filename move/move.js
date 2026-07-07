import { RightMove } from "../move/right.js"
import { ForwardMove } from "../move/forward.js" 
import { BackMove } from "../move/back.js"
import { LeftMove } from "../move/left.js"
import { diffTime } from "../time/time.js"
import { prompt } from "../info/menu.js" 
import { AppMenu } from "../info/menu.js"

export function move(){
    const choice = prompt("yuring: ")
    let result;
    switch (choice) {
        case "a":
            result = LeftMove.leftMove();
            console.clear()
            switch (result) {
                case "continue":
                    console.log('continue')
                    return true
                case "death":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    console.log('death')
                    return false;         
                case "finish":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    console.log('finish')
                    return false;
            }   
            break;
        case "w":
            result = ForwardMove.forward();
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;         
                case "finish":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;
            }   
            break;
        case "d":
            result = RightMove.rightMove()
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;         
                case "finish":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;
            }   
            break;
        case "s":
            result = BackMove.backMove();
            console.clear()
            switch (result) {
                case "continue":
                    return true
                case "death":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;         
                case "finish":
                    AppMenu.currentPlayer.setTimeToPath = diffTime(AppMenu.currentPlayer.getStartTime)
                    return false;
            }            
            break;
        case "x":
            process.exit(0);           
        default:
            console.clear()
            console.log("xato tanlov qildingiz❌ Iltimos qaytadan kiriting❗️")
            return true
    }
}
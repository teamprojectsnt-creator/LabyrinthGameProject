import { start,moveInfo } from "./info/menu.js"
import { timeStart } from "./time/time.js"
import { move } from "./move/move.js"

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
    game = move(player)

    for(const row of player.getInfo.get("labirint")){
        console.log(row.join(""))
    }
    
    console.log(game ? moveInfo() : 'tu-gaadi!')
}


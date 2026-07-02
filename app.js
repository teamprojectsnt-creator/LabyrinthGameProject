import { start } from "./info/menu.js"

const player = start()
for(const row of player.getInfo.get("labirint").get("labirint")){
    console.log(row.join(""))
}
// console.log(player.getInfo.get("labirint").get("labirint"))
if (!player) console.log("O'yin tugadi")

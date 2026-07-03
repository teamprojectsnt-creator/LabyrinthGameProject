import { labirint } from "../data/labirint.js";
import { Player } from "../Player/Player.js";
import { Icons } from "../data/labirint.js";

export class ForwardMove {

    static forward (payer) {

        const info = player.getInfo();

        if (info.get('startTime') === undefined) {
            player.setStartTime = Date.now();
        }

        const labirintInfo = info.get('labirint');
        const labirint = labirintInfo.get('labirint');
        const location = labirintInfo.get('location');
        
        let row = location[0];
        let col = location[1];
        let nextRow = row - 1;

        if (labirint[nextRow][col] === Icons.wall) {
            console.log("Game over")
        }

    }
}


const player = new Player('A', 1);

console.log(ForwardMove.forward());
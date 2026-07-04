import { Icons } from "../data/labirint.js";

export class BackMove {
    static backMove(player) {

        const info = player.getInfo;

        const labirint = info.get("labirint");
        const location = info.get("location");

        let row = location[0];
        let col = location[1];
        const nextRow = row + 1;
        
        if (nextRow === labirint.length){
            labirint[row][col] = Icons.death;
            return 'death'
        }
        
        labirint[row][col] = Icons.road;
        player.setLocation = [nextRow, col];


        if (labirint[nextRow][col] === Icons.wall) {
            labirint[nextRow][col] = Icons.death;
            return 'death';
        }
        else if (labirint[nextRow][col] === Icons.finish) {
            labirint[nextRow][col] = Icons.player;
            return 'finish';
        }
        else {
            labirint[nextRow][col] = Icons.player;
            return 'continue'
        }
        
        
    }
}

import { Icons } from "../data/labirint.js"
import { timeStart } from "../time/time.js"

export class ForwardMove {

    static forward (player) {

        const info = player.getInfo;

        if (!info.get('startTime')){
            player.setStartTime = timeStart()
        }

        const location = info.get('location');
        const labirint = info.get('labirint');
        
        let row = location[0];
        let col = location[1];

        let nextRow = row - 1;
        
        labirint[row][col] = Icons.road;
        
        player.setLocation = [newRow, col];

        if (labirint[nextRow][col] === Icons.wall) {
            labirint[nextRow][col] = Icons.death;
            return "death";
        } else if (labirint[nextRow][col] === Icons.finish) {
            labirint[nextRow][col] = Icons.player;
            return "finish";
        } else {
            labirint[nextRow][col] = Icons.player;
            return 'constinue';
        }
    }
}
import { Icons } from "../data/labirint.js"
import { AppMenu } from "../info/menu.js";
export class ForwardMove {

    static forward () {

        const info = AppMenu.currentPlayer.getInfo;

        const location = info.get('location');
        const labirint = info.get('labirint');
        
        let row = location[0];
        let col = location[1];

        let nextRow = row - 1;
        
        labirint[row][col] = Icons.road;
        
        AppMenu.currentPlayer.setLocation = [nextRow, col];

        if (labirint[nextRow][col] === Icons.wall) {
            labirint[nextRow][col] = Icons.death;
            return "death";
        } else if (labirint[nextRow][col] === Icons.finish) {
            labirint[nextRow][col] = Icons.player;
            return "finish";
        } else {
            labirint[nextRow][col] = Icons.player;
            return 'continue';
        }
    }
}
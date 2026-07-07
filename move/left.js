import { Icons } from "../data/labirint.js";
import { AppMenu } from "../info/menu.js";
export class LeftMove{
    static leftMove(){
        const location = AppMenu.currentPlayer.getInfo.get('location');
        const labirint = AppMenu.currentPlayer.getInfo.get('labirint');

        labirint[location[0]][location[1]] = Icons.road;

        AppMenu.currentPlayer.setLocation = [location[0],--location[1]]

        if (labirint[location[0]][location[1]]== Icons.wall){
            labirint[location[0]][location[1]]=Icons.death;
            return 'death';

        }else if (labirint[location[0]][location[1]]== Icons.finish){
            labirint[location[0]][location[1]] = Icons.player;
            return 'finish';
        }
        else{
            labirint[location[0]][location[1]] = Icons.player;
            return 'continue';
        }
    }
}
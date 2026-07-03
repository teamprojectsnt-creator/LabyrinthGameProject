import { Icons } from "../data/labirint.js";
import { timeStart } from "../time/time.js";

export class LeftMove{
    static leftMove(player){

        if (!player.getInfo.get("startTime")){
            playersetStartTime = timeStart()
        }

        const location = player.getInfo.get('location');
        const labirint = player.getInfo.get('labirint');

        labirint[location[0]][location[1]]=Icons.road;
        
        player.setLocation = [location[0],--location[1]]

        if (labirint[location[0]][location[1]]== Icons.wall){
            labirint[location[0]][location[1]]=Icons.death;
            return 'death';

        }else if (labirint[location[0]][location[1]]== Icons.finish){
            labirint[location[0]][location[1]] = Icons.players;
            return 'finish';
        }
        else{
            labirint[location[0]][location[1]] = Icons.player;
            return 'continue';
        }
    }
}
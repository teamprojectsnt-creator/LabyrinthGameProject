import { Player } from "../Player/Player.js";
import { Icons } from "../data/labirint.js"


class RightMove {
    static rightMove(player){
        const location = player.getInfo.get('labirint').get('location');
        const labirint = player.getInfo.get('labirint').get('labirint');

        labirint[location[0]][location[1]] = Icons.road;

        ++location[1];

        if (labirint[location[0]][location[1]] ==  Icons.wall){
            labirint[location[0]][location[1]] = Icons.death;
            return 'death';
        }else if(labirint[location[0]][location[1]] == Icons.finish){
            labirint[location[0]][location[1]] = Icons.player;
            return 'finish';
        }
        else{
            labirint[location[0]][location[1]] = Icons.player;
            return 'continue'; 
        }


    }       
}





















        // console.log(labirint[location[0]][location[1]])////////////////////////////////////////

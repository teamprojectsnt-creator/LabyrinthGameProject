import PromptSync from "prompt-sync";
import { Player } from "../Player/Player.js";
import { labirint, Icons} from "../data/labirint.js"


class RightMove {
    static rightMove(player){
        const location = player.getInfo.get('labirint').get('location');
        const labirint = player.getInfo.get('labirint').get('labirint');

        labirint[location[0]][location[1]] = Icons.road;

        for(const row of player.getInfo.get("labirint").get("labirint")){
            console.log(row.join(""))
        }

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

        for(const row of player.getInfo.get("labirint").get("labirint")){
            console.log(row.join(""))
        }

        
    }       
}



const player = new Player("a", 1)

RightMove.rightMove(player);

















        // console.log(labirint[location[0]][location[1]])////////////////////////////////////////

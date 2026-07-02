// import { Player } from "../Player/Player.js";
import { Icons } from "../data/labirint.js"
import { timeStart } from "../time/time.js"

class RightMove {
    static rightMove(player){
        // console.log(player.getInfo.get('startTime'))
        if (!player.getInfo.get('startTime')){
            player.setStartTime = timeStart()
        }

        // console.log(player.getInfo.get('startTime'))

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

// const player = new Player("a", 1)



// RightMove.rightMove(player)
// RightMove.rightMove(player)

        // console.log(labirint[location[0]][location[1]])////////////////////////////////////////

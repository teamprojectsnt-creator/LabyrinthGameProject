import { Icons } from "../data/labirint.js";

const icons = new Icons();

export class BackMove {
    backMove(player) {

        const info = player.getInfo;

        if (info.get("startTime") === undefined) {
            player.setStartTime = Date.now();
        }

        const labirintInfo = info.get("labirint");
        const labirint = labirintInfo.get("labirint");
        const location = labirintInfo.get("location");

        let row = location[0];
        let col = location[1];

        const nextRow = row + 1;

        if (labirint[nextRow][col] === Icons.wall) {
            console.log("💀 Game Over");

            player.setEndTime = Date.now();

            return false;
        }
        if (labirint[nextRow][col] === Icons.finish) {

            labirint[row][col] = icons.road;
            labirint[nextRow][col] = icons.player;
            location[0] = nextRow;

            player.setEndTime = Date.now();


            return true;
        }

        labirint[row][col] = icons.road;
        labirint[nextRow][col] = icons.player;

        location[0] = nextRow;

        const steps = info.get("steps");
        steps.push("S");
        player.setSteps = steps;

        return true;
    }
}
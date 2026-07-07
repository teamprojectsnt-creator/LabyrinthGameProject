import { AppMenu } from "./info/menu.js"
import { timeStart } from "./time/time.js"
import { move } from "./move/move.js"
import { labirint } from "./data/labirint.js";
import { upgradDataPlayerHistory } from "./file/file.js";


AppMenu.showIntro();

async function nimadur(params) {    
    
    await AppMenu.signs();
    let gameing = true;
    while (gameing){ 

        let entery = AppMenu.gameMenu();

        if (entery === '1'){
            let game = true;
            AppMenu.currentPlayer.setLabirint = labirint;
            AppMenu.currentPlayer.setLocation = [12,11];

            if (game){
                console.clear()
    
                for(const row of AppMenu.currentPlayer.getInfo.get("labirint")){
                    console.log(row.join(""))
                }
    
                console.log('VAQT BOSHLANDI')
                AppMenu.currentPlayer.setStartTime = timeStart();
                console.log(AppMenu.moveInfo())
            }      
            while (game) {
                game = move()
                
                for(const row of AppMenu.currentPlayer.getInfo.get("labirint")){
                    console.log(row.join(""))
                }
                
                console.log(game ? AppMenu.moveInfo() : 'tu-gaadi!')
            }

            AppMenu.currentPlayer.addToHistory = [AppMenu.currentPlayer.getInfo.get('labirint'),
                                                AppMenu.currentPlayer.getInfo.get('timeToPath')]

            AppMenu.currentPlayer.setStartTime = undefined;
            AppMenu.currentPlayer.setTimeToPath = undefined;
            
            await upgradDataPlayerHistory()
            
        }else if (entery === '2'){
            AppMenu.signOut()
            gameing = false;
            nimadur();
        }else if (entery === '0'){
            console.log('Sizni kutamiz');
            process.exit()
        }
    }
}

nimadur();
// if (!AppMenu.currentPlayer){
//     game = false;
//     console.log('Sizni kutamiz')
// }



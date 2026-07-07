import promptSync from 'prompt-sync';
import { addPlayer, addData, getData, checkPlayer } from '../file/file.js';
import { Player } from '../Player/Player.js';
export const prompt = promptSync();

export class AppMenu {
    static currentPlayer = null;

    static showIntro() {
        console.clear();

        console.log(`
                LABIRINT O'YINIGA XUSH KELIBSIZ!

    Sizning vazifangiz — 🕵️ personajni labirint bo'ylab
    harakatlantirib, 🔲 marraga xavfsiz yetkazish.

    ⭐ Yo'lda uchragan barcha yulduzlarni yig'ishga harakat qiling.

    ⚠️ Agar 🔳 devorga kirib ketsangiz,
    💀 GAME OVER bo'ladi va o'yin yakunlanadi.

    🏆 Marraga yetib borsangiz, siz g'olib bo'lasiz!

    ══════════════════════════════════════════════════════════════
                        NAMUNAVIY XARITA
    ══════════════════════════════════════════════════════════════

    🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳
    🔳🕵️ ⬜⬜🔳⬜⭐⬜🔲🔳
    🔳⬜🔳⬜🔳⬜🔳⬜⬜🔳
    🔳⭐🔳⬜⬜⬜🔳⬜⭐🔳
    🔳⬜🔳🔳🔳⬜🔳⬜⬜🔳
    🔳⬜⬜⭐⬜⬜⬜🔳⬜🔳
    🔳🔳🔳🔳🔳🔳🔳🔳🔳🔳

    ══════════════════════════════════════════════════════════════
                        BOSHQARUV
    ══════════════════════════════════════════════════════════════

    W — Tepaga
    A — Chapga
    S — Pastga
    D — O'ngga        

    `);

    let enter1 = prompt("\nEnter... ");
    console.clear();
    
    while(enter1 !== "") {
        console.log("O'yinni boshlash uchun Enter ni bosing! ");
        enter1 = prompt("\nEnter... ");
        console.clear();
    }
    }

    static async singUp(){
        let name = prompt("Name: ");
        console.clear();
        AppMenu.currentPlayer = await addPlayer(name); 
        console.log(`sizning ID: ${AppMenu.currentPlayer.id}, uni unutmang`)
    }

    static async signIn(){
        let name = prompt("Name: ");
        let id = prompt('ID: ');
        console.clear();

        let player = await checkPlayer(name, id);
        while(!player){
            console.log('Bunday oyinchi topilmadi' )
            let name = prompt("Name: ");
            let id = prompt('ID: ');
            console.clear();
            player = await checkPlayer(name, id)
        }
        
        const newPlayer = new Player(player.name, player.id)
        
        newPlayer.setHistory = player.history;

        AppMenu.currentPlayer = newPlayer
    }

    static signOut(){
        console.log(`${AppMenu.currentPlayer.name} tizimdan chiqdi`);
        AppMenu.currentPlayer = null;
        prompt("\nDavom etish uchun Enter bosing..."); // ждём реакции юзера
        console.clear();
    }

    static async signs() {
    
        let signWhile = true;
        while(signWhile){
            let result = prompt(
                '1.Sign up\n2.Sign in\n>>> '
            )
            console.clear()
            
            if (result === '1'){
                signWhile = false;
                await AppMenu.singUp();
            }else if (result === '2'){
                console.log('AppMenu.signIn();')
                signWhile = false;
                await AppMenu.signIn();
            }else {
                console.log("1 yoki 2 kiriting")
            }
        
        }
    }

    static  gameMenu(){
        let menu = true;
        let entery;
        while (menu) {        
            console.log("1 - O`yinni boshlash");
            console.log("2 - sign out")
            console.log("0 - Dasturdan chiqish");
        
            entery = prompt(">>> ");
            console.clear()

            '120'.includes(entery) ? menu = false 
                                   : console.log('1, 2, yoki 0 kiriting')
        }

        return entery
    }

    static moveInfo () {
        return `══════════════════════════════════════════════════════════════
                           BOSHQARUV
    ══════════════════════════════════════════════════════════════
    
    W — Tepaga
    A — Chapga
    S — Pastga
    D — O'ngga
    
    `
    }
}
import { Player } from '../class.js'
import promptSync from 'prompt-sync';

export const prompt = promptSync();

export function showIntro() {
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
}

export function start () {
    showIntro();

    let enter1 = prompt("\nEnter... ");
    console.clear();
    
    while(enter1 !== "") {
        console.log("O'yinni boshlash uchun Enter ni bosing! ");
    }
    
    const name = prompt("Name: ");
    const newPlayer = new Player(name, 1);
    console.clear();
    
    let isRun = true; 

    while(isRun){
            console.log("1 - O`yinni boshlash");
            console.log("0 - Dasturdan chiqish");
        
            let entry = prompt(">>> ");
            switch(entry){
                case '1':   console.log(Player.id, Player.name);
                case '0':   console.log("O'yin tugadi");
                default: console.log("\nXato tanlov!, faqat berilgan variantlardan birini tanlang!");
            };
        };
}

start()
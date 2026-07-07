import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Player } from '../Player/Player.js';
import { AppMenu } from '../info/menu.js';

const filePath = join(process.cwd(), '/players.json');

export async function getData(){
    try {
        const data = await readFile(filePath, 'utf8')
        // console.log(data)
        return data ? JSON.parse(data) : [];
    }catch(err){
        console.log('Error on getData', err)
    }
}

export async function addData(data){
    try{
        await writeFile(filePath, JSON.stringify(data, null, 2))
    }catch(err){
        console.log('Error on addData', err)
    }
}

export async function addPlayer(name){
    const data = await getData();
    let newId;

    try{
        newId = data[data.length - 1].id + 1; 
    }catch{
        newId = 1;
    }

    const newPlayer = new Player(name, newId)

    data.push(privetsToJson(newPlayer))

    await addData(data);
    return newPlayer;
}

export async function checkPlayer(name, id){
    for (let player of await getData()){
        if (player.name == name && player.id == id){            
            return player
        }
    }
    return false
}

function privetsToJson(newPlayer){
    const data = {};

    for (let [key, value] of newPlayer.getInfo){
        data[key] = value;
    };
    return data;
}

export async function upgradDataPlayerHistory() {
    const data = {};
    
    for (let [key, value] of AppMenu.currentPlayer.getInfo){
        data[key] = value;
    }

    const datas = await getData();

    
    let index = 0;
    for (let player of datas){
        if (player.id == data.id)
            break;
        index++;
    }

    datas[index] = data;
    await writeFile(filePath, JSON.stringify(datas, null, 2));
}
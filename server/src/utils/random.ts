export const random = (num:number) =>{
    let val = '';
    let charPick = "qwertyuiopasdfghjklzxcvbmn123456789"

    for(let i = 0;i<num;i++){
        val += charPick[Math.floor(Math.random()* charPick.length)]
    }

    return val;
}
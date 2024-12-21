import {atom} from "recoil"

const token = localStorage.getItem("token")?localStorage.getItem("token"):''

export const tokenState = atom({
    key :"tokenState",
    default:token
})
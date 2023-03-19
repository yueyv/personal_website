import { Names } from "./store-name";
import { defineStore } from "pinia"
//计算时间差
function computedMinute(time:string){
    let arrTime = time.split(":").map(Number)
    return (arrTime[0] * 60 * 60 + arrTime[1] * 60 + arrTime[2])
}
function computedTime(time1: string, time2: string) {
    let first_minutes=computedMinute(time1)
    let least_minutes=computedMinute(time2)
    let inner_minutes=least_minutes-first_minutes
    let hour: number = Math.floor((inner_minutes) / 3600)
    let minutes: number = Math.floor((inner_minutes) % 3600 / 60)
    let seconds: number = (inner_minutes) % 3600 % 60
    return (hour + ":" + minutes + ":" + seconds)
}
function plusInnerTime(time1:string,time2:string){
    let first_minutes=computedMinute(time1)
    let least_minutes=computedMinute(time2)
    let inner_minutes=least_minutes+first_minutes
    let hour: number = Math.floor((inner_minutes) / 3600)
    let minutes: number = Math.floor((inner_minutes) % 3600 / 60)
    let seconds: number = (inner_minutes) % 3600 % 60
    return (hour + ":" + minutes + ":" + seconds)
}
export const useTimeStore = defineStore(Names.TIME, {
    state: () => {
        return {
            firstTime: "00:00:00",
            leastTime: "00:00:00",
            innerTime: "00:00:00",
        }
    },
    getters: {

    },
    actions: {
        setFirstTime() {
            const date = new Date();
            this.firstTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        },
        setInnerTime() {
            this.innerTime = plusInnerTime(this.innerTime,"00:00:01")
        }
    }
})
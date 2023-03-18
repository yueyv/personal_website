import { Names } from "./store-name";
import {defineStore} from "pinia"

export const useTimeStore=defineStore(Names.TIME,{
    state:()=>{
        return {
            firstTime:"00:00:00",
            leastTime:"00:00:00",
            innerTime:"00:00:00",
        }
    },
    getters:{

    },
    actions:{
        setFirstTime(){
            if(this.firstTime=="00:00:00"){
                const date=new Date();
                this.firstTime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
            }
            else{
                console.log("can't reset")
            }
        },
        setLeastTime(time:string){
           this.leastTime=time
        },
        setInnerTime(){
            let arrFirst=this.firstTime.split(":").map(Number)
            let arrLeast=this.leastTime.split(":").map(Number)
            let hour:number=Math.floor((arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])/3600)
            let minutes:number=Math.floor((arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])%3600/60)
            let seconds:number=(arrFirst[0]*60*60+arrFirst[1]*60+arrFirst[2]-arrLeast[0]*60*60+arrLeast[1]*60+arrLeast[2])%3600%60
            this.innerTime=(hour+":"+minutes+":"+seconds)
        }
    }
})
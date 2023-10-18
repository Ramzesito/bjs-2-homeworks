'use strict';

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, todoFunc) {
        if ((arguments.length < 2) || (typeof arguments[0] !== "string") || (typeof arguments[1] !== "function")) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        //console.log(arguments);
        if (this.alarmCollection.length > 0) {
            if (this.alarmCollection.find(alarm => alarm.time === time)) {
                console.warn('Уже присутствует звонок на это же время');
            } 
        }
        this.alarmCollection.push({
            callback: todoFunc,
            time: time,
            canCall: true
        });
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime() {
        let date = new Date();
        let HH = date.getHours();
        let MM = date.getMinutes();
        return (HH < 10 ? '0' + HH : HH.toString()) + 
                ":" + 
                (MM < 10 ? '0' + MM : MM.toString()) ;
    }
    start() {
        if (this.intervalId !== null) { return; } 
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.canCall && alarm.time == this.getCurrentFormattedTime()) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000)
    }
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function alarmWakeUp() {
    console.log("Пора вставать!");
}
function alarmForLunch() {
    console.log("Пора обедать!");
}
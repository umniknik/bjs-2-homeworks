class AlarmClock {
    constructor(intervalId = null) {
        this.alarmCollection = [];
        this.intervalId = intervalId;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        this.alarmCollection.forEach(function (item) {
            if (item.time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        })

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    }

    getCurrentFormattedTime() {
        const CurrenTime = new Date();
        return (`${CurrenTime.getHours()}:${CurrenTime.getMinutes()}`);
    }

    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item) => {
                    if (item.time === this.getCurrentFormattedTime()) {
                        item.canCall = false;
                        item.callback();
                    }
                })
            }, 1000)
        } else { console.log('Завершаем программу, т.к. уже есть интервал') }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => {
            item.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
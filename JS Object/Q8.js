

class Clock {
    constructor() {
        this.updateTime();  // Initialize the clock with current time
        setInterval(() => this.updateTime(), 1000);  // Update time every second
    }

    updateTime() {
        const now = new Date();
        const hours = this.formatTime(now.getHours());
        const minutes = this.formatTime(now.getMinutes());
        const seconds = this.formatTime(now.getSeconds());

        const timeString = `${hours}:${minutes}:${seconds}`;
        console.log(timeString);  // Replace with your preferred way of displaying the time
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;  // Add leading zero if needed
    }
}

// Create an instance of Clock to start the clock
const clock = new Clock();

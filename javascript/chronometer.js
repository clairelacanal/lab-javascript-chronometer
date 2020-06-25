class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    setInterval(() => {
      return this.currentTime +=1;
    }, 1000);
  }
    

  getMinutes() {
    let nbrMinute = this.currentTime / 60;
    return Math.floor(nbrMinute);
  }
  
  getSeconds() {
    return this.currentTime%60;
  }


  twoDigitsNumber(deuxDigits) {
      if(deuxDigits < 10) {
        return '0'+deuxDigits;
      } else {
        return deuxDigits;
      }

  }


  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  
  splitClick(minute, seconde) {
    let min = this.getMinutes(minute);
    let sec = this.getSeconds(seconde);
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}

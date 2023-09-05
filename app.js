const tamagotchi = {
  name: "Toma",
  meal: 1,
  energy: 4,
  mood: 3,
  setName: function (newName) {
    this.name = newName;
  },

  eat: function () {
    if (this.meal < 5) {
      this.meal++;
    }
    this.mood--;
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
    }
    this.meal--;
  },
  play: function () {
    if (this.mood < 5) {
      this.mood++;
    }
    this.energy--;
  },
  getStatus: function () {
    if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
      console.log(`${this.name} умер :(`);
      return false;
    }
    const mealStatus = this.meal < 3 ? "Покорми меня" : "Я сыт";
    const energyStatus = this.energy < 3 ? "Я хочу спать" : "Я не хочу спать";
    const moodStatus = this.mood < 3 ? "Мне скучно" : "Мне весело";
    console.log(
      `Еда: ${mealStatus} (${this.meal}); Энергия: ${energyStatus}(${this.energy}); Натсроение: ${moodStatus} (${this.mood});`
    );
  },
};




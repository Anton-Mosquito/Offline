class Tamagochi {
  constructor(name) {
    this._name = name;
    this._mood = 100;
    this._satiety = 100;
    this._health = 100;
    this._cheerfulness = "";
    this._age = 0;
    this.init();
  }

  init() {
    const timer = setInterval(() => {
      if (this._health === 0) clearInterval(timer);
      this.#lifeListener();
      this.getName();
    }, 1000);
  }

  getName() {
    console.log(
      `Hi my name is ${this._name}. You can fit me, kill me, play with me! Also you can get my mood`
    );
    console.log("Level of hunger " + this._satiety);
    console.log("Health of your's pet " + this._health);
    console.log("Pets age " + this._age);
    console.log("Mood " + this._mood);
    console.log("Cheerfulness " + this._cheerfulness);
  }

  #lifeListener() {
    const getCheerfulness = () => {
      if (this._mood >= 90) {
        this._cheerfulness = "excellent";
      } else if (this._mood <= 89 && this._mood >= 60) {
        this._cheerfulness = "good";
      } else if (this._mood <= 59 && this._mood >= 30) {
        this._cheerfulness = "bad";
      } else {
        this._cheerfulness = "worst";
      }
    };

    if (this._age < 70 && this._health > 0 && this._satiety > 0) {
      getCheerfulness();

      if (this._mood < 20 || this._cheerfulness === "worst") {
        this._health -= 2;
        this._mood -= 4;
        this._satiety -= 4;
      } else {
        this._health--;
        this._mood -= 2;
        this._satiety -= 2;
      }
      this.#old();
    } else {
      this._health = 0;
      console.log("Your's pet die!");
      return;
    }
  }

  #old() {
    this._age += 1;
  }

  fit() {
    if (this._satiety > 100) {
      this._satiety = 100;
      console.log("Yours pet has already fit!");
      return;
    } else {
      this._satiety += 20;
    }

    if (this._health > 100) {
      this._health = 100;
    } else {
      this._health += 5;
    }
  }

  kill() {
    this._health = 0;
  }

  mood() {
    console.log(this._cheerfulness);
  }

  playWithPet() {
    if (this._mood > 100) {
      this._mood = 100;
      console.log("Yours pet has exellent mood!");
      return;
    } else {
      this._mood += 30;
    }
  }
}

const bob = new Tamagochi("Bob");
// bob.fit();
// bob.kill();
// bob.playWithPet();
// bob.mood();

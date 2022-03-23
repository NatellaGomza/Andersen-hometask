class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(nameOfCarBrand) {
    if (typeof nameOfCarBrand === 'string' && nameOfCarBrand.length >= 1 && nameOfCarBrand.length <= 50) {
      this.#brand = nameOfCarBrand;
    }
  }

  get brand() {
    return this.#brand;
  }

  set model(nameOfCarModel) {
    if (typeof nameOfCarModel === 'string' && nameOfCarModel.length >= 1 && nameOfCarModel.length <= 50) {
      this.#model = nameOfCarModel;
    }
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(year) {
    const currentYear = new Date().getFullYear();
    const validYear = typeof year === 'number' && year >= 1900 && year <= currentYear;

    if (validYear) {
      this.#yearOfManufacturing = year;
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(speed) {
    if (typeof speed === 'number' && speed >= 100 && speed <= 300) {
      this.#maxSpeed = speed;
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(fuelVolume) {
    if (typeof fuelVolume === 'number' && fuelVolume >= 5 && fuelVolume <= 20) {
      this.#maxFuelVolume = fuelVolume;
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(fuelConsumption) {
    if (typeof fuelConsumption === 'number') {
      this.#fuelConsumption = fuelConsumption;
    }
  }

  get fuelConsumption() {
    return this.fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена')
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина еще не заведена')
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuel) {
    const isValidAmmountOfFuel = typeof fuel === 'number' && fuel > 0;

    if (!isValidAmmountOfFuel) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (fuel > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }

    this.#currentFuelVolume = fuel;
  }

  drive(speed, hours) {
    const isValidSpeed = typeof speed === 'number' && speed > 0;
    const isValidAmmountOfHours = typeof hours === 'number' && hours > 0;

    if (!isValidSpeed) {
      throw new Error('Неверная скорость');
    }

    if (!isValidAmmountOfHours) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    const distance = speed * hours;
    const minFuelVolume = distance * this.#fuelConsumption / 100;

    if (minFuelVolume > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= minFuelVolume;
    this.#mileage += distance;
  }
}
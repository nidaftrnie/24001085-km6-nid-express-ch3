const cars = require("./data/cars.json");

exports.getCars = (
  manufacture,
  model,
  capacity,
  transmission,
  available,
  type
) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => {
    let filteredStatus = true;
    if (manufacture) {
      filteredStatus =
        filteredStatus &&
        car.manufacture.toLowerCase().includes(manufacture?.toLowerCase());
    }
    if (model) {
      filteredStatus =
        filteredStatus &&
        car.model.toLowerCase().includes(model?.toLowerCase());
    }
    if (capacity) {
      filteredStatus = filteredStatus && car.capacity === parseInt(capacity);
    }
    if (transmission) {
      filteredStatus =
        filteredStatus &&
        car.transmission.toLowerCase().includes(transmission?.toLowerCase());
    }
    if (available !== undefined) {
      const isAvailable = available.toLowerCase() === "true"; //
      filteredStatus = filteredStatus && car.available === isAvailable;
    }
    if (type) {
      filteredStatus =
        filteredStatus && car.type.toLowerCase().includes(type?.toLowerCase());
    }
    return filteredStatus;
  });
  return data;
};

exports.getCar = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.addCar = (payload) => {
  const { v4: uuidv4 } = require("uuid");
  const id = uuidv4();
  /* Process insert data */
  //generate id for lastCar
  payload = {
    id,
    ...payload,
  };

  cars.push(payload);

  return payload;
};

exports.editCar = (id, payload) => {
  updatedCarIndex = 0;

  // Update the data by id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = payload;
      updatedCarIndex = index;
    }
  });

  return cars[updatedCarIndex];
};

exports.deleteCar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  deleteCar = cars.splice(index, 1);

  return cars;
};

const carRepo = require("../../repository/car");

exports.getCars = (
  manufacture,
  model,
  capacity,
  transmission,
  available,
  type
) => {
  const data = carRepo.getCars(
    manufacture,
    model,
    capacity,
    transmission,
    available,
    type
  );
  return data;
};

exports.getCar = (id) => {
  const data = carRepo.getCar(id);
  return data;
};

exports.addCar = (payload) => {
  const data = carRepo.addCar(payload);
  return data;
};

exports.editCar = (id, payload) => {
  const data = carRepo.editCar(id, payload);
  return data;
}

exports.deleteCar = (id) => {
  const data = carRepo.deleteCar(id);
  return data;
}

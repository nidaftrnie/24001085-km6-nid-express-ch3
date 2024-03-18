const carUsecase = require("../usecase/car");

exports.getCars = (req, res) => {
  const { manufacture, model, capacity, transmission, available, type } =
    req.query;

  const data = carUsecase.getCars(
    manufacture,
    model,
    capacity,
    transmission,
    available,
    type
  );

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.getCar = (req, res, next) => {
  const { id } = req.params;

  const data = carUsecase.getCar(id);
  if (!data) {
    return next({
      statusCode: 404,
      message: `Car with id ${id} is not found `,
    });
  }

  const response = {
    data,
    message: "Success!",
  };

  res.status(200).json(response);
};

exports.addCar = (req, res, next) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;

  if (!plate || plate == "") {
    return next({
      statusCode: 404,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "RentPerDay must be filled",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "Specs At must be filled",
    });
  }

  const data = carUsecase.addCar(req.body);

  const response = {
    data,
    message: "Insert Data Success!",
  };

  res.status(200).json(response);
};

exports.editCar = (req, res, next) => {
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;
  if (!plate || plate == "") {
    return next({
      statusCode: 404,
      message: "Plate must be filled",
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: "Manufacture must be filled",
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: "Model must be filled",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "RentPerDay must be filled",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "Capacity must be filled",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "Description must be filled",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "Available At must be filled",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "Transmission must be filled",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "Available must be filled",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "Type must be filled",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "Year must be filled",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "Options must be filled",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "Specs At must be filled",
    });
  }

  const id = req?.params?.id;
  const updatedCar = {
    id: id,
    ...req.body,
  };
  const data = carUsecase.editCar(id, updatedCar);

  const response = {
    data,
    message: "Update Success!",
  };

  res.status(200).json(response);
};

exports.deleteCar = (req, res, next) => {
  const id = req?.params?.id;
  const data = carUsecase.deleteCar(id);
  
  if (!id) {
    return next({
      statusCode: 404,
      message: "Car with id ${id} is not found!",
    });
  }

  const response = {
    data,
    message: "Delete Success!",
  };

  res.status(200).json(response);
};

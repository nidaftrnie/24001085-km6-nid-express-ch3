const getCarsData = async (capacity, availableAt) => {
  const res = await fetch(
    `/cars?capacity=${capacity}&availableAt=${availableAt}`
  );
  const { data, message } = await res.json();
  console.log(data);
  return data;
};

export default { getCarsData };

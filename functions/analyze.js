const analyze = (array) => {
  return {
    average: array.reduce((acc, cv) => acc + cv, 0) / array.length,
    length: array.length,
    min: Math.min(...array),
    max: Math.max(...array),
  };
};

module.exports = analyze;

function insertionSort(array) {
  var sorted = [];
  for (var i = 0; i < array.length; i++) {
    var toInsert = array[i];
    sorted = inserter(sorted, toInsert);
  };

  return sorted;
};

function inserter(sorted, toInsert) {
  var less = sorted.filter(function (element) {
    return element <= toInsert;
  });

  var greater = sorted.filter(function(element) {
    return element > toInsert;
  });

  return sorted = less.concat(toInsert, greater);
};

module.exports = insertionSort;

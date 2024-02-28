function mySort(arr) {
  let arrindex = arr.length - 1;

  while (arrindex >= 0) {
    let biggest = arr[0];
    let biggestindex = 0;
    for (i = 0; i <= arrindex; i++) {
      if (arr[i] > biggest) {
        biggest = arr[i];
        biggestindex = i;
      }
    }
    let temp = arr[biggestindex];
    arr[biggestindex] = arr[arrindex];
    arr[arrindex] = temp;
    arrindex--;
  }
  return console.log(arr);
}

mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17];

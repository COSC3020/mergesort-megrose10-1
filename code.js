function mergesort(array) {
  let hi = array.length;
  let mid = 0;
  let alen = array.length;

  for(let counter = 1; counter < alen; counter *=2) {
    for(i = 0; i < alen; i += 2 * counter) {
      mid = i + counter;
      hi = 2 * counter;
      //array = compare(array, i, mid, hi);
      /////////////////
      for(let k = i; k <= mid; k++) {
        for(let j = hi; j >= mid; j--) {
        //console.log(i + "    " + j);
          if(array[k] > array[j]) {
            //console.log("ai1 = " + a[i]);
            let tmp = array[k];
            array[k] = array[j];
            //console.log("aj1 = " + a[j]);
            array[j] = tmp;
            //console.log("aj2 = " + a[j]);
            //console.log("ai2 = " + a[i]);
          }
        }
        //console.log(a);
      }
      //console.log(i);
      //console.log(mid);
      //console.log(hi);
      //console.log(array);
    }
  }
  
  return array;
}

//let array = [1, 3, 6, 2, 5, 4];
//compare(array, 0, 3, 5)
//console.log(mergesort(array));

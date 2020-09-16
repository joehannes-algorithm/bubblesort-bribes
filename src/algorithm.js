const algorithm = {
  args: {
    baseNumber: 10,
  },
  exec: {
    bubbleSort: function(inputArr, check) {
      let len = inputArr.length;

      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len - 1; j++) {
            if (check(inputArr[j], inputArr[j + 1]) === 1) {
                  let tmp = inputArr[j];
                  inputArr[j] = inputArr[j + 1];
                  inputArr[j + 1] = tmp;
              }
          }
      }
      return inputArr;
    },
    calc: function(log) {
      let queue = Array(algorithm.args.baseNumber).fill(0);
      let initialBribes = Math.round(algorithm.args.baseNumber / 2);
      let bribes = [...queue];

      queue = queue.map((x, i) => (i + 1)).filter(Boolean);
      for (let i = Math.round(Math.random() * (algorithm.args.baseNumber - 1) + 1), j = 0; j < initialBribes; i = Math.round(Math.random() * (algorithm.args.baseNumber - 1) + 1)) {
        let tmp = queue[i - 1];
        queue[i - 1] = queue[i];
        queue[i] = tmp;
        j++;
      }
      log(queue);
      algorithm.exec.bubbleSort(queue, (a, b) => {
        if (a > b) {
          log('greater: ' + a + ', ' + b);
          bribes[a - 1]++;
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });

      if (bribes.filter(b => b > 2).length) {
        log('Too chaotic');
      }
      else {
        log(bribes.reduce((prev, cur) => prev + cur, 0));
      }

      return bribes;
    },
  },
}
export default algorithm;

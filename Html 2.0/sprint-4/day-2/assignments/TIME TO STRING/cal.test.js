

// import sum from "./sum.js";


function cal(milSecs) {
 
  let secs = Math.round(milSecs / 1000)
  let min = Math.round(secs / 60);
  let hour = Math.round(min / 60);
  
  if (secs < 60) {
    // console.log(`${secs} seconds`);
    return `${secs} seconds`

  }
  else if (secs >= 60 && secs < 3600) {
 
    if ((min * 60 * 1000) - secs < 1000) {
      console.log(`${min} minute`);
      return `${min} minute`
      
    } else {
      
      console.log(`${min} minute ${min * 60 * 1000 - secs} seconds`);
      return `${min} minute ${secs - min * 60} seconds`
    }
    
    
  } else if (secs >= 3600 && secs <= (3600 * 24)) {
    
    console.log(`${hour} Hour ${hour * 60 - min} minute ${min * 60 * 1000 - secs} seconds`);
    return `${hour} Hour ${min - hour * 60} minute ${secs - min * 60} seconds`
  }


}

test('clock', () => {
  expect(cal(5200)).toBe("5 seconds");
});

test('clock', () => {
  expect(cal(52000)).toBe("52 seconds");
});


test('clock', () => {
  expect(cal(62000)).toBe("1 minute 2 seconds");
});


test('clock', () => {
  expect(cal(3600000)).toBe("1 Hour 0 minute 0 seconds");
});

test('clock', () => {
  expect(cal(18000000)).toBe("5 Hour 0 minute 0 seconds");
});
// function sum(milSecs) {
 
//   let secs = Math.round(milSecs / 1000)
//   let min = Math.round(secs / 60);
//   let hour = Math.round(min / 60);
  
//   if (secs<60) {
//     // console.log(`${secs} seconds`);
//     return `${secs} seconds`

//   }
//   else if (secs >= 60 && secs < 3600) {
 
//     if ((min * 60 * 1000) - secs < 1000) {
//       console.log(`${min} minute`);
//       return `${min} minute`
      
//     } else {
      
//       console.log(`${min} minute ${min*60*1000 - secs} seconds`);
//       return `${min} minute ${secs - min*60} seconds`
//     }
    
    
//   } else if (secs >= 3600 && secs <=(3600 * 24)) {
    
//     console.log(`${hour} Hour ${hour*60 - min} minute ${min*60*1000 - secs} seconds`);
//     return `${hour} Hour ${ min - hour*60} minute ${secs - min*60} seconds`
//   }


// }
// module.exports = sum;

// export default sum;
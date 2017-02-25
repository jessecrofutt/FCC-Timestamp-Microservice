//ten digits should suffice for unix time stamp
let moment = require('moment');
module.exports = function(timeInput) {

  let unixDate;
  let naturalDate;

  // let newTime = moment(timeInput);
  let newTime = timeInput;
      console.log('newTime: ', newTime);
  let numTime = parseInt(timeInput);
      console.log('numTime: ', numTime);

  if (moment(newTime).isValid()) {
      naturalDate = moment(newTime).format("MMMM Do YYYY")
      let newDate = moment(newTime).unix();
      unixDate = newDate;
          // unixDate = new Date('Mon, 25 Dec 1995 13:30:00 GMT').getUnixTime();
          console.log("naturalFires");
          console.log(newTime);
  } else if (typeof(numTime) == 'number') {
        if (!isNaN(numTime)) {
            unixDate = numTime;
            naturalDate = moment(unixDate * 1000).format("MMMM Do YYYY");
            console.log("unixfires");
            console.log(numTime);
        }
  } else if ((unixDate == 'undefined') || (naturalDate == 'undefined')) {
        naturalDate = "null";
        unixDate = "null";
        console.log("nullard");
  }

  if ((unixDate === undefined) || (naturalDate === undefined)) {
        naturalDate = "null";
        unixDate = "null";
        console.log("nullard");
  }

  let timeObject = {
    'natural time': `${naturalDate}`,
    'unix time': `${unixDate}`
  };

  return timeObject;
};

const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const fetcher = (url, callback) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    } else {
      callback(body);
    }
  });
};
fetcher(args[0], (body) => {
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    } else console.log(`Donwloaded and saved ${fs.statSync(args[1]).size} bytes in ${args[1]} bytes`);
  });
});


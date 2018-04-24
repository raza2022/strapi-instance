var ncp = require('ncp').ncp;

ncp.limit = 16;

ncp('angular/dist', 'public', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('done!');

});

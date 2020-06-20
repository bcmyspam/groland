var forever = require('forever-monitor');
  var child = new (forever.Monitor)('polojs.js', {
    max: 15,
    silent: false,
    args: []
  });
  child.on('exit', function () {
    console.log('polojs.js has exited after 15 restarts');
  });
  child.start();

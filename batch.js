var forever = require('forever-monitor');
  var child = new (forever.Monitor)('index.js', {
    max: 15,
    silent: false,
    args: []
  });
  child.on('exit', function () {
    console.log('index.js has exited after 15 restarts');
  });
  child.start();

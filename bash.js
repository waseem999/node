

// Output a prompt
// for (var keys in process){
//     console.log("key: " + keys + " value: " + process[keys]);
// };

var commands = require('./commands');

process.stdout.write('1prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if (cmd === "pwd"){
    commands.pwd();
      process.stdout.write('\n2prompt > ');
  }
  else if (cmd === "date"){
     commands.date();
    process.stdout.write('\n2prompt > ');
  }
  else if (cmd === "ls"){
    commands.ls();
  }
  else {
    process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\n2prompt > ');
  }

});



 
// Output a prompt
// for (var keys in process){
//     console.log("key: " + keys + " value: " + process[keys]);
// };

var commands = require('./commands');

process.stdout.write('1prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); 
  var cmdArr = cmd.split(' ');

  switch (cmdArr[0]) {

    case "pwd":
      commands.pwd();
      process.stdout.write('\n2prompt > ');
      break;
  
    case "echo":
      process.stdout.write(cmdArr.slice(1).join(' '));
      process.stdout.write('\n2prompt > ');
      break;
 
    case "date":
 
      commands.date();
      process.stdout.write('\n2prompt > ');
      break;

    case "ls":
      commands.ls(cmdArr[1]);
      break;

    case "cat":
      commands.cat(cmdArr[1]);
      break;

    case "head":
      commands.head(cmdArr[1]);
      break;

    case "tail":
      commands.tail(cmdArr[1]);
      break;      

    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\n2prompt > ');
  }
});


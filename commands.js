var fs = require('fs');
 
module.exports = {
    pwd: function(){
        process.stdout.write(process.execPath)
    },
    date: function(input){
        process.stdout.write(Date());
    },

    ls: function(input){
        fs.readdir('.', function(err, files) { /// please come back
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("3prompt > ");
        });
    },

    cat: function(input){
        console.log(input);
        console.log(input);fs.readFile(input, (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    },

    head: function(input){

        fs.readFile(input, (err, data) => {

            if (err) throw err;
            

            console.log(data);
        });
    },

    tail: function(input){
        fs.readFile(input, (err, data) => {
            if (err) throw err;
            

            console.log(data);
        });
    }


}

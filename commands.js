var fs = require('fs');

module.exports = {
    pwd: function(){
        process.stdout.write(process.execPath)
    },
    date: function(){
        process.stdout.write(Date());
    },

    ls: function(){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("3prompt > ");
        });
    }
}

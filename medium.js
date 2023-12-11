const fs = require('fs');

fs.writeFileSync('planet.txt', "Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune.")


fs.readFile('planet.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});
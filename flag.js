const fs = require('fs');
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading the file:', err);
        return;
    }
    console.log('Flag:', data);
});
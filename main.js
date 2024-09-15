const fs = require('fs');
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading flag:', err);
    } else {
        console.log('Flag:', data);
    }
});
const fs = require('fs');

fs.readFile('db.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err);

    let floorNum = 0;
    for(let i  = 0; i < data.length; i++) {
        if(data[i] == '(') floorNum++;
        else floorNum--;
    }

    console.log('floor', floorNum);
})
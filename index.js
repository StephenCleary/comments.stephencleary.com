'use strict';

const fs = require('fs');

if (!fs.existsSync('dist'))
    fs.mkdirSync('dist');
fs.copyFileSync('CNAME', 'dist/CNAME');

for (let post_id of fs.readdirSync('raw')) {
    let combined = [];
    for (let comment of fs.readdirSync(`raw/${post_id}`)) {
        combined.push(JSON.parse(fs.readFileSync(`raw/${post_id}/${comment}`, 'utf8')));
    }
    fs.writeFileSync(`dist/${post_id}.json`, JSON.stringify(combined));
}

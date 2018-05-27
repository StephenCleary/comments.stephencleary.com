'use strict';

const fs = require('fs');

for (let post_id of fs.readdirSync('raw')) {
    let combined = [];
    for (let comment of fs.readdirSync(`raw/${post_id}`)) {
        combined.push(JSON.parse(fs.readFileSync(`raw/${post_id}/${comment}`, 'utf8')));
    }
    fs.writeFileSync(`docs/${post_id}.json`, JSON.stringify(combined));
}

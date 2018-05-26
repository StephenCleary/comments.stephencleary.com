const fs = require('fs');

for (let post_id in fs.readdirSync('raw')) {
    let combined = [];
    for (let comment in fs.readdirSync(`raw/${post_id}`)) {
        combined.push(JSON.parse(fs.readFileSync('file', 'utf8')));
    }
    fs.writeFileSync(`docs/${post_id}.json`, JSON.stringify(combined));
}

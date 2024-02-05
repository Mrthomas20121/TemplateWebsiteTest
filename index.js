const pug = require('pug');
const fs = require('fs');

let html = pug.renderFile('./page/index.pug', {
    pretty: true
});

console.log(html);

/**
 * Render a pug file
 * @param {string} fileName 
 * @param {pug.Options} properties 
 */
function render(fileName, properties={}) {
    properties['pretty'] = true;

    // output html file
    let outputFile = fileName.replace('page', 'output').replace('pug', 'html');

    let html = pug.renderFile(fileName, properties);

    fs.writeFileSync(outputFile, html, 'utf8');
}
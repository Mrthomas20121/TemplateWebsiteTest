const pug = require('pug');
const fs = require('fs');

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

render('./page/index.pug', {
    page_title: 'Minecraft Docs test',
    site_title: 'Minecrft test Website',
    pretty: true
});
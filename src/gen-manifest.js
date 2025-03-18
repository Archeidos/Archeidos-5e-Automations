const fs = require('fs');
const path = require('path');

const rootManifestPath = path.resolve(__dirname, '../module-template.json');

const manifestContent = fs.readFileSync(rootManifestPath, 'utf8');

const outputPath = path.resolve(__dirname, '../dist/module-template.json');

fs.writeFileSync(outputPath, manifestContent);
console.log('module-template.json generated in dist/');

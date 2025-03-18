const fs = require('fs');
const path = require('path');

const rootManifestPath = path.resolve(__dirname, '../module.json');

const manifestContent = fs.readFileSync(rootManifestPath, 'utf8');

const outputPath = path.resolve(__dirname, '../dist/module.json');

fs.writeFileSync(outputPath, manifestContent);
console.log('module.json generated in dist/');

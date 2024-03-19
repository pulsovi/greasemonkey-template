#!/usr/bin/env node
import fs from 'node:fs';
const script = (await fs.promises.readdir('.')).find(item => item.endsWith('.user.js'));
const content = await fs.promises.readFile(script, 'utf8');
const lines = content.split('\n');
const meta = lines.slice(0, lines.indexOf('// ==/UserScript==') + 1).join('\n');
const metaFile = script.replace(/.user.js$/u, '.meta.js');
await fs.promises.writeFile(metaFile, meta, 'utf8');

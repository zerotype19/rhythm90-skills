#!/usr/bin/env node
// Rebuild discovery metadata from the maintained skill files. Never overwrite instructions.
const fs=require('node:fs');const path=require('node:path');const root=path.join(__dirname,'skills');
const old=JSON.parse(fs.readFileSync(path.join(root,'catalog.json'),'utf8'));
const catalog=fs.readdirSync(root).filter(n=>n.startsWith('rhythm90-')).map(name=>{const text=fs.readFileSync(path.join(root,name,'SKILL.md'),'utf8');const descriptionLine=text.match(/^description: (.+)$/m)?.[1];if(!descriptionLine)throw Error(`Missing description: ${name}`);const description=descriptionLine.startsWith('"')?JSON.parse(descriptionLine):descriptionLine;const previous=old.find(s=>s.name===name);return {name,title:previous?.title||name,description,core:previous?.core||false};});
fs.writeFileSync(path.join(root,'catalog.json'),JSON.stringify(catalog,null,2)+'\n');console.log(`Indexed ${catalog.length} maintained skills. Instructions unchanged.`);

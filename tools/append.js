#!/usr/bin/env node
// Appends questions from a batch JSON file to questions.js
// Batch format: array of {id?, title, domain, topics, prompt, image?, options:[{letter,text}],
//   correct: ["B"], explanation, rationales:{letter:{type,text}}, references:{primary:{title,url},secondary?:{title,url}}}
const fs = require('fs');
const path = require('path');

const batchFile = process.argv[2];
if (!batchFile) { console.error('usage: node tools/append.js <batch.json>'); process.exit(1); }
const batch = JSON.parse(fs.readFileSync(batchFile, 'utf8'));

const qsPath = path.join(__dirname, '..', 'questions.js');
let src = fs.readFileSync(qsPath, 'utf8').trimEnd();
if (!src.endsWith(']')) { console.error('questions.js does not end with ]'); process.exit(1); }
src = src.slice(0, -1).trimEnd();

let nextNum = 0;
{
  global.window = {};
  eval(fs.readFileSync(qsPath, 'utf8'));
  nextNum = Math.max(...window.MCPA_QUESTIONS.map(q => q.number)) + 1;
}

const blocks = batch.map((q, i) => {
  const num = q.number || nextNum + i;
  const obj = {
    id: q.id || `q-${String(num).padStart(3, '0')}`,
    number: num,
    title: q.title,
    domain: q.domain,
    topics: q.topics,
    prompt: q.prompt
  };
  if (q.image) obj.image = q.image;
  obj.options = q.options;
  obj.correctAnswers = q.correct;
  obj.explanation = q.explanation;
  obj.rationales = q.rationales;
  obj.references = q.references;
  return JSON.stringify(obj, null, 4).replace(/\n/g, '\n  ');
});

fs.writeFileSync(qsPath, src + (src.endsWith(',') ? '\n' : ',\n') + blocks.join(',\n') + '\n]\n');
console.log('appended', batch.length, 'questions; next number started at', nextNum);
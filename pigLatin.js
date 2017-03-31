process.stdin.setEncoding('utf8');

console.log('Pig Latin Translator by Kevin Jang');
console.log('Enter a word/sentence:');

process.stdin.on('data', function(text) {});

function convertToPigLatin(sentence) {
  const words = sentence.split(' ');
  const ay = 'ay';
  return words.map((word) => {
    const lowercase = word.toLowerCase();
    const firstLetter = lowercase[0];
    return lowercase.slice(1) + firstLetter + ay;
  }).join(' ');
}

function exit() {
  process.exit();
}

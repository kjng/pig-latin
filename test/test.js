import chai from 'chai';
import { convertToPigLatin } from '../pigLatin';

// Setup chai to use should style assertions
chai.should();

describe('pigLatin', () => {
  const testWord = 'test';
  const testSentence = 'this is a test sentence';

  const resultWord = convertToPigLatin(testWord);
  const resultSentence = convertToPigLatin(testSentence);

  it('returns the correct translation for a word', () => {
    resultWord.should.equal('esttay');
  });
  it('returns the correct translation for a sentence', () => {
    resultSentence.should.equal('histay siay aay esttay entencesay');
  });
});

import { randomizer } from '../utils.js';
import playGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const startPoint = randomizer(100);
  progression.push(startPoint);
  const step = randomizer(15);
  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[i-1]+step);
  };
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const step = progression[1] - progression[0];
  const indexOfHiddenElement = randomizer(10);
  progression[indexOfHiddenElement] = '..';
  let question = '';
  for (const value of progression) {
    question += `${value} `;
  }
  const correctAnswer = String(progression[indexOfHiddenElement - 1] + step);
  return [question, correctAnswer];
};

export default () => {
  playGame(gameRules, getQuestionAndAnswer);
}
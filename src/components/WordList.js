const WordList = [
  'hello',
  'hi',
]

export function randomWord() {
  return WordList[Math.floor(Math.random() * WordList.length)]
}

export default WordList;
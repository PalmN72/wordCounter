import "./styles/index.css";
const btn = document.querySelector('#count')
const resEl: HTMLElement = document.querySelector('#results')
const words: HTMLInputElement = document.querySelector('#textInput')

const countWords = () => words.value.split(' ').length

const countLetters = () => words.value.split(' ').join('').split('').length

const appendToDom = (element: HTMLElement, targetEl: HTMLElement) => targetEl.append(element)

const createResEl = (myFnc: Function) => {
  const resultEl = document.createElement('p')
  resultEl.textContent = myFnc().toString()
  return resultEl
}

btn.addEventListener('click', () => { 
  appendToDom(createResEl(countWords), resEl)
  appendToDom(createResEl(countLetters), resEl)
})
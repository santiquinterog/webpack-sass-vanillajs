import './scss/styles.scss'
import { createElement } from './js/utils'

const el = document.createElement('div')
const objAttr = { class: 'inn-container home' }
let total = 2500701

const children = [
  createElement('img', {
    class: 'home__img',
    src: 'https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg',
    alt: 'Model'
  }),
  createElement('p', { class: 'home__username' }, ['Hello, Pamela']),
  createElement('div', { class: 'home__amount' }, [
    `<span>${total}</span>`,
    createElement('p', { class: 'home__amount--info' }, [
      'Total Amount'
    ])
  ]),
  createElement('section', { class: 'home__buttons' }, [
    `<button id="btn-right">WITHDRAW 10000</button>`,
    `<button id="btn-left">WITHDRAW 5000</button>`
  ])
]

const app = createElement(el, objAttr, children)

console.log(app)

const root = document.getElementById('root')
root.appendChild(app)

// Calculate
const btnRight = document.getElementById('btn-right')
const btnLeft = document.getElementById('btn-left')
const withDrawRight = 1000
const withDrawLeft = 5000
const ammount = document.querySelector('.home__amount')

function updateAccountNode (withdraw) {
  total -= withdraw
  const newTotalNode = document.createElement('span')
  newTotalNode.innerHTML = total
  ammount.replaceChild(newTotalNode, ammount.firstChild)
}

btnRight.addEventListener('click', e => {
  e.preventDefault()
  updateAccountNode(withDrawRight)
})

btnLeft.addEventListener('click', e => {
  e.preventDefault()
  updateAccountNode(withDrawLeft)
})

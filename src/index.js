import './scss/styles.scss'
import { createElement } from './js/utils'

const objAttr = {
  id: 'container',
  class: 'container'
}

const el = createElement('div', objAttr)
console.log(el)
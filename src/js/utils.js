/**
 * Add attributes to an HTMLElement instance
 * 
 * @param {HTMLElement} el an HTMLInstance
 * @param  {object} objAttr attributes of HTML elements
 * @example
 * 
 * const el = document.createElement('div')
 * addAttributes(el, { class: 'root' })
 * <div class="root"></div>
 */
export function addAttributes (el, objAttr) {
  Object.keys(objAttr).forEach((attr) => {
    el.setAttribute(attr, objAttr[attr])
  })
}

/**
 * @param {HTMLElement || string} type type of HTML element
 * @param {object} objAttr attributes of HTML elements
 * @param {Array} children children of this element
 * @returns {HTMLElement} HTML elements and their children
 */
export function createElement (type, objAttr, children) {
  const el = type instanceof HTMLElement
    ? type
    : document.createElement(type)
  
  addAttributes(el, objAttr)

  return el
}

import _ from 'lodash'
import benchmark from 'benchmark'

global.Benchmark = benchmark.runInContext({ _, process })

const suite = new global.Benchmark.Suite()
const el = document.createElement('p')

function test (property, value, applyStyle) {
  try {
    applyStyle(property, value)
  } catch (err) {
    return false
  }

  applyStyle(property, '')
}

suite.add('element.style.property', () => {
  test('color', 'red', (property, value) => {
    el.style[property] = value
  })
})

suite.add('element.setAttribute', () => {
  test('color', 'red', (property, value) => {
    el.setAttribute('style', property + ':' + value)
  })
})

suite.add('element.style.cssText', () => {
  test('color', 'red', (property, value) => {
    el.style.cssText = property + ':' + value
  })
})

suite.on('cycle', event => {
  console.log(String(event.target))
})

suite.run()

const { p, command, heading, warning, direction } = require("../tools/pretty")
const { map, pipe, values } = require('ramda')

/***
 *
 * @param name (is module or class name for template)
 * @param filename (is a filename)
 * @param toolbox
 * @returns {Promise<void>}
 */

const generateContainer = async (name, filename,toolbox) => {
  const { print, template: { generate } } = toolbox

  await generate({
    template: 'container.ejs',
    target: `App/Containers/${filename}.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Containers/${filename}.js`)

  await generate({
    template: 'styles.ejs',
    target: `App/Containers/Styles/${filename}Style.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Containers/Styles/${filename}Style.js`)
}

const generateComponent = async (name, filename, toolbox) => {
  const { print, template: { generate } } = toolbox

  await generate({
    template: 'component.ejs',
    target: `App/Components/${filename}.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Components/${filename}.js`)

  await generate({
    template: 'styles.ejs',
    target: `App/Components/Styles/${filename}Style.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Components/Styles/${filename}Style.js`)
}

const generateRedux = async (name, filename, toolbox) => {
  const { print, template: { generate } } = toolbox

  await generate({
    template: 'redux.ejs',
    target: `App/Redux/${filename}Redux.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Redux/${filename}Redux.js`)
}

const generateSaga = async (name, filename, toolbox) => {
  const { print, template: { generate } } = toolbox

  await generate({
    template: 'saga.ejs',
    target: `App/Sagas/${filename}Sagas.js`,
    props: { name }
  })
  print.info(`${print.checkmark} App/Sagas/${filename}Sagas.js`)
}

module.exports = {
  generateContainer,
  generateComponent,
  generateRedux,
  generateSaga
}

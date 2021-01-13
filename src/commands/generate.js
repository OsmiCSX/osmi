const { p, command, heading, warning, direction } = require("../tools/pretty")
const { map, pipe, values } = require('ramda')
const fs = require('fs')

const availableGenerator = [{
  name: 'component',
  description: 'Generates a react-hooks component & styles.',
}, {
  name: 'container',
  description: 'Generates a smart screen & styles.',
}, {
  name: 'redux',
  description: 'Generates a action/creator/reducer set for Redux.',
}, {
  name: 'saga',
  description: 'Generates a saga.',
}]

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

const generateCommandNotAvailable = async toolbox => {
  const { print: { info, table, colors: { bold, yellow }, } } = toolbox
  info(`✨ Type ${bold('osmi generate')} ${yellow('________')} to run one of these generators:\n`)

  const data = pipe(
    values,
    map((item) => [yellow(item.name), item.description]),
  )(availableGenerator)

  table(data)
}

module.exports = {
  description: 'Generates some files.',
  alias: ['g'],
  run: async toolbox => {
    const { print, parameters, strings, template: { generate } } = toolbox
    const {
      newline,
      warning,
      info,
      table,
      colors: { bold, yellow, muted, white },
    } = print

    // Check if current directory is osmi project base
    if(fs.existsSync(process.cwd()+'/osmi.lock')){
      if (parameters.first) {
        const generator = parameters.first.toLowerCase()

        // check if generate command is exists
        const commandExists = availableGenerator.find(command => command.name === generator)
        if (!commandExists) {
          return await generateCommandNotAvailable(toolbox)
        }

        // we need a name for this component
        const name = parameters.second
        if (!name) {
          return warning(`⚠️  Please specify a name for your ${parameters.first}: osmi g ${parameters.first} MyName`)
        }

        // avoid the my-component-component phenomenon
        const pascalGenerator = strings.pascalCase(generator)

        let pascalName = strings.pascalCase(name)
        if (pascalName.endsWith(pascalGenerator)) {
          p(`Stripping ${pascalGenerator} from end of name`)
          p(
            `Note that you don't need to add ${pascalGenerator} to the end of the name -- we'll do it for you!`,
          )
          pascalName = pascalName.slice(0, -1 * pascalGenerator.length)
          command(`osmi generate ${generator} ${pascalName}`)
        }

        switch (parameters.first) {
          case "container":
            await generateContainer(pascalName, parameters.second, toolbox)
            break;

          case "component":
            await generateComponent(pascalName, parameters.second, toolbox)
            break;

          case "redux":
            await generateRedux(pascalName, parameters.second, toolbox)
            break;

          case "saga":
            await generateSaga(pascalName, parameters.second, toolbox)
            break;

          default:
            return await generateCommandNotAvailable(toolbox)
        }
      } else {
        warning('⚠️  No generators detected.')
        p()
        heading('Generator allow you to quickly make frequently created files such as:')
        p("* Container")
        p("* Components")
        p("* Redux")
        p("* Saga")
      }
    } else {
      warning('⚠️ Oopss, this directory is not osmi project base or osmi.lock is not found')
    }
  }
}

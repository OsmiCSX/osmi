const { p, command, heading, osmiHeading, direction, link } = require("../tools/pretty")

module.exports = {
  dashed: true,
  alias: ["h"],
  description: "Displays Osmi CLI help",
  run: async (toolbox) => {
    const { meta, parameters } = toolbox

    p()

    osmiHeading()
    heading(`Welcome to Osmi Kit ${meta.version()}!`)
    p()
    p("Osmi is a CLI that helps you spin up a new React Native app using a")
    p("battle-tested tech stack.")
    p()
    heading("Commands")
    p()
    command("new         ", "Creates a new React Native app", [
      "osmi new MyApp",
    ])
    p()
    command("generate (g)", "Generates components and other app features", [
      "osmi generate container Screen",
      "osmi generate component Button",
      "osmi generate redux Hello",
      "osmi generate saga Hello",
    ])
    p()
    osmiHeading()
  }
}

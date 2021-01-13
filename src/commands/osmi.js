module.exports = {
  description: "⚡ The Osmi CLI ⚡",
  run: async (toolbox) => {
    const {
      parameters: { first },
      print: { error },
    } = toolbox

    if (first !== undefined) {
      error(`osmi '${first}' is not a command`)
    } else {
      return require("./help").run(toolbox)
    }
  },
}

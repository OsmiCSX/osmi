const { print } = require("gluegun/print")

const { cyan, gray, white, bold, red, yellow } = print.colors
const { underline } = print.colors

const p = (m = "") => print.info(gray(`   ${m}`))
const heading = (m = "") => p(white(bold(m)))
const link = (m = "") => underline(white(m))

// export const igniteHeading = (m = "") => p(red(bold(m)))
const osmiHeading = () =>
  p(
    yellow(
      bold(
        "· · · · · · · · · · · · · · · · · · ⚡ Osmi Kit ⚡ · · · · · · · · · · · · · · · · · ·\n",
      ),
    ),
  )

const command = (m = "", second = "", examples = []) => {
  p(white(m) + "  " + gray(second))
  const indent = m.length + 2
  if (examples) {
    examples.forEach((ex) => p(gray(" ".repeat(indent) + ex)))
  }
}
const direction = (m = "") => p(cyan(m))
const warning = (m = "") => p(yellow(m))

module.exports = {
  p,
  heading,
  link,
  osmiHeading,
  command,
  direction,
  warning
}

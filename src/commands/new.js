const fs = require('fs')
const { spawnProgress } = require("../tools/spawn")
const { p, heading, command, direction, osmiHeading } = require("../tools/pretty")

module.exports = {
  run: async (toolbox) => {
    const { print, filesystem, system, meta, parameters, strings } = toolbox
    const { kebabCase } = strings
    const { path } = filesystem
    const { info, colors } = print
    const { gray, red, magenta, cyan, yellow } = colors

    // start tracking performance
    const perfStart = new Date().getTime()

    // retrieve project name from toolbox
    const { validateProjectName } = require("../tools/validations")
    const projectName = validateProjectName(toolbox)

    const projectNameKebab = kebabCase(projectName)

    // debug?
    const debug = Boolean(parameters.options.debug)
    const log = (m) => {
      if (debug) info(m)
      return m
    }

    const cli = "react-native-cli"
    const osmiPath = path(`${meta.src}`, "..")
    const boilerplatePath = path(osmiPath, "boilerplate")
    const cliEnv = process.env
    const cliString = `npx react-native init ${projectName} --template file://${osmiPath}${
      debug ? " --verbose" : ""
    }`

    const lockFile = () => fs.writeFileSync(process.cwd()+'/'+projectName+'/osmi.lock', '')



    log({ cli, osmiPath, boilerplatePath, cliString })

    // welcome everybody!
    p("\n")
    osmiHeading()
    p(` █ Creating ${magenta(projectName)} using ${yellow("Osmi Kit")} ${meta.version()}`)
    p(` █ Powered by ${yellow("OsmiCSX")} - https://github.com/OsmiCSX`)
    p(` █ Using ${cyan(cli)}`)
    p(` ────────────────────────────────────────────────\n`)
    p(`⚡ Initializing app with Osmi Kit`)

    // generate the project
    await spawnProgress(log(cliString), {
      env: cliEnv,
      onProgress: (out) => {
        out = log(out.toString())

        if (out.includes("Welcome to React Native!")) p(`🖨  3D-printing a new React Native app`)
        if (out.includes("Run instructions for")) p(`🧊 Cooling print nozzles`)
      },
    })

    // note the original directory
    const cwd = log(process.cwd())

    // jump into the project to do additional tasks
    process.chdir(projectName)

    // copy the .gitignore if it wasn't copied over [expo...]
    // Release Ignite installs have the boilerplate's .gitignore in .npmignore
    // (see https://github.com/npm/npm/issues/3763); development Ignite still
    // has it in .gitignore. Copy it from one or the other.
    const targetIgnorePath = log(path(process.cwd(), ".gitignore"))
    if (!filesystem.exists(targetIgnorePath)) {
      let sourceIgnorePath = log(path(boilerplatePath, ".npmignore"))
      if (!filesystem.exists(sourceIgnorePath)) {
        sourceIgnorePath = path(boilerplatePath, ".gitignore")
      }
      filesystem.copy(sourceIgnorePath, targetIgnorePath)
    }

    // Update package.json:
    // - We need to replace the app name in the detox paths. We do it on the
    //   unparsed file content since that's easier than updating individual values
    //   in the parsed structure, then we parse that as JSON.
    // - Having a "prepare" script in package.json messes up expo-cli init above
    //   (it fails because npm-run-all hasn't been installed yet), so we
    //   add it.
    // - If Expo, we also merge in our extra expo stuff.
    // - Then write it back out.
    let packageJsonRaw = filesystem.read("package.json")
    packageJsonRaw = packageJsonRaw
      .replace(/OsmiKit/g, projectName)
      .replace(/osmi-kit/g, projectNameKebab)
    let packageJson = JSON.parse(packageJsonRaw)

    filesystem.write("package.json", packageJson)

    // install pods
    p(`☕️ Baking CocoaPods`)
    await spawnProgress("npx pod-install", {})

    // commit any changes
    if (parameters.options.git !== false) {
      p(`🗄  Backing everything up in source control`)
      await system.run(
        log(`
          rm -rf ./.git
          git init;
        `),
      )
    }

    // back to the original directory
    process.chdir(log(cwd))

    // we're done! round performance stats to .xx digits
    const perfDuration = Math.round((new Date().getTime() - perfStart) / 10) / 100
    lockFile()
    p()
    heading(`${yellow("Osmi CLI")} initializing ${yellow(projectName)} in ${gray(`${perfDuration}s`)}`)
    p()
    direction(`To get started:`)
    command(`  cd ${projectName}`)
    if (process.platform === "darwin") {
      command(`  npx react-native run-ios`)
    }
    command(`  npx react-native run-android`)
    p()
    direction("To run in Android, make sure you've followed the latest react-native setup")
    direction(
      "instructions at https://facebook.github.io/react-native/docs/getting-started.html",
    )
    direction(
      "before using osmi. You won't be able to run Android successfully until you have.",
    )
    p()
    heading("Now get cooking! 🍽")
    osmiHeading()
  }
}

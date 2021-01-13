module.exports = {
    "extends": "airbnb",
    "plugins": [
      "react",
      "react-native"
    ],
    "settings": {
      "react": {
        "version": "detect"
      },
      "react-native": {
        "version": "detect"
      }
    },
    "rules": {
      "strict": [0, "global"],
      "func-names": 0,
      "object-shorthand": 0,
      "consistent-return": 0,
      "prefer-template": 0,
      "comma-dangle": ["error", {
          "arrays": "always-multiline",
          "objects": "always-multiline",
          "imports": "always-multiline",
          "exports": "always-multiline",
          "functions": "never"
      }]
    }
  }
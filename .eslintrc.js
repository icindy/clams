module.exports = {
  "extends": "standard",
  "installedESLint": true,
  "rules": {
    "indent": ["error", 2],
    "comma-dangle": ["error", "never"],
    "no-param-reassign": ["off"],
    "no-plusplus": ["off"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"]
  },
  "plugins": [
    "standard",
    "promise"
  ]
}
module.exports = {

    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
      root: ["./src"],
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
         "ttf"
      ],
      alias: {
        "@assets": "./src/assets",
        "@components": "./src/components",
        "@config": "./src/config",
        "@hooks": "./src/hooks",
        "@routes": "./src/routes",
        "@screens": "./src/screens",
        "@services": "./src/services",
        "@styles": "./src/styles",
        "@utils": "./src/utils"
      }
    }]
    ]
  }


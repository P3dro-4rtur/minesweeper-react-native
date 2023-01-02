module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~": "./src",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@storage": "./src/storage",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};

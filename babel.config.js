module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~assets": "./assets",
            "~app": "./src/app",
            "~components": "./src/components",
            "~constants": "./src/constants",
            "~features": "./src/features",
            "~navigations": "./src/navigations",
            "~screens": "./src/screens",
            "~services": "./src/services",
            "~utils": "./src/utils",
          },
          extensions : [".js", ".jsx", ".json"]
        },
      ],
    ],
  };
};

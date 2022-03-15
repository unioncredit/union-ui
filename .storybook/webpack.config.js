module.exports = ({ config }) => {
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      };
    }

    return rule;
  });

  // use svgr for svg files
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};

const VAL_STR = "%val%";

const templates = {
  m: {
    left: "margin",
    right: VAL_STR,
  },
  mt: {
    left: "marginTop",
    right: VAL_STR,
  },
  mb: {
    left: "marginBottom",
    right: VAL_STR,
  },
  my: {
    left: "margin",
    right: `${VAL_STR} 0`,
  },
  mx: {
    left: "margin",
    right: `0 ${VAL_STR}`,
  },
  ml: {
    left: "marginLeft",
    right: VAL_STR,
  },
  mr: {
    left: "marginRight",
    right: VAL_STR,
  },
};

export function propsToStyles(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (templates[key]) {
      const template = templates[key];
      const spacer = props[key];
      return {
        ...acc,
        [template.left]: template.right.replace(VAL_STR, spacer),
      };
    }
    return acc;
  }, {});
}

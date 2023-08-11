import React__default, { createElement } from 'react';

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var styles = {"root":"__Q-W2"};

function BackgroundImageLayer(_ref) {
  var image = _ref.image,
    width = _ref.width,
    height = _ref.height;
  return React__default.createElement("div", {
    style: {
      backgroundImage: "url(\"" + image + "\")",
      width: width,
      height: height
    }
  });
}

var UiComponent = function UiComponent(_ref) {
  _objectDestructuringEmpty(_ref);
  return createElement("div", {
    className: styles.root
  }, createElement(BackgroundImageLayer, {
    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
    width: "100%",
    height: "100%"
  }));
};

export { UiComponent };
//# sourceMappingURL=index.modern.js.map

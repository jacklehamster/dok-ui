function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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
  return React.createElement("div", {
    className: styles.root
  }, React.createElement(BackgroundImageLayer, {
    image: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
    width: "100%",
    height: "100%"
  }));
};

exports.UiComponent = UiComponent;
//# sourceMappingURL=index.js.map

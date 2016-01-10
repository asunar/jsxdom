/** @jsx JSXDOM */

var defaultValue = "Fill me ...";

document.body.appendChild(JSXDOM(
  "div",
  null,
  JSXDOM("input", { type: "text", value: defaultValue }),
  JSXDOM(
    "button",
    { onclick: "alert('clicked!');" },
    "Click Me!"
  ),
  JSXDOM(
    "ul",
    null,
    ['un', 'deux', 'trois'].map(function (number) {
      return JSXDOM(
        "li",
        null,
        number
      );
    })
  )
));
const presets = ['@babel/preset-react'];
const plugins = [
  [
    'babel-plugin-styled-components',
    {
      "ssr": false
    }
  ]
];
module.exports = { presets, plugins };
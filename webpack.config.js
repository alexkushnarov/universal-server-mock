const path = require('path');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const webpack = require('webpack');

module.exports = {
	.....
  plugins: [
    new NormalModuleReplacementPlugin(
      /popover.js/,
      path.resolve(__dirname, 'src/server-mocks/popover.mock.js')
    ),
		...
  ],
	....
}

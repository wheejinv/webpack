const path = require('path');

// option 주는 방법
// webpack -p --env d

module.exports = ( env ) => {
	console.warn( "env : ", env );
	return {
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'outputWebpack.bundle.js'
		},
		devtool: env ? false : '#inline-source-map'
	}
};

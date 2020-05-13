var babel = require("rollup-plugin-babel");

export default [{
  input: './src/index.js',
  output: [
    {
      file: './dist/fp.cjs.min.js',
      format: 'cjs',
	 	sourcemap: false
    },
    {
      file: './dist/fp.cjs.js',
      format: 'cjs',
	 	sourcemap: true
    },
    {
      file: './dist/fp.esm.min.js',
      format: 'esm',
	 	sourcemap: false
    },
    {
      file: './dist/fp.esm.js',
      format: 'esm',
	 	sourcemap: true
    }],
  plugins:[
		babel({ 
			runtimeHelpers: true,
			exclude: 'node_modules/**'
		})
  ]
}];

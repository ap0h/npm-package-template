import {swc} from 'rollup-plugin-swc3'
import dts from 'rollup-plugin-dts'

export default [{
	input: 'src/index.ts',
	treeshake: true,
	output: [{
		file: './lib/bundle.mjs',
		format: 'es',
		name: 'bundle'    
	  },{
		file: './lib/bundle.cjs',
		format: 'cjs',
		name: 'bundle'    
	  }],
	plugins: [
		swc({
			jsc: {
				parser: {
					syntax: 'typescript',
					tsx: false,
					dynamicImport: false,
					decorators: false
				},
				minify: {
					compress: {
						arrows: true,
						booleans: true,
						collapse_vars: true,
						comparisons: true,
						computed_props: true,
						conditionals: true,
						dead_code: true,
						directives: true,
						drop_debugger: true,
						evaluate: true,
						hoist_props: true,
						if_return: true,
						join_vars: true,
						keep_fargs: true,
						loops: true,
						negate_iife: true,
						properties: true,
						side_effects: true,
						switches: true,
						typeofs: true,
						unused: true,
						const_to_let: true,
					},
					mangle: false,
				},
				// Target: 'es5',

				loose: false,
				externalHelpers: false,
				// Requires v1.2.50 or upper and requires target to be es2016 or upper.
				keepClassNames: false,
			},
			minify: false,
			exclude:[".test.ts"]
		}),
	],
}, {
    input: "./lib/dts/src/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "es" }],
    plugins: [dts()],
  },]

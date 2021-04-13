import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';


////////////////////////////////////////////////
//  ROLLUP
////////////////////////////////////////////////


export default {
    input: `src/index.js`,
    output: {
        format: `iife`,
        file: `dist/rolesSelector.js`,
        name: `RolesSelector`,
        globals: {
            'react': 'React',
        }
    },
    plugins: [
        babel({
            babelrc: false,
            presets: [
                "@babel/preset-react"
            ],
            babelHelpers: `bundled`
        }),
        terser()
    ],
    external: [
        'react'
    ]
}

/* eslint-disable sort-keys */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
    {
        input: 'src/main.js',
        output: {
            name: 'loremizer',
            file: pkg.browser,
            format: 'umd',
        },
        plugins: [
            resolve(),
            commonjs(),
            terser(),
        ],
    },
    {
        input: 'src/main.js',
        external: ['ramda', 'lodash'],
        output: [
            {file: pkg.module, format: 'es'},
        ],
    },
    {
        input: 'src/main.js',
        external: ['ramda', 'lodash'],
        output: [
            {file: pkg.main, format: 'cjs'},
        ],
        plugins: [
            terser(),
        ],
    },
];

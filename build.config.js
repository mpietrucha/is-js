import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

export const alias = {
    '@': resolve('src'),
    '@none': resolve('src/none'),
    '@basic': resolve('src/basic'),
    '@constructor': resolve('src/constructor'),
}

export const rollup = {
    inlineDependencies: true,
    output: { exports: 'named' },
}

export const declaration = false

export default defineBuildConfig({ alias, rollup, declaration })

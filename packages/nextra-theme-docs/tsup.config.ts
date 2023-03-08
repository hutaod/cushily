import { defineConfig } from 'tsup'
import tsconfig from './tsconfig.json'

export default defineConfig({
  name: '@cushily/nextra-theme-docs',
  entry: ['src/index.tsx'],
  format: 'esm',
  dts: true,
  external: ['@cushily/nextra'],
  outExtension: () => ({ js: '.js' }),
  target: tsconfig.compilerOptions.target as 'es2016'
})

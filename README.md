# Efficient NPM Package Template with Rollup and SWC

[![NPM package release CI](https://github.com/ap0h/npm-package-template/actions/workflows/npm-package-release.yml/badge.svg?branch=master)](https://github.com/ap0h/npm-package-template/actions/workflows/npm-package-release.yml)

![Branches](./badges/coverage-branches.svg)
![Functions](./badges/coverage-functions.svg)
![Lines](./badges/coverage-lines.svg)
![Statements](./badges/coverage-statements.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)


Welcome to our NPM Package Template, optimized for seamless bundling using Rollup with the powerful SWC compiler. Additionally, we streamline type definitions using the "dts" plugin, consolidating them into a central `index.d.ts` file.

## Compilation and Bundling Process

1. **Type Definitions**: The TypeScript compiler (tsc) generates type definition files (output is multiple type definition files)
2. **Transpilation** and **Bundling**: Rollup employs the SWC plugin to seamlessly transmute TypeScript into JavaScript. This stage generates two distinct output files tailored for each execution environment (CommonJS and ECMAScript).
3. **Type Merging**: Rollup further utilizes the "dts" plugin to efficiently merge type definition files into a singular, comprehensive `index.d.ts` file.

**Note**: The crucial utilization of tsc facilitates the emission of `.d.ts` files, which are then expertly merged into a unified main declaration file during bundling.


## General notes

You will need `GH_TOKEN` or `GITHUB_TOKEN` for github, for gitlab `GL_TOKEN` or `GITLAB_TOKEN` and `NPM_TOKEN` in order to publish npm package.

## Publishing to private registry

Update following in your package.json
```javascript
"publishConfig": {
	"registry": "http://localhost:8081/repository/npm-local/", // or
    "@namespace:registry": "http://localhost:8081/repository/npm-local/"
},
```
Configure .npmrc
- Add `NPM_TOKEN` env variable
- Gitlab-ci template will generate this file automatically.
- uncomment lines related to .npmrc and replace url with your private registry url.

```yaml
      - run: echo "\n//localhost:8081/repository/npm-local/:_auth=$NPM_TOKEN\n" >> .npmrc
      - run: npm config set registry=http://localhost:8081/repository/npm-local/
      - run: npm set //localhost:8081/repository/npm-local/:_auth=$NPM_TOKEN 
```

### Gitlab

For gitlab use gitlab-ci workflow from `/assets/.gitlab-ci.yml` and place in root directory.

Install `@semantic-release/gitlab` plugin and replace it instead `@semantic-release/github` in `.releaserc.json`.

In addition to this gitlab plugin for semantic release needs GL_TOKEN or GITLAB_TOKEN env variable in order to commit `CHANGELOG` and `package.json` to your repository after successful release.


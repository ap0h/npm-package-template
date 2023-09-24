module.exports = { 
    extends: ['@commitlint/config-conventional'],
    rules: { 'footer-max-line-length': [1, 'always', 100], 'body-max-line-length': [1, 'always', 100] },
    parserPreset: { parserOpts: { noteKeywords: ['\\[.+\\]:'] } }, // look at: https://github.com/conventional-changelog/commitlint/issues/2112#issuecomment-692788007
} 

module.exports = {
	roots: ['<rootDir>'],
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': ['@swc/jest'],
	},
	coveragePathIgnorePatterns: [],
	collectCoverage: true,
	coverageReporters: ['json-summary','text', 'html'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!lib/**',
		'!.webpack/**',
	],
}

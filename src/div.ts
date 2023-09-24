class DivisionWithZero extends Error {
	constructor() {
		super('Division by zero')
	}
}
/**
 * Divides two numbers.
 *
 * This function takes two numbers and returns the result of dividing the first number by the second number.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The result of dividing `a` by `b`.
 * @throws {DivisionWithZero} If `b` is zero.
 *
 * @example Basic division example
 * ```typescript
 * const result = div(10, 2);
 * // Result: 5
 * ```
 *
 * @example Division by zero example
 * ```typescript
 * const result = div(8, 0);
 * // Throws an error: Division by zero
 * ```
 */
export const div = (a: number, b: number): number => {
	if (b === 0) {
		throw new DivisionWithZero()
	}

	return a / b
}

/**
 * Represents a division operation.
 */
export interface DivisionOperation {
	/**
	 * The dividend of the division operation.
	 */
	dividend: number
	/**
	 * The divisor of the division operation.
	 */
	divisor: number
}

/**
 * Perform multiple division operations and return the results in a table.
 *
 * @param operations - An array of division operations to perform.
 * @returns A table of division results, each containing dividend, divisor, and result.
 *
 * @example
 * ```typescript
 * const operations: DivisionOperation[] = [
 *   { dividend: 10, divisor: 2 },
 *   { dividend: 8, divisor: 4 },
 * ];
 * const table = performDivisions(operations);
 * // Result:
 * // | Dividend | Divisor | Result |
 * // |----------|---------|--------|
 * // | 10       | 2       | 5      |
 * // | 8        | 4       | 2      |
 * ```
 */
export const performDivisions = (operations: DivisionOperation[]): string => {
	let table = '| Dividend | Divisor | Result |\n'
	table += '|----------|---------|--------|\n'

	for (const operation of operations) {
		table += `| ${operation.dividend}       | ${
			operation.divisor
		}       | ${div(operation.dividend, operation.divisor).toFixed(2)}      |\n`
	}

	return table
}

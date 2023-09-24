import {div, performDivisions} from './div'
import {mul} from './mul'
import {sum} from './sum'

describe('Calculator', () => {
	it('should add two numbers', () => {
		expect(sum(1, 2)).toBe(3)
	})

	it('should multiply two numbers', () => {
		expect(mul(7, 2)).toBe(14)
	})

	it('should divide two numbers', () => {
		expect(div(10, 2)).toBe(5)
	})

	it('should throw DivisionWithZero', () => {
		expect(() => div(1, 0)).toThrow('Division by zero')
	})

	it('should perform multiple divisions and write output in a table', () => {
		expect(
			performDivisions([
				{dividend: 10, divisor: 3},
				{dividend: 10, divisor: 5},
			]),
		).toBe(
			'| Dividend | Divisor | Result |\n' +
				'|----------|---------|--------|\n' +
				'| 10       | 3       | 3.33      |\n' +
				'| 10       | 5       | 2.00      |\n',
		)
	})
})

import { RoundingMode } from '../types';
import { ExactNumber } from '../ExactNumber';
import { cosh, sinh, tanh } from './hyperbolic';

describe('hyperbolic', () => {
  it('sinh', () => {
    const range = [-4, 4];
    for (let i = range[0]; i <= range[1]; i += 0.004) {
      const jsResult = Math.sinh(i).toString();
      const jsRounded = ExactNumber(jsResult).round(10, RoundingMode.TO_ZERO).toFixed(10);
      const exactResult = ExactNumber(sinh(i.toString(), 10)).toFixed(10);
      expect(exactResult).toBe(jsRounded);
    }
  });

  it('sinh 7/12', () => {
    const SINH_7_OVER_12 = sinh('7/12', 350).toString();

    for (let i = 1; i < 350; i++) {
      expect(sinh('7/12', i).toFixed(i)).toBe(SINH_7_OVER_12.slice(0, i + 2));
    }
  });

  it('cosh', () => {
    const range = [-4, 4];
    for (let i = range[0]; i <= range[1]; i += 0.004) {
      const jsResult = Math.cosh(i).toString();
      const jsRounded = ExactNumber(jsResult).round(10, RoundingMode.TO_ZERO).toFixed(10);
      const exactResult = ExactNumber(cosh(i.toString(), 10)).toFixed(10);
      expect(exactResult).toBe(jsRounded);
    }
  });

  it('cosh 7/12', () => {
    const COSH_7_OVER_12 = cosh('7/12', 350).toString();

    for (let i = 1; i < 350; i++) {
      expect(cosh('7/12', i).toFixed(i)).toBe(COSH_7_OVER_12.slice(0, i + 2));
    }
  });

  it('tanh', () => {
    const range = [-4, 4];
    for (let i = range[0]; i <= range[1]; i += 0.004) {
      const jsResult = Math.tanh(i).toString();
      const jsRounded = ExactNumber(jsResult).round(10, RoundingMode.TO_ZERO).toFixed(10);
      const exactResult = ExactNumber(tanh(i.toString(), 10)).toFixed(10);
      expect(exactResult).toBe(jsRounded);
    }
  });

  it('tanh 7/12', () => {
    const TANH_7_OVER_12 = tanh('7/12', 350).toString();

    for (let i = 1; i < 350; i++) {
      expect(tanh('7/12', i).toFixed(i)).toBe(TANH_7_OVER_12.slice(0, i + 2));
    }
  });
});

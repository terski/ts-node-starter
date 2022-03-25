import { reverse } from './lib';

describe('lib', () => {
    it('should work', () => {
        const result = reverse('abc');
        expect(result).toBe('cba');
    });
});

import { ShortenPipe } from './shorten.pipe';

describe('ShortenPipe', () => {
    let pipe: ShortenPipe;
    beforeEach(() => {
        pipe = new ShortenPipe();
    })

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('Returns the same string if it is less than the given amount of characters', () => {
        expect(pipe.transform('a', 50)).toBe('a');
    });

    it('Returns the same string if the amount of characters matches the given amount', () => {
        expect(pipe.transform('a', 1)).toBe('a');
    });

    it('Transforms string if the amount of characters exceeds the given amount', () => {
        expect(pipe.transform('aa', 1)).toBe('a...');
    })
});

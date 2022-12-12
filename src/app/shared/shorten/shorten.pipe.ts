import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten',
    standalone: true,
})
export class ShortenPipe implements PipeTransform {
    transform(value: string, amount: number = 100): unknown {
        if (value.length > amount) {
            return value.substring(0, amount) + '...';
        }

        return value;
    }

}

// capitalize.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

/**
 * upperCase
 * Transforma un string a mayúscula.
 * Uso: {{ 'angular' | upperCase }} => 'Angular'
 */
@Pipe({
    name: 'upperCase',
    standalone: true, // ✅ no necesita NgModule
})
export class upperCase implements PipeTransform {
    transform(value: string | null | undefined): string {
        if (!value) return '';
        return value.toUpperCase();
    }
}
// capitalize.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

/**
 * CapitalizePipe
 * Transforma la primera letra de un string a mayúscula.
 * Uso: {{ 'angular' | capitalize }} => 'Angular'
 */
@Pipe({
    name: 'capitalize',
    standalone: true, // ✅ no necesita NgModule
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string | null | undefined): string {
        if (!value) return '';
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
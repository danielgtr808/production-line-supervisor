import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
/**
 * Classe que serve como implementação base da interface ControlValueAccessor. O objetivo
 * é reduzir a quantidade de código escrito em componentes que precisam escrever a implementação
 * dessa interface
 */
@Component({
    template: "",
})
export class BaseControlValueAccessor implements ControlValueAccessor {
    /**
     * Função que deve ser associada a um campo para detectar o lançamento do evento input
     * @param event Evento do tipo input, lançado quando um campo de formulário teve seu valor
     * alterado.
     */
    onBaseChangeFn = (event: Event, isNumber: boolean = false) => { }
    /**
     * Função que deve ser associada a um campo para detectar o lançamento do evento blur
     */
    onBaseTouchedFn = () => { }
    /**
     * Propriedade usada para two-way data binding com o campo do formulário.
     */
    @Input() value: any;
    /**
     * Função que passa um callback para informar a mudança no status do campo de um formulário
     * para "dirty".
     * @param fn É um callback para o formulário reativo, informando que o status do campo deve
     * ser alterado para "dirty"
     */
    registerOnChange(fn: any): void {
        this.onBaseChangeFn = (event: Event, isNumber: boolean = false) => {
            const value = (event.target as HTMLInputElement).value;
            fn(isNumber ? parseFloat(value) : value)
        };
    }
    /**
     * Função que passa um callback para informar a mudança no status do campo de um formulário
     * para "touched".
     * @param fn É um callback para o formulário reativo, informando que o status do campo deve
     * ser alterado para "touched"
     */
    registerOnTouched(fn: any): void {
        this.onBaseTouchedFn = fn;
    }
    /**
     * Função que notifica a alteração de valores realizadas a partir do formulário reativo para o
     * campo de formulário.
     * @param obj Valor atribuído a este campo a partir do formulário reativo (Um formGroup ou formArray)
     */
    writeValue(obj: any): void {
        this.value = obj;
    }
}

export default BaseControlValueAccessor
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import BaseControlValueAccessor from "./base-control-value-acessor.model";
import HTMLInputType from "./html-input-type.type";
/**
 * Classe base (tratada como um componente para poder usar funcionalidades do 
 * Angular como "@Input" e "@Output") para os campos da aplicação (que geralmente
 * são usados dentro de um formulário). Contém parâmetros de entrada e saída básicos
 * para elementos "input", "select" e "textarea", junto a um sistema para recuperação
 * de erros.
 */
@Component({
    template: "",
})
export class BaseFormField extends BaseControlValueAccessor {
    /**
     * Utilizado para acessar os erros associados a este campo. Através deste parâmetro, 
     * o campo também é marcado como "dirty" quando o evento "input" é emitido e como
     * "touched" na emição do evento "blur".
     */
    @Input() abstractControl: AbstractControl | undefined;
    /**
     * Texto para auxiliar o usuário a preencher o campo (como em caso de campos de telefone,
     * onde pode-se orientar o usuário a colocar o ddd ou não, por exemplo) ou para apresentar
     * uma mensagem relevante ao usuário (como por exemplo: Este campo não poderá ser editado
     * após sua criação).
     */
    @Input() helperText: string = "";
    /**
     * Label que será associado ao campo
     */
    @Input() label: string = "";
    /**
     * Determinar se o campo será somente leitura (não é válido para elementos 
     * de tag "select", para este caso, deve ser usado outro método).
     */
    @Input() readOnly: boolean = false;
    /**
     * É o tipo do campo (valido apenas para o elemento "input"), pode ser qualquer
     * valor valido para o atributo "type" da tag "input", como: email, cellphone,
     * search, etc... 
     */
    @Input() type: HTMLInputType = "text";
    /**
     * Evento usado para quando o campo é usado fora de um formulário (como em um campo
     * de pesquisa, por exemplo - isso acontece quando se deseja manter a estilização
     * do componente mas não usá-lo dentro de um formulário), para que a alteração no
     * valor do campo possa ser observada.
     */
    @Output() inputEvent = new EventEmitter<Event>();
    /**
     * Caso o parâmetro de entrada "abstractControl" tenha sido fornecido, e o campo esteja no
     * estado "touched", retorna a primeira mensagem de erro associada ao "abstractControl".
     */
    get error(): string {
        if(!this.abstractControl) return ""
        if(this.abstractControl.untouched) return ""

        let errorMessage: string = "";
        for(const errorCode in this.abstractControl.errors) {
            errorMessage = this.abstractControl.errors[errorCode];
            break;
        }

        return errorMessage;
    }
    /**
     * Chamado toda vez que o valor do campo muda, é usado para emitir o evento {@link inputEvent},
     * e então chama a implementação base, que é a função {@link onBaseChangeFn}
     * @param event É o evento emitido quando o valor de um campo muda (InputEvent)
     */
    formFieldOnChange(event: Event, isNumber: boolean = false): void {
        this.inputEvent.emit(event);
        this.onBaseChangeFn(event, isNumber);
    }
}
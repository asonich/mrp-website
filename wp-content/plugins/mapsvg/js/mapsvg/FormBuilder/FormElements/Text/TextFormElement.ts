import { FormElement } from "../FormElement.js";
import { FormBuilder } from "../../FormBuilder.js";
import { MapSVG } from "../../../Core/globals.js";
import { SchemaField } from "../../../Infrastructure/Server/SchemaField";

const $ = jQuery;

export class TextFormElement extends FormElement {
    searchType: string;
    searchFallback: boolean;
    placeholder: string;
    noResultsText: string;
    width: string;
    inputs: { text: HTMLInputElement };

    constructor(options: SchemaField, formBuilder: FormBuilder, external: { [key: string]: any }) {
        super(options, formBuilder, external);
        this.searchFallback = MapSVG.parseBoolean(options.searchFallback);
        this.searchType = options.searchType;
        this.width =
            this.formBuilder.filtersHide && !this.formBuilder.modal
                ? null
                : options.width || "100%";
        this.db_type = "varchar(255)";
    }

    setDomElements() {
        super.setDomElements();
        this.inputs.text = <HTMLInputElement>$(this.domElements.main).find('input[type="text"]')[0];
    }

    getSchema(): { [p: string]: any } {
        const schema = super.getSchema();
        schema.searchType = this.searchType;
        return schema;
    }

    setEventHandlers() {
        super.setEventHandlers();
        $(this.inputs.text).on("change keyup paste", (e) => {
            this.setValue(e.target.value, false);
            this.triggerChanged();
        });
    }

    setInputValue(value: string): void {
        this.inputs.text.value = value;
    }
}

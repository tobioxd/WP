"use strict";

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }
    fillIn(dictionary) {
        let filledTemplate = this.template;
        const regex = /{{(.*?)}}/g;
        let match = regex.exec(this.template);

        while (match !== null) {
            const key = match[1];
            const value = dictionary[key];
            filledTemplate = filledTemplate.replace(match[0], value);
            match = regex.exec(this.template);
        }

        return filledTemplate;
    }
}

window.TemplateProcessor = TemplateProcessor;

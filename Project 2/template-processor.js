'use strict';

function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dict) {
    let filledTemplate = this.template;

    for (const key in dict) {
        if (Object.prototype.hasOwnProperty.call(dict, key)) {
            const regex = new RegExp('{{' + key + '}}', 'g');
            filledTemplate = filledTemplate.replace(regex, dict[key]);
        }
    }

    // Replace any remaining {{property}} with an empty string
    filledTemplate = filledTemplate.replace(/{{\w+}}/g, '');

    return filledTemplate;
};

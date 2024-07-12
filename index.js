const fs = require("fs-extra");
const path = require("path");
const Handlebars = require("handlebars");

const generateTemplate = (name, outputPath, templateType) => {
    const templatePath = path.join(__dirname, "templates", `${templateType}.hbs`);
    const template = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = Handlebars.compile(template);

    const content = compiledTemplate({ name });

    const outputFilePath = path.join(outputPath, `${name}${templateType === "form" ? "Form" : ""}.tsx`);
    fs.outputFileSync(outputFilePath, content);

    console.log(`Generated ${path.basename(outputFilePath)} at ${outputFilePath}`);
};

module.exports = { generateTemplate };

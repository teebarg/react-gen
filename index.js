const fs = require("fs-extra");
const path = require("path");
const Handlebars = require("handlebars");

const generateTemplate = (name, outputPath, templateType) => {
    const templatePath = path.join(__dirname, "templates", `${templateType}.hbs`);
    const template = fs.readFileSync(templatePath, "utf8");
    const compiledTemplate = Handlebars.compile(template);

    const content = compiledTemplate({ name, lowerName: name.toLowerCase() });

    let outputFilePath;
    switch (templateType) {
        case "page":
            outputFilePath = path.join(outputPath, `${name}.tsx`);
            break;
        case "form":
            outputFilePath = path.join(outputPath, `${name}Form.tsx`);
            break;
        case "table":
            outputFilePath = path.join(outputPath, `TableData.tsx`);
            break;
        case "service":
            outputFilePath = path.join(outputPath, `${name.toLowerCase()}.service.ts`);
            break;
        case "model":
            outputFilePath = path.join(outputPath, `${name.toLowerCase()}.ts`);
            break;
        default:
            throw new Error(`Unknown template type: ${templateType}`);
    }

    fs.outputFileSync(outputFilePath, content);
    console.log(`Generated ${path.basename(outputFilePath)} at ${outputFilePath}`);
};

const generateAll = (name) => {
    generateTemplate(name, `./src/pages/${name}`, "page");
    generateTemplate(name, `./src/pages/${name}/components`, "form");
    generateTemplate(name, `./src/pages/${name}/components`, "table");
    generateTemplate(name, "./src/services", "service");
    generateTemplate(name, "./src/models", "model");
};

module.exports = { generateTemplate, generateAll };

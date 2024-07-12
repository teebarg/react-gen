#!/usr/bin/env node

const program = require("commander");
const { generateTemplate, generateAll } = require("../index");

program
    .version("1.0.2")
    .description("Generate React CRUD template")
    .option("-n, --name <name>", "Name of the component")
    .option("-o, --output <output>", "Output directory", process.cwd())
    .option("-t, --type <type>", "Template type (page, form, table, service, model or all)", "all")
    .action((options) => {
        if (options.type === "all") {
            generateAll(options.name, options.output);
        } else {
            generateTemplate(options.name, options.output, options.type);
        }
    });

program.parse(process.argv);

#!/usr/bin/env node

const program = require("commander");
const { generateTemplate } = require("../index");

program
    .version("1.0.1")
    .description("Generate React CRUD template and form")
    .option("-n, --name <name>", "Name of the component")
    .option("-o, --output <output>", "Output directory", process.cwd())
    .option("-t, --type <type>", "Template type (page or form)", "page")
    .action((options) => {
        generateTemplate(options.name, options.output, options.type);
    });

program.parse(process.argv);

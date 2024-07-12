# react-gen

A command-line tool to generate React CRUD (Create, Read, Update, Delete) templates and forms.

## Installation

You can install this package globally using npm:

```bash
npm install -g react-gen
```

## Usage

After installation, you can use the `generate-crud` command to create CRUD templates and forms.

### Generating all templates

```bash
generate-crud --name User --output ./src/components
```

This will generate all in the templates directory.

### Generating only a Page template

```bash
generate-crud --name User --output ./src/components --type page
```

This will generate a `User.tsx` file in the `./src/components` directory with a basic Page template.

### Generating only a Form template

```bash
generate-crud --name User --output ./src/components --type form
```

This will generate a `UserForm.tsx` file in the `./src/components` directory with a form template for creating and updating entities.

### Options

- `-n, --name <name>`: Name of the component (required)
- `-o, --output <output>`: Output directory (default: current working directory)
- `-t, --type <type>`: Template type, either 'page', 'form', 'table', 'service', 'model' or 'all' (default: 'all')

## Templates

### Page Template

The Page template includes:

- A main component for displaying a list of entities
- A loader function for fetching data
- Integration with react-router-dom for navigation and data loading
- Use of @tanstack/react-query for data fetching and caching

### Form Template

The form template includes:

- A form component for creating and updating entities
- Integration with react-hook-form for form handling
- Use of @tanstack/react-query for mutations
- Error handling and success notifications

## Customization

You can customize the templates by modifying the Handlebars template files in the `templates` directory:

- `page.hbs`: Template for Page components
- `form.hbs`: Template for form components
- `table.hbs`: Template for datatable components
- `service.hbs`: Template for service
- `model.hbs`: Template for model

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

# react--gen

A command-line tool to generate React CRUD (Create, Read, Update, Delete) templates and forms.

## Installation

You can install this package globally using npm:

```bash
npm install -g react-gen
```

## Usage

After installation, you can use the `generate-crud` command to create CRUD templates and forms.

### Generating a CRUD template

```bash
generate-crud --name User --output ./src/components --type crud
```

This will generate a `User.tsx` file in the `./src/components` directory with a basic CRUD template.

### Generating a Form template

```bash
generate-crud --name User --output ./src/components --type form
```

This will generate a `UserForm.tsx` file in the `./src/components` directory with a form template for creating and updating entities.

### Options

- `-n, --name <name>`: Name of the component (required)
- `-o, --output <output>`: Output directory (default: current working directory)
- `-t, --type <type>`: Template type, either 'crud' or 'form' (default: 'crud')

## Templates

### CRUD Template

The CRUD template includes:

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

- `crud.hbs`: Template for CRUD components
- `form.hbs`: Template for form components

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

# xlsx2json

A simple Node.js tool to convert Excel (XLSX) files to JSON format.

## Features
- Converts `.xlsx` files to `.json`.
- Easy to use from the command line or as a module.

## Usage

### 1. Install dependencies

```powershell
npm install
```

### 2. Run the converter

```powershell
node main.ts <input.xlsx> <output.json>
```

- `<input.xlsx>`: Path to the Excel file you want to convert.
- `<output.json>`: Path where the JSON output will be saved.

### 3. Example

```powershell
node main.ts data.xlsx output.json
```

## Project Structure
- `main.ts` - Main script for conversion logic
- `output.json` - Example output file
- `package.json` - Project metadata and dependencies

## Requirements
- Node.js (v16 or higher recommended)
- npm

## License
MIT

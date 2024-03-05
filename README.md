# gptscript JSON query tool

This tool is a simple command line tool to query json documents using jq. It is written in javascript and uses the node-jq package to install and run jq.

## Installation

```bash
git clone https://github.com/gptscript/json-query
cd json-query
npm install
```

## CLI Usage

To test this command out directly you can run:

```bash
node jq.js --query '.' --jsonpath ./package.json
```

this will output the local package.json file.

## gptscript usage

To use this tool in a gptscript you can use the following code:

```gptscript
tools: ./tool.gpt

What is the version specified in the package.json file
```

A more complex example:

```gptscript
tools: ./tool.gpt,sys.download

download https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json
find out the css values for darkviolet and the color blue
```

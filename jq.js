const jq = require('node-jq');
// Simple argument parsing function
function parseArgs() {
    const args = {};
    process.argv.slice(2).forEach((val, index, array) => {
        if (val.startsWith('--')) {
            const argName = val.substring(2);
            // Check if we are not at the last element and the next element doesn't start with '--'
            if (index < array.length - 1 && !array[index + 1].startsWith('--')) {
                // Directly assign the following value to the argument
                args[argName] = array[index + 1];
            }
        }
    });
    return args;
}

const args = parseArgs();

// Fallback to default values if arguments not provided
const filter = args.filter || '.';
const jsonPath = args.jsonpath;
const options = {
    input: 'file',
    output: 'json',
    slurp: args.optionSlurp === 'true'
};

jq.run(filter, jsonPath, options)
    .then((output) => {
        console.log(output);
    })
    .catch((err) => {
        console.error(err);
    });
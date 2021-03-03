module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('test', {
        description: 'test spec generator',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Name of the component to test'
            },
            {
                type: 'input',
                name: 'path',
                message: 'Relative path to components folder'
            },
        ],
        actions: [{
            type: 'add',
            path: 'tests/unit/{{path}}{{name}}.spec.js',
            templateFile: './plop-templates/specTemplate.hbs'
        }]
    });
};

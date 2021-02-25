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
        ],
        actions: [{
            type: 'add',
            path: 'tests/unit/{{name}}.spec.js',
            templateFile: './plop-templates/specTemplate.hbs'
        }]
    });
};

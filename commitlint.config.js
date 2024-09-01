// commitlint.config.js

module.exports = {
    extends: ['@commitlint/cli', '@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2, // level: error
            'always', // applicable condition
            [
                'feat',    // New feature
                'fix',     // Bug fix
                'docs',    // Documentation changes
                'style',   // Code style changes (formatting, missing semi colons, etc.)
                'refactor',// Code refactoring (neither fixes a bug nor adds a feature)
                'perf',    // Performance improvements
                'test',    // Adding missing tests or correcting existing tests
                'build',   // Changes affecting the build system or external dependencies
                'ci',      // Changes to CI configuration files and scripts
                'chore',   // Other changes that don’t modify src or test files
                'revert'   // Reverts a previous commit
            ]
        ],
        'subject-case': [
            2, // level: error
            'always', // applicable condition
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
    },
};

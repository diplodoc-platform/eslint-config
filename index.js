const match = (value, match) => value && value.match(match);

module.exports = {
    root: true,
    extends: [
        '@gravity-ui/eslint-config',
        match(process.env.ESLINT_ENV,  'client') && '@gravity-ui/eslint-config/client',
        process.env.npm_command && '@gravity-ui/eslint-config/prettier',
    ].filter(Boolean),
    parserOptions: {
        project: ["./tsconfig.json"]
    },
    rules: {
        'callback-return': 'off',
        'consistent-return': 'off',
        'no-implicit-globals': 'off',
        'no-param-reassign': 'off',
        '@typescript-eslint/no-shadow': 'off',
    },
};

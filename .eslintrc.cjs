const { getESLintConfig } = require('@applint/spec')

module.exports = getESLintConfig('react', {
  rules: {
    /** 不使用分号，减少代码量 */
    semi: ['error', 'never'],
    /** 不允许console.log, console.info */
    'no-console': ['error', { allow: ['warn', 'error'] }],
    /** 使用严格相等 */
    eqeqeq: ['error', 'always'],
    /** 后续function hook 组件为主，不做proptype校验 */
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    /** 屏蔽URL长度 */
    'max-len': [
      'warn',
      {
        ignoreUrls: true,
        ignoreTrailingComments: true,
        code: 200,
        tabWidth: 2,
      },
    ],
    /** 导入顺序检查 */
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '**/typings',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '**/*.scss',
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['ice', '.ice/index.ts'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
})

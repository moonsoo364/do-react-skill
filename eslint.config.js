import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      prettier: pluginPrettier
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          endOfLine: 'auto', // 또는 'lf', 'crlf', 'cr'
          printWidth: 80,
          bracketSpacing: true, //객체 리터럴 중괄호 양쪽에 공백 추가: { foo: bar }
          arrowParens: 'avoid', //화살표 함수의 매개변수가 1개일 땐 괄호 생략: x => x + 1
          trailingComma: 'none'
        }
      ]
    },
    extends: ['js/recommended']
  },
  pluginReact.configs.flat.recommended
]);

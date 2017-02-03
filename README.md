# eslint-plugin-retext

lint content using eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-retext`:

```
$ npm install eslint-plugin-retext --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-retext` globally.

## Usage

Add `retext` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "retext"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "retext/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






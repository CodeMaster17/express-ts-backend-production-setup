# This repo step by step explains how to start with nodejs production setup

## Initial setup

1. Initialize the repo

```
npm init -y
```

2. Install express

```
npm install express
```

3. Create `.gitignore` file and add node_modules

4. Create `index.js` file, and write any `console.log` to check for output

5. Update the scripts in `package.json`

   ```
    "scripts": {
        "start": "node index.js"
   },
   ```

## Husky setup

1. Install `husky` and `lint-staged` as devDependencies

   ```
   npm i husky lint-staged -D
   ```

2. Initialize `husky`

   ```
   npx husky init
   ```

=> A `.husky` folder would be created

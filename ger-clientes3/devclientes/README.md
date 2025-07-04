# devclientes

An Electron application with React and TypeScript

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Notes
#### PouchDB problems

- In case of node-gyp problem during pouchdb installation:
-1) Delete node_modules
-2) `npm install node-gyp@latest`
-3) `npm install`
- 4) If problems persist, try to remove pouchdb from package.json, repeat steps 1 to 3 and finally install pouchdb with `npm install pouchdb`

#### Electron-vite and React / React-Dom
- For some reason, when installing electron with electron-vite, react and react-dom lib will be installed as dev dependencies instead main dependencies; 
- 1) Remove them from dev dependencies and place into main dependencies at the end;
- 2) Insert them into core dependencies section at the end;
- 3) Run `npm install`
- If necessary, see **_PouchDB problems_** section to solve possible problems 

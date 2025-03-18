// this tells TypeScript to treat any imported .css file as a module
// without this, the main.tsx is giving an error about the css file not being a module
declare module '*.css'

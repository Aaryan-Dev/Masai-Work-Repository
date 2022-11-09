### Steps

1. Initialize project: `npm init -y`
2. Install typescript globally: `npm install -g typescript`
3. To check for the typescript version: `tsc -v`
4. To create a `src` folder, and create a `index.ts` file.
5. To create a script in package.json file, "build": "tsc --watch"
6. To create a `tsconfig.json` file, and copy the tsconfig data from the pre-class notes.
7. Write some typescript code in index.ts -> Save it -> Run `npm run build`
8. It will create a build folder, with the corresponding index.js file.

### Compilation V/s Transpilation

#### Compilation

- We write code -> Compiler -> Some other language
- High Level Language to some Low Level Language
- Low level languages are generally machine friendly/ machine language code: eg: binary, or bytecode.
- That generated is code is not human-readable (generally)
- C, C++, Go -> Compiler -> `.exe`

#### Transpilation

- From High Level language to another High Level language, via a transpiler
- The generated code is human-readable
- The generated code might go through another/or one more compilation step.
- <h1>Hello world<h1> - JSX
- React.createElement("h1", null, "hello world")
- from ES6 "const x = 1" to ES3 "var x = 1".

#### Interpreted

- Executed line by line, -> then it returns the output.

### Statically Typed Language V/s Dynamically Typed Language

#### Dynamically Typed Language

- The compiler doesn't know about the "types" at the compile time.
- let x = 1;
- let x = "Hello";
- Generally slower,
- JS, Python, Ruby, etc.
- Generally less safe.

#### Statically typed language

- The compiler knows the "types" at the compile time.
- Generally faster than Dynamically typed language
- C, C++, Go, Rust, Python, Java, TypeScript, etc.
- int x; string y;

#### TypeScript

- Statically typed language
- TypeScript -> Transpiler: `tsc` -> JavaScript
- Supeset of JS
- At the end it is just JavaScript.
- let x:string;
- let y:number;

### Is JavaScript a compiled language or interpreted language?

- Where is it running? -> It depends on the environment.
- JS can be both compiled and interpreted language as well.
- Google Chrome V8 -> Just in Time compilation, NodeJS, Deno, BraveBrowser -> Chromium -> V8

- console.log(x); // undefined. //
- let x = 10;

#### What, Why, How

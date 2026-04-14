# @krllc/old-react-bootstrap-types

TypeScript 6 compatible type definitions for [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) 0.32.

Drop-in replacement for `@types/react-bootstrap` that fixes subcomponent JSX usage (`Dropdown.Menu`, `Modal.Body`, etc.) and other breaking changes in TypeScript 6.

## Install

```bash
npm install -D @krllc/old-react-bootstrap-types
npm uninstall @types/react-bootstrap
```

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@krllc/old-react-bootstrap-types"]
  }
}
```

If you already have a `types` array, append to it. If you don't have one, adding it will disable automatic `@types/*` loading — include any other `@types` packages you rely on (e.g. `"types": ["node", "jest", "@krllc/old-react-bootstrap-types"]`).

## What was wrong with `@types/react-bootstrap`?

In TypeScript 6, `import * as X from './X'` on a module using `export = X` resolves to the module namespace rather than the class. The original `@types/react-bootstrap` used this pattern for `Dropdown` and `Breadcrumb` subcomponent imports, causing:

```
error TS2786: 'Dropdown.Menu' cannot be used as a JSX component.
```

This package consolidates all types into a single `declare module 'react-bootstrap'` file where class references are direct, avoiding the issue entirely. It also fixes:

- `React.ReactType` (removed) -> `React.ElementType`
- `React.Props<T>` (removed) -> `{ children?: React.ReactNode }`
- Custom `Omit`/`Diff` utilities -> built-in `Omit`
- `onToggle?: Function` conflicts with `HTMLProps`

## License

MIT

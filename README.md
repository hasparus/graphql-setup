Sup mate 👋

1. Press <kbd>.</kbd> to open this repo in GitHub Codespaces.
1. Take a look at _./graphql-codegen.yml_ and _./package.json_
1. Then check out _\*.gql_ files and the generated code in _\*.generated.ts_

   - I usually gitignore _\*\*/\*.generated.\*_, but I wanted
   - I format (and usually also run linter fix) in `"postcodegen"` script,
     because those files may be written by the computer, yet they'll be read by
     a human.

1. The project isn't very impressive, but if you want to play with it, you can
   run it with:

   - `pnpm install` - installs dependencies
   - `pnpm dev` - runs Vite development server

1. If you click the flower icon in the app, you'll notice React Query DevTools.

   - Those DevTools and a sensible cache are one of the main reasons for this
     setup.

1. We're defining our own GraphQL client _"fetcher"_ function for React Query
   hooks in _/src/gqlClient.ts_

   - All generated files will import this from _~/gqlClient_. As those generated
     files land next to their queries thanks to
     _@graphql-codegen/near-operation-file-preset_ we needed to configure a way
     for a convenient non-relative import.
     - Notice `compilerOptions.paths` in _tsconfig.json_ and the usage of
       `vite-tsconfig-paths` in _vite.config.ts_

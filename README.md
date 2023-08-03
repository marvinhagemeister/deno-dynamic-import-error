# Deno dynamic import stack trace issue

When there is a non statically analyzable dynamic import the stack traces are cut off. They don't point to the function that originally threw the error anymore.

## Steps to reproduce

1. Clone this repo
2. Run `deno run -A main.ts`

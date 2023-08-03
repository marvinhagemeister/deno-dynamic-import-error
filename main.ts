const url = new URL("indirect.ts", import.meta.url).href;
await import(url);

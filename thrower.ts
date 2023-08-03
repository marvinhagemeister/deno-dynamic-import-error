export async function start(base: string) {
  try {
    await Deno.readTextFile(new URL("non-existant.json", base));
  } catch (err) {
    console.log("Stack trace should point to Deno.readTextFile");
    throw err;
  }
}

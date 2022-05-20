import path from "path";
export async function wow() {
  console.log(path.join(__dirname, "ok"));
  return await Promise.resolve(3);
}

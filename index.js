import path from "path";

async function wow() {
  console.log(path.join(__dirname, "ok"));
  return await Promise.resolve(3);
}

(function () {
  wow();
})();

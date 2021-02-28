const fs = require("fs");
const path = require("path");
const { setupBuildTest } = require("../../test-utils");

describe("preexisting sourcemaps", () => {
  beforeAll(() => {
    setupBuildTest(__dirname);
  });

  it("uses the original source map", () => {
    expect(fs.readFileSync(path.join(__dirname, "build", "index.js.map"), "utf-8"))
      .toEqual(fs.readFileSync(path.join(__dirname, "index.js.map"), "utf-8"));
  });
});

const MahaLap = require("./maha-lap");
describe("test Maha-Lap", () => {
  test("test Terminal with Day ", () => {
    const result = MahaLap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
});

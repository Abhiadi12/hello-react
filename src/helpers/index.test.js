import { getLetterMatchCount } from "./index";

describe("getlettermatchCount test", () => {
  test("return 0 when there are no letter match", () => {
    const letterMatchCount = getLetterMatchCount("mango", "bird");
    expect(letterMatchCount).toBe(0);
  });
  test("return the correct count when there are some matching words", () => {
    expect(getLetterMatchCount("abhisek", "abhiraz")).toBe(4);
  });
});

import moxios from "moxios";
import { getSecreatWord, correctGuess } from "./index";

describe("getSecreatWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("secreatword return from server", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "pretty",
      });
    });
    return getSecreatWord().then((secreatWord) =>
      expect(secreatWord).toBe("pretty")
    );
  });
});

test("Should return CORRECT_GUESS as action type", () => {
  expect(correctGuess()).toStrictEqual({ type: "CORRECT_GUESS" });
});

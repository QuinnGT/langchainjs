import { test, describe, expect } from "@jest/globals";
import { AI21 } from "../ai21.js";

describe.skip("AI21", () => {
  test("test call", async () => {
    const ai21 = new AI21({});
    // @eslint-disable-next-line/@typescript-eslint/ban-ts-comment
    // @ts-expect-error unused var
    const result = await ai21.invoke(
      "What is a good name for a company that makes colorful socks?"
    );
    // console.log({ result });
  });

  test("test translation call", async () => {
    const ai21 = new AI21({});
    // @eslint-disable-next-line/@typescript-eslint/ban-ts-comment
    // @ts-expect-error unused var
    const result = await ai21.invoke(
      `Translate "I love programming" into German.`
    );
    // console.log({ result });
  });

  test("test JSON output call", async () => {
    const ai21 = new AI21({});
    // @eslint-disable-next-line/@typescript-eslint/ban-ts-comment
    // @ts-expect-error unused var
    const result = await ai21.invoke(
      `Output a JSON object with three string fields: "name", "birthplace", "bio".`
    );
    // console.log({ result });
  });

  test("should abort the request", async () => {
    const ai21 = new AI21({});
    const controller = new AbortController();

    await expect(() => {
      const ret = ai21.invoke("Respond with an extremely verbose response", {
        signal: controller.signal,
      });
      controller.abort();
      return ret;
    }).rejects.toThrow("AbortError: This operation was aborted");
  });

  test("throws an error when response status is not ok", async () => {
    const ai21 = new AI21({
      ai21ApiKey: "BAD_KEY",
    });

    await expect(ai21.invoke("Test prompt")).rejects.toThrow(
      "AI21 call failed with status code 401"
    );
  });
});

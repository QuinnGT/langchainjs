import { test } from "@jest/globals";
import { Writer } from "../writer.js";

test.skip("Test Writer", async () => {
  const model = new Writer({ maxTokens: 20 });
  // @eslint-disable-next-line/@typescript-eslint/ban-ts-comment
  // @ts-expect-error unused var
  const res = await model.invoke("1 + 1 =");
  // console.log(res);
}, 50000);

import { assertEquals } from "jsr:@std/assert";
import { parse_sequence } from "./main.ts";

const test_seq = (input: string, expected: string) => {
  assertEquals(expected, parse_sequence(input));
}

Deno.test("kkd", () => test_seq("kkd", "kdj"));
Deno.test("ddk", () => test_seq("ddk", "jfk"));
Deno.test("kdk", () => test_seq("kdk", "kfk"));
Deno.test("dkd", () => test_seq("dkd", "jdj"));
Deno.test("kkddk", () => test_seq("kkddk", "kdjfk"));
Deno.test("ddkkd", () => test_seq("ddkkd", "jfkdj"));
Deno.test("kkddkdkd", () => test_seq("kkddkdkd", "kdjfkfkf"));
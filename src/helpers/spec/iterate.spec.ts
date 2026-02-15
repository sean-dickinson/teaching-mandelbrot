import { describe, it, expect } from "vitest";
import { iterate } from "@/helpers/iterate";
import { complex } from "mathjs";

describe("iterate", () => {
  it("should return the correct result for a simple case", () => {
    // square of 0 is 0, plus c is just c
    const z = complex(0, 0);
    const c = complex(1, 0);
    const result = iterate(z, c);
    const expected = complex(1, 0);
    expect(result.equals(expected)).toBe(true);
  });

  it("should return the correct result for a more complex case", () => {
    const z = complex(1, 1);
    const c = complex(0, 0);
    const result = iterate(z, c);
    expect(result.re).toBeCloseTo(0);
    expect(result.im).toBeCloseTo(2);
  });
});

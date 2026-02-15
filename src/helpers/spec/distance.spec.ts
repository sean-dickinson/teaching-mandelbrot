import { it, describe, expect } from "vitest";
import { findDistanceFromZero } from "@/helpers/distance";
import { complex } from "mathjs";

describe("findDistanceFromZero", () => {
  it("should return 0 for the origin", () => {
    const value = complex(0, 0);
    const distance = findDistanceFromZero(value);
    expect(distance).toBe(0);
  });

  it("should return the correct distance for a point on the real axis", () => {
    const value = complex(3, 0);
    const distance = findDistanceFromZero(value);
    expect(distance).toBe(3);
  });

  it("should return the correct distance for a point on the imaginary axis", () => {
    const value = complex(0, 4);
    const distance = findDistanceFromZero(value);
    expect(distance).toBe(4);
  });

  it("should return the correct distance for a point in the complex plane", () => {
    const value = complex(3, 4);
    const distance = findDistanceFromZero(value);
    expect(distance).toBe(5);
  });
});

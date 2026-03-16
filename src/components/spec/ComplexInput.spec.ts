import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import ComplexInput from "../ComplexInput.vue";
import { complex } from "mathjs";

describe("ComplexInput", () => {
  it("updates model value on input", async () => {
    let modelValue = complex(0, 0);

    render(ComplexInput, {
      props: {
        modelValue,
        "onUpdate:modelValue": (val: any) => {
          modelValue = val;
        },
      },
    });

    const realInput = screen.getByLabelText(/real component/i);
    const imaginaryInput = screen.getByLabelText(/imaginary component/i);

    // Type into real input
    await userEvent.clear(realInput);
    await userEvent.type(realInput, "5");
    expect(modelValue.re).toBe(5);

    // Type into imaginary input
    await userEvent.clear(imaginaryInput);
    await userEvent.type(imaginaryInput, "-3");
    expect(modelValue.im).toBe(-3);

    // Clear real input (should become 0)
    await userEvent.clear(realInput);
    expect(modelValue.re).toBe(0);

    // Clear imaginary input (should become 0)
    await userEvent.clear(imaginaryInput);
    expect(modelValue.im).toBe(0);
  });
});

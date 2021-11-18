import {
  calcAreaSquare,
  calcAreaTriangle,
  CalcSphereVolume,
} from "./simpleMaths";

test("Area Square", () => {
  expect(calcAreaSquare(4)).toBe(16);
});

test("Area Triangle", () => {
  expect(calcAreaTriangle(4, 5)).toBe(10);
});

test("Volume Sphere", () => {
  expect(CalcSphereVolume(4)).toBe(150.768);
});

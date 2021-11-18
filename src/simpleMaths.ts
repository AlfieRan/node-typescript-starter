export function calcAreaSquare(sideLength: number): number {
  return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
  return (width * height) / 2;
}

// function makeBase(steps: number) {
//   const base: number[] = [];
//   for (let i = 0; i < steps; i++) {
//     base.push(FunkyDistribution(i, steps));
//   }
//   return base;
// }

// function FunkyDistribution(input: number, steps: number) {
//   const output = Math.abs(-(input ** 2) + steps);
//   return output;
// }

// export function funkyconsolething(cycles: number, steps: number) {
//   const base = makeBase(steps);
//   for (let x = 0; x < cycles; x++) {
//     for (let y = 0; y < steps; y++) {
//       const output: number[] = [];
//       for (let item = 0; item < base.length; item++) {
//         output.push(base[item] * base[Math.abs(steps - item)]);
//       }
//       console.log(output);
//     }
//   }
// }

export function CalcSphereVolume(radius: number) {
  let pi: number = 3.141;
  let volume: number = (radius ** 3 * (3 * pi)) / 4;
  return volume;
}

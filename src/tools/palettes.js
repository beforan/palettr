import chroma from "chroma-js";
import linspace from "linspace";

const lums = { max: 0.95, min: 0.05 };

/**
 * Create a range of 10 luminosities
 * with `base` in the middle.
 * @param {*} base
 */
const createLumRange = (base) => [
  ...linspace(lums.max, base, 6), // max - base, inclusive
  ...linspace(base, lums.min, 5).slice(1), // base - min, exclusive of base
];

/**
 * Create 10 shade levels of a color from its hex code.
 *
 * The original color will be at index 5
 */
const createShades = (hex) => {
  const [h, s, l] = chroma(hex).hsl();
  return createLumRange(l).map((lum) => chroma.hsl(h, s, lum).hex());
};

/**
 * Reducer for an array of colors
 * to return a dictionary with shade levels as keys (50 - x00)
 */
const reducer = (dictionary, color, i) => ({
  ...dictionary,
  [!i ? "50" : `${i}00`]: color,
});

const buildPalette = (shades) => shades.reduce(reducer, {});

/**
 * Build shaded palettes
 * for a dictionary of individual color values,
 * and return a dictionary of them.
 */
const buildPalettes = (colors) =>
  Object.keys(colors).reduce(
    (a, k) => ({
      ...a,
      [k]: { ...buildPalette(createShades(colors[k])), base: colors[k] },
    }),
    {}
  );

export { createShades, buildPalette, buildPalettes };

export default function getRandomLightColor(): string {
  const hue = Math.floor(Math.random() * 360); // Random hue from 0 to 360
  const saturation = 50 + Math.floor(Math.random() * 50); // Saturation from 50% to 100%
  const lightness = 70 + Math.floor(Math.random() * 30); // Lightness from 70% to 100% for light colors

  // Explicitly define the return type of hslToRgb as a tuple [number, number, number]
  const hslToRgb = (
    h: number,
    s: number,
    l: number
  ): [number, number, number] => {
    let r: number, g: number, b: number;
    h /= 360;
    s /= 100;
    l /= 100;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  // Function to convert RGB to HEX
  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  };

  const rgb: [number, number, number] = hslToRgb(hue, saturation, lightness);
  return rgbToHex(...rgb);
}

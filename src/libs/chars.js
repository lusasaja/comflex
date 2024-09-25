export const alphabet = "ABCDEFGHIJKLMNÑOPWRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";

export const numbers = "0123456789";

export const special = "@#$&%?!¿¡<>£€¥¢§";

export function vocalReplace(vocal) {
  const replace = {
    a: "@",
    e: "£",
    i: "1",
    o: "0",
    u: "¥"
  }
  
  return replace[vocal];
}

export function numberReplace(number) {
  const replace = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
  }
  
  return replace[number];
}
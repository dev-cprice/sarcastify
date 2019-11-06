export default function sarcastify(str = "") {
  let i = 0;

  return [...str]
    .map(c => {
      let result = c;
      if (/^[A-Za-z]$/.test(c)) {
        result = i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
        i++;
      }
      return result;
    })
    .join("");
}

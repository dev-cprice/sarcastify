export default function sarcastify(str = "") {
  return str
    .split(" ")
    .map((word, i) =>
      [...word]
        .map((c, j) => ((j + i) % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
        .join("")
    )
    .join(" ");
}

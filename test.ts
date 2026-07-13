import * as dotenv from "dotenv";

dotenv.config();

console.log(
  "ENV KEYS containing HYGRAPH:",
  Object.keys(process.env).filter((k) => k.includes("HYGRAPH")),
);
console.log("Total env var count:", Object.keys(process.env).length);

console.log(process.env.VITE_HYGRAPH_URL);

console.log("NODE ENV VARS:", Object.keys(process.env).sort().join(", "));

let speed = 100;
let increment = 150;

let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r~   ', '\r*   '];

for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, speed)
  speed += increment;
};


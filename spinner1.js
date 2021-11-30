setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 250);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 450);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r~   ');
}, 650);

setTimeout(() => {
  process.stdout.write('\r*   ');
}, 800);

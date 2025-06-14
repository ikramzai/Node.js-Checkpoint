const fs = require('fs');

// Create a file named welcome.txt with content "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');

// Read content from hello.txt and log it
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading hello.txt:', err);
  }
  console.log('Content of hello.txt:', data);
});

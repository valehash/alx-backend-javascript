console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`your name is: ${name}`);

  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  process.exit();
});

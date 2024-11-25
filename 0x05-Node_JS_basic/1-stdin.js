process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString();
  console.log(`Your name is: ${name}`);

  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }

  process.exit();
});

#!/usr/bin/env node

const util = require('util');
const exec = util.promisify(require('child_process').exec);

(async () => {
  let files;
  try {
    const { stdout } = await exec('git diff --staged --name-only');
    files = stdout;
  } catch (err) {
    console.error('Could not get staged files');
    process.exit(5);
  }

  if (!files.includes('package.json')) {
    console.info('Nothing changed on package.json or not staged');
    process.exit(0);
  }

  try {
    await exec('yarn install --frozen-lockfile');
    console.info('Lockfile is up-to-date or does not exists');
    process.exit(0);
  } catch (err) {
    if (!err.stderr.includes('lockfile needs to be updated')) {
      console.error('Could not check lockfile');
      process.exit(5);
    }
  }

  try {
    console.log('Updating lockfile');
    await exec('yarn install --non-interactive');
    await exec('git add yarn.lock');
    console.log('Successfully updated and staged lockfile');
    process.exit(0);
  } catch (err) {
    console.error('Could not update lockfile');
    process.exit(5);
  }
})();

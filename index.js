// const util = require('util');
const { exec } = require('child_process');
// const execP = util.promisify(exec);
const defaults = {
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: 'SIGTERM',
  cwd: null,
  env: null
};

// exports.test1 = () => {
//   exec('cat *.js bad_file | wc -l', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.log(`stderr: ${stderr}`);
//   });
// }


exports async function lsAll() {
  const { stdout, stderr } = await execP('ls -al');
  console.log('stdout:\n', stdout.split('\n').map(el => {
    if(el[0] === 'd' || el[0] === '-') {
      let aux = el.split(' ');
      return {
        name: aux[8],
        lastMod: aux.slice(5,8),
        size: aux[4],
        user: aux[2],
        group: aux[3],
        permissions: aux[0],
        unknown: aux[1]

      };
    }
  }).filter(el => el));
  console.log('stderr:\n', stderr);
}

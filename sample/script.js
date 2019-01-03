require('dotenv').config()
const path = require('path')
const { exec } = require('child_process')

const industryStandard = path.join(__dirname, '../sample/dump.sql')

var runSqlScript = function (file, callback) {
  const rebuild_db
    = 'mysql -u ' +
    process.env.DB_USERNAME +
    ' -h ' +
    process.env.HOST +
    ' -p' +
    process.env.DB_PASSWORD +
    ' ' +
    process.env.DB_DATABASE +
    ' < ' +
    file

  console.log('Run script: ', rebuild_db)

  exec(rebuild_db, function (error, stdout, stderr) {
    if (error !== null) {
      console.log('Rebuild Error: ' + error);
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      process.exit(1);
      return;
    }
    console.log('Successfully Rebuild Database using: ');
    console.log('   ' + file);
    callback()
  })

}


module.exports = function rebuild() {
  runSqlScript(industryStandard, function () {
    process.exit(0)
  })
}

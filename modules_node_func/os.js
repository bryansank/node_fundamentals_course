function main(){
    const os = require('os');
    // console.log(os.arch());
    console.log(os.platform());
    console.log(os.cpus());
    console.log(os.freemem() / 1024 / 1024 / 1024)
    console.log((os.totalmem() / 1024 / 1024 / 1024))
    console.log(os.homedir())
    console.log(os.tmpdir())
    console.log(os.hostname())
    console.log(os.networkInterfaces())
}

module.exports = {main}
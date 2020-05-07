const os = require('os')

console.log('系统中的默认存放临时文件的目录： '+os.tmpdir());

console.log('获取计算机名称： '+os.hostname());

console.log('获取操作系统类型： '+os.type());

console.log('获取操作系统平台： '+os.platform());

console.log('获取CPU架构： '+os.arch());
console.log('获取操作系统版本号： '+os.release());

console.log('获取系统当前运行的时间： '+os.uptime())

console.log('系统总内存量： '+(os.totalmem()/1024/1024/1024).toFixed(1)+'G')
 function config () {
    this.header = '个人简历';
};
var configProto = config.prototype;
configProto.init = function(pramas){
    console.log(this.header)
}
module.exports = config;

function startOS(){//操作系统初始化
    clearInterval(update_loadFile_interval);

}
function renderFrame(){
    //渲染一帧到canvas(加载完成之后的渲染函数主逻辑)
    
}
function update(){
    //主逻辑,自文件加载完成,会被不停调用
    renderFrame();
}
function loadPageToLoginPage(){
    //先预备着
}
var update_system_interval = setInterval(update,updateTime);
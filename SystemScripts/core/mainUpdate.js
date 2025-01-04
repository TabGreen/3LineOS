
var update_system_init_interval;
function initOS(){//操作系统初始化
    clearInterval(update_loadFile_interval);
    tlOS.state = 'init';
    update_system_init_interval = setInterval(update_init,updateTime);
}
function renderFrame_init(){
    bufferEl.width = cvsEL.width;
    bufferEl.height = cvsEL.height;
    //渲染一帧到canvas(加载完成之后的渲染函数主逻辑)
    buffer.clearRect(0,0,bufferEl.width,bufferEl.height);
    //先绘制一个黑屏
    buffer.fillStyle = defaultCloseColor;
    buffer.fillRect(0,0,bufferEl.width,bufferEl.height);

    renderFrame_loadFile(1,0,0,false,true);

    ctx.drawImage(bufferEl,0,0);
}
function update_init(){
    //主逻辑,自文件加载完成,会被不停调用
    renderFrame_init();
}
function loadPageToLoginPage(){
    //先预备着
}
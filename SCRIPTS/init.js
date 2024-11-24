//获取HTML元素以及ctx
var cvsEL = document.getElementById("canvas");
var ctx = cvsEL.getContext("2d");
var buffer = document.createElement('canvas');

window.addEventListener('resize',setCVSsize);

function setCVSsize(e){
    //针对浏览器窗口大小变化时使用更新的函数
    cvsEL.width = window.innerWidth;
    cvsEL.height = window.innerHeight;
    if(threelineos.page=='loading'){
        renderFrame_loadFile();
    }else{
        renderFrame();
    }
}
function update_loadFile(load_state,progress){
    //加载文件时使用更新数据的函数
    renderFrame_loadFile();
    //如果加载完成,则取消Interval
    if(loadPage.load_state){
        clearInterval(update_loadFile_interval);
    }

}
function renderFrame_loadFile(progress){
    //加载文件时使用渲染的函数
    //黑色背景
    buffer.width = cvsEL.width;
    buffer.height = cvsEL.height;
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,buffer.width,buffer.height);
}
function renderFrame(){
    //渲染一帧到canvas(加载完成之后的渲染函数主逻辑)
    
}
function update(){
    //主逻辑,自文件加载完成,会被不停调用
}


var loadPage = {//"加载"页面的数据
    load_state:0,
    progress:0,
}
var threelineos = {//"操作系统"的数据
    page:'loading',
}

var update_loadFile_interval = setInterval(update_loadFile,100);
setCVSsize();
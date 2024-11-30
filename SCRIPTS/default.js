//定义常量
var bufferList = {};/*程序运行过程中,会用到大量buffer,为防止混淆,
这里可以由不同函数自行添加CVS或CTX*/

bufferList.drawICOBufferEl = document.createElement("canvas");
bufferList.drawICOBuffer = bufferList.drawICOBufferEl.getContext("2d");
function drawICO(width,height){
    //绘制图标,并返回dataURL
    bufferList.drawICOBufferEl.width = width;
    bufferList.drawICOBufferEl.height = height;

    //先作为测试,绘制一个方块
    bufferList.drawICOBuffer.clearRect(0,0,width,height);
    bufferList.drawICOBuffer.fillStyle = "#fff";
    bufferList.drawICOBuffer.fillRect(0,0,width,height);
    return bufferList.drawICOBufferEl.toDataURL('image/png');
}
bufferList.drawProgBarBufferEl = document.createElement("canvas");
bufferList.drawProgBarBuffer = bufferList.drawProgBarBufferEl.getContext("2d");
function drawProgressBar(width,height,progress){
    //绘制进度条,并返回dataURL
    bufferList.drawProgBarBufferEl.width = width;
    bufferList.drawProgBarBufferEl.height = height;
    bufferList.drawProgBarBuffer.clearRect(0,0,width,height);
    bufferList.drawProgBarBuffer.fillStyle = "#fff";
    bufferList.drawProgBarBuffer.fillRect(0,0,width,height);
    return bufferList.drawProgBarBufferEl.toDataURL('image/png');

}
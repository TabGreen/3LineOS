//定义常量
var bufferList = {};/*程序运行过程中,会用到大量buffer,为防止混淆,
这里可以由不同函数自行添加CVS或CTX*/

bufferList.drawICOBufferEl = document.createElement("canvas");
bufferList.drawICOBuffer = bufferList.drawICOBufferEl.getContext("2d");
function drawICO(width,height){
    bufferList.drawICOBufferEl.width = width;
    bufferList.drawICOBufferEl.height = height;

    //先作为测试,绘制一个方块
    bufferList.drawICOBuffer.clearRect(0,0,width,height);
    bufferList.drawICOBuffer.fillStyle = "#fff";
    bufferList.drawICOBuffer.fillRect(0,0,width,height);
    //return bufferList.drawICOBufferEl.toDataURL('image/png');
}
bufferList.drawProgBarBufferEl = document.createElement("canvas");
bufferList.drawProgBarBuffer = bufferList.drawProgBarBufferEl.getContext("2d");
function drawProgressBar(width,height,progress){
    //绘制进度条,并返回dataURL
    const inset = 1.5; // 可以根据需要调整这个值
    //(防止图形边框与画布边框重合)

    let lightColor = '#fff';
    bufferList.drawProgBarBufferEl.width = width;
    bufferList.drawProgBarBufferEl.height = height+inset;
    bufferList.drawProgBarBuffer.clearRect(0,0,width,height);
// 1. 绘制进度-方块
    bufferList.drawProgBarBuffer.fillStyle = lightColor;
    bufferList.drawProgBarBuffer.fillRect(inset,inset,Math.floor((width-inset*2)*progress),height-inset*2);

// 2. 绘制进度-把没用的地方填充为黑色
    //清除左边圆角
    bufferList.drawProgBarBuffer.beginPath();
    bufferList.drawProgBarBuffer.arc(
        height / 2,
        height / 2,
        (height / 2) - inset,
        Math.PI / 2,
        3 * Math.PI / 2,
        false
    );
    bufferList.drawProgBarBuffer.lineTo(0,inset);
    bufferList.drawProgBarBuffer.lineTo(0,height-inset);
    bufferList.drawProgBarBuffer.closePath();
    let c = defaultCloseColor;
    bufferList.drawProgBarBuffer.fillStyle = c;
    bufferList.drawProgBarBuffer.stroke();
    bufferList.drawProgBarBuffer.fill();
    //清除右边圆角
    bufferList.drawProgBarBuffer.beginPath();
    bufferList.drawProgBarBuffer.arc(
        width - height / 2,
        height / 2,
        (height / 2) - inset, // 减少半径以实现内缩
        -Math.PI / 2,
        Math.PI / 2,
        false
    );
    bufferList.drawProgBarBuffer.lineTo(width,height-inset);
    bufferList.drawProgBarBuffer.lineTo(width,inset);
    bufferList.drawProgBarBuffer.closePath();
    c = defaultCloseColor;
    bufferList.drawProgBarBuffer.fillStyle = c;
    bufferList.drawProgBarBuffer.stroke();
    bufferList.drawProgBarBuffer.fill();
    //delete c;
// 3. 绘制进度条边框
    // 设置路径
    bufferList.drawProgBarBuffer.beginPath();

    // 绘制左边的半圆
    bufferList.drawProgBarBuffer.arc(
        height / 2,
        height / 2,
        (height / 2) - inset, // 减少半径以实现内缩
        Math.PI / 2,
        3 * Math.PI / 2,
        false
    );
    // 绘制直线至右边
    bufferList.drawProgBarBuffer.lineTo(width-height/2-inset,inset);
    bufferList.drawProgBarBuffer.arc(
        width - height / 2,
        height / 2,
        (height / 2) - inset, // 减少半径以实现内缩
        -Math.PI / 2,
        Math.PI / 2,
        false
    );
    bufferList.drawProgBarBuffer.lineTo(height / 2, height - inset);

    // 关闭路径
    bufferList.drawProgBarBuffer.closePath();

    // 绘制填充
    //bufferList.drawProgBarBuffer.fillStyle = "#fff";
    //bufferList.drawProgBarBuffer.fill();

    // 绘制边框
    //为边框加入渐变(测试)
    const gradient = bufferList.drawProgBarBuffer.createLinearGradient(0, 0, width, 0);
    let g = defaultGradientColor;
    gradient.addColorStop(0,`rgb(${g[0][0]},${g[0][1]},${g[0][2]})`);
    gradient.addColorStop(1,`rgb(${g[1][0]},${g[1][1]},${g[1][2]})`);
    bufferList.drawProgBarBuffer.strokeStyle = gradient;

    bufferList.drawProgBarBuffer.lineWidth = 2;
    bufferList.drawProgBarBuffer.stroke();

    // 返回数据URL
    //return bufferList.drawProgBarBufferEl.toDataURL('image/png');

}
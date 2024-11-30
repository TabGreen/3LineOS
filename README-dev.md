# JS文件加载顺序
1. default.js 默认文件
2. init.js 初始化设置
3. load.js 加载文件


# 全局函数
- renderFrame 渲染一帧 (init.js)

# 全局变量
- cvsEL(init.js)
- ctx(init.js)
- bufferEl(init.js)
- buffer(init.js)
- bufferList(default.js)*程序运行过程中,会用到大量buffer,为防止混淆,这里可以由不同函数自行添加CVS或CTX*
# 进度
1. 实现canvas自动适应浏览器窗口大小,并在窗口变化时渲染一帧 (完成✅)
2. 实现加载文件并显示进度条
    1. 显示进度条位置(完成✅)
    2. 绘制空进度条,实现绘制函数(未完成❌)
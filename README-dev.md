# JS文件加载顺序
1. variables.js 全局变量
2. default.js 默认脚本文件,包含一些变量和函数
3. init.js 初始化设置,加载页面外观
4. load.js 加载文件

# 全局变量以及函数(函数后以()做标记)
- variables.js
    - defaultGradientColor
    - defaultCloseColor
    - updateTime
- default.js
    - bufferList*程序运行过程中,会用到大量buffer,为防止混淆,这里可以由不同函数自行添加CVS或CTX*
    - bufferList.drawICOBufferEl
    - bufferList.drawICOBuffer
    - bufferList.drawProgBarBufferEl
    - bufferList.drawProgBarBuffer

    - drawICO(width, height)
    - drawProgressBar(width, height, progress)
- init.js
    - cvsEL
    - ctx
    - bufferEl
    - buffer
    - loadPage = {
        - load_state
        - progress
        - iconWidth
        - iconMargin
        - progressBarWidth
        - progressBarHeight
        - ScaleFactor_progBarMarginTop
        - ScaleFactor_ICONAreaMarginBottom
    }
    - loadPage_data = {
        - progress
    }
    - setCVSsize(e)
    - update_loadFile()
    - renderFrame_loadFile(progress)
    - renderFrame() 渲染一帧
# 进度
1. 实现canvas自动适应浏览器窗口大小,并在窗口变化时渲染一帧 (完成✅)
2. 实现加载文件并显示进度条
    1. 显示进度条位置(完成✅)
    2. 绘制空进度条,实现绘制函数(完成✅)
    3. 加载文件(未完成❎)
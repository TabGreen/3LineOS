function loadWorkers(){
    //加载所有工作进程
    workerList = [];
    for(let i=0;i<workerNumber;i++){
        workerList.push(new Worker(codeRunnerPath));
        workerList[i].addEventListener('message',(e)=>{
            handleWorkerMessage(e.data);
        });
    }
}
function handleWorkerMessage(data){
    //console.log(data);
}
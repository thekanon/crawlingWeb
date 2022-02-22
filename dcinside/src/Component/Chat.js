//현재 가장 마지막 행
let lastRowStr = false
let textArray = ""
function example(v) {
    return new Promise(function (resolve, reject) {
        setTimeout(_ => {
            console.log(v + '번')
            readTextFile()
            resolve()
        }, 5000)
    });
}

async function log() {
    for (var i = 0; i < 100; i++) {
        await example(i);
    }
}
function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "python/theqoo_woker.txt", true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            var allText = rawFile.responseText.replaceAll("\r", "").split("\n");
            //화면에 채팅내용 출력
            //현재 화면에 존재하지 않는 데이터만 출력
            let printFlag = false
            let printText = []
            for (var line = 0; line < allText.length - 1; line++) {
                if (printFlag) {
                    console.log(allText[line])
                    printText.push(allText[line])
                }
                if (allText[line].indexOf(lastRowStr) != -1)
                    printFlag = true
            }

            if (!printFlag) {
                for (var line = allText.length - 20; line < allText.length - 1; line++) {
                    console.log(allText[line])
                    printText.push(allText[line])
                }
            }
            // 마지막 행 저장
            lastRowStr = allText[allText.length - 2]
            textArray = [textArray, ...printText].join("\n")
            console.log(textArray)
        }
    }
    rawFile.send();
}
function Chat() {
    log()
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>
    </div>
}
export default Chat;
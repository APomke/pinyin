document.getElementById('recognizeBtn').addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const pinyinResult = PinyinHelper.convertToPinyinString(inputText, ' ', PinyinFormat.WITH_TONE_MARK);
    const outputElement = document.getElementById('output');
    outputElement.textContent = pinyinResult;
    outputElement.style.display = 'inline'; // 显示结果区域
});
document.getElementById('recognizeBtn2').addEventListener('click', function() {
    const inputText = document.getElementById('input2').value;
    const pinyinResult = PinyinHelper.convertToPinyinString(inputText, ' ', PinyinFormat.WITHOUT_TONE);
    const outputElement = document.getElementById('output2');
    outputElement.textContent = pinyinResult;
    outputElement.style.display = 'inline'; // 显示结果区域
});
document.getElementById('recognizeBtn3').addEventListener('click', function() {
    const inputText = document.getElementById('input3').value;
    const pinyinResult = PinyinHelper.convertToPinyinString(inputText, ' ', PinyinFormat.FIRST_LETTER);
    const outputElement = document.getElementById('output3');
    outputElement.textContent = pinyinResult;
    outputElement.style.display = 'inline'; // 显示结果区域
});


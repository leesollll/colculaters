// script.js

function 더하기() {
    // 입력된 숫자 가져오기
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // 숫자가 유효한지 확인
    if (!isNaN(num1) && !isNaN(num2)) {
        // 덧셈 수행
        var 결과 = num1 + num2;

        // 결과를 HTML에 표시
        document.getElementById('결과').innerText = '결과: ' + 결과;
    } else {
        // 유효하지 않은 숫자일 경우 알림
        alert('올바른 숫자를 입력하세요.');
    }
}

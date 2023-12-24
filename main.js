const readline = require('readline-sync');

console.log(` ██████╗ ██╗   ██╗██╗███████╗     ██████╗  █████╗ ███╗   ███╗███████╗
██╔═══██╗██║   ██║██║╚══███╔╝    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║   ██║██║   ██║██║  ███╔╝     ██║  ███╗███████║██╔████╔██║█████╗  
██║▄▄ ██║██║   ██║██║ ███╔╝      ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝╚██████╔╝██║███████╗    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝`);

const quizs = [
    {
        question: 'あなたは人間ですか？',
        options: ['はい!', 'んー微妙！', 'いいえ！'],
        correctAnswer: 'いいえ！',
    },
    {
        question: 'あなたの右手にはドラゴンが宿っていますか？',
        options: ['yes', 'fuck!', 'no'],
        correctAnswer: 'yes',
    },
];

function askQuestion(index) {
    if(index === quizs.length) {
        console.log('クイズ終了！');
        return;
    }
    const currentQuiz = quizs[index];
    console.log(currentQuiz.question);
    currentQuiz.options.forEach((option, i) => {
        console.log(`${i +1}.${option}`);
    });
    const answer = readline.question('回答を選んでください[1,2,3]: ');
    const selectedOption = currentQuiz.options[parseInt(answer) - 1];
    if(selectedOption === currentQuiz.correctAnswer) {
        console.log('正解です、お見事！');
    }else {
        console.log(`不正解です、正解は: ${currentQuiz.correctAnswer}でした。`);
    }
    askQuestion(index + 1);
}
askQuestion(0);
readline.keyInPause();
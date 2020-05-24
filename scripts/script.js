function calcRequiredGrade(target, current, finalWeight) {
    if (arguments[0] === 'ERROR') {return 'ERROR'}

    return ((target - current * (1 - finalWeight)) / finalWeight);
}

function grabValues() {
    const current = +(document.querySelector('#current').value) / 100;
    const finalWeight = +(document.querySelector('#final-weight').value) / 100;
    const target = +(document.querySelector('#target').value) / 100;

    if (!(target) || !(current) || !(finalWeight)) {return 'ERROR'}

    return [target, current, finalWeight];
}

function createMessage(requiredGrade) {
    const requiredGradePercent = (requiredGrade * 100).toFixed(2);

    let message = `Looks you'll need to get atleast a ${requiredGradePercent}% on your final.`;

    if (requiredGrade <= 0.5) {message = 'Yay! You\'ve got your work cut out for you! ' + message}
    if (requiredGrade >= 0.9 && requiredGrade < 1) {message = 'Wow! Good luck! ' + message}
    if (requiredGrade >= 1) {message = 'YIKES! ' + message}
    if (requiredGrade === 'ERROR' || !(requiredGrade)) {message = 'Hmm, looks like something went wrong...'}

    return message;
}

function runCalc() {
    const message = createMessage(calcRequiredGrade(...grabValues()))

    const messageContainer = document.querySelector('#message');
    messageContainer.textContent = message;
}
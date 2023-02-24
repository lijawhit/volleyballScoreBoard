let settingsIcon = document.querySelector('.settingsIcon');
let adjustmentBtnsIconOff = document.querySelector('.adjustmentBtnsIconOff');
let adjustmentBtnsIconOn = document.querySelector('.adjustmentBtnsIconOn');
let notesIcon = document.querySelector('.notesIcon');
let resetIcon = document.querySelector('.resetIcon');
let body = document.querySelector('body');
let leftScore = document.querySelector('.leftScore');
let rightScore = document.querySelector('.rightScore');
let leftNumber = document.querySelector('.leftNumber');
let rightNumber = document.querySelector('.rightNumber');
let applyBtn = document.querySelector('#applyBtn');
let resetBtn = document.querySelector('#resetBtn');
let settingsView = document.querySelector('.settingsView');
let notesView = document.querySelector('.notesView');
let leftAdjustments = document.querySelector('.leftAdjustments');
let rightAdjustments = document.querySelector('.rightAdjustments');

leftNumber.innerText = 0;
rightNumber.innerText = 0;

adjustmentBtnsIconOff.classList.add('on');
adjustmentBtnsIconOn.classList.add('off');
settingsView.classList.add('off');
notesView.classList.add('off');

resetIcon.classList.add('off');

// leftAdjustments.classList.add('on');
// rightAdjustments.classList.add('on');
// body.classList.add('bodySmall')
// adjustmentBtnsIconOn.classList.remove('off')
// adjustmentBtnsIconOn.classList.add('on')
// adjustmentBtnsIconOff.classList.remove('on')
// adjustmentBtnsIconOff.classList.add('off')



let a = 0;
let b = 0;
let max = 99;
let min = 0;
let adj = 0;
let set = 0;
let not = 0;
let LIKeyV = 7;
let LDKeyV = 4;
let RIKeyV = 9;
let RDKeyV = 6;

function leftScoreIncrease() {
    if(a < max){
        a++;
        a = (a < max) ? a : a;
        leftNumber.innerText = a;
    };
};

function leftScoreDecrease() {
    if(a > min){
        a--;
        a = (a < min) ? a : a;
        leftNumber.innerText = a;
    };
}

function rightScoreIncrease() {
    if(b < max){
        b++;
        b = (b < max) ? b : b;
        rightNumber.innerText = b;
    };
};

function rightScoreDecrease() {
    if(b > min){
        b--;
        b = (b < min) ? b : b;
        rightNumber.innerText = b;
    };
};

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    }); 

window.addEventListener('keydown', (event) => {
    if (event.key === LIKeyV || event.key === '7' || event.key === 'ArrowUp') {
        leftScoreIncrease();
    }   else if (event.key === LDKeyV || event.key === '4' || event.key === 'ArrowDown'){
            leftScoreDecrease();
        }   else if (event.key === RIKeyV || event.key === '9' || event.key === 'ArrowRight') {
                rightScoreIncrease();
            }   else if (event.key === RDKeyV || event.key === '6' || event.key === 'ArrowLeft') {
                    rightScoreDecrease();
                }  
});


function settingsToggle() {
    if (set === 0 && adj === 0) {
        // console.log('1 - set OFF and adj OFF')
        settingsView.classList.remove('off');
        leftScore.classList.add('off');
        rightScore.classList.add('off');
        // resetIcon.classList.add('off');
        adjustmentBtnsIconOff.classList.remove('on');
        adjustmentBtnsIconOff.classList.add('off');
        notesIcon.classList.add('off');
        set = 1
        adj = 0
        // console.log('2 - set ON and adj OFF')
    } else if (set === 0 && adj === 1) {
            // console.log('1 - set OFF and adj ON')
            settingsView.classList.remove('off');
            leftScore.classList.add('off');
            rightScore.classList.add('off');
            leftAdjustments.classList.remove('on');
            rightAdjustments.classList.remove('on');

            // resetIcon.classList.add('off');
            adjustmentBtnsIconOn.classList.remove('on');
            adjustmentBtnsIconOn.classList.add('off');
            notesIcon.classList.add('off');
            set = 1
            adj = 1
            // console.log('1 - set ON and adj ON')
        }   else if (set === 1 && adj === 0) {
                // console.log('1 - set ON and adj OFF')
                settingsView.classList.add('off');
                leftScore.classList.remove('off');
                rightScore.classList.remove('off');
                leftAdjustments.classList.remove('off');
                rightAdjustments.classList.remove('off');

                // resetIcon.classList.remove('off');
                adjustmentBtnsIconOff.classList.remove('off');
                adjustmentBtnsIconOff.classList.add('on');
                notesIcon.classList.remove('off');
                set = 0
                adj = 0
                // console.log('1 - set OFF and adj OFF')
            }  else if (set === 1 && adj === 1) {
                    // console.log('1 - set ON and adj ON')
                    settingsView.classList.add('off');
                    leftScore.classList.remove('off');
                    rightScore.classList.remove('off');
                    leftAdjustments.classList.add('on');
                    rightAdjustments.classList.add('on');
                    // resetIcon.classList.remove('off');
                    adjustmentBtnsIconOn.classList.remove('off');
                    notesIcon.classList.remove('off');
                    set = 0
                    adj = 1
                    // console.log('1 - set OFF and adj ON')
                };
    
    deApply()
    deReset()
};

function notesToggle() {
    if (not === 0 && adj === 0) {
        // console.log('1 - set OFF and adj OFF')
        notesView.classList.remove('off');
        leftScore.classList.add('off');
        rightScore.classList.add('off');
        // resetIcon.classList.add('off');
        adjustmentBtnsIconOff.classList.remove('on');
        adjustmentBtnsIconOff.classList.add('off');
        settingsIcon.classList.add('off');
        not = 1
        adj = 0
        // console.log('2 - set ON and adj OFF')
    } else if (not === 0 && adj === 1) {
            // console.log('1 - set OFF and adj ON')
            notesView.classList.remove('off');
            leftScore.classList.add('off');
            rightScore.classList.add('off');
            leftAdjustments.classList.remove('on');
            rightAdjustments.classList.remove('on');

            // resetIcon.classList.add('off');
            adjustmentBtnsIconOn.classList.remove('on');
            adjustmentBtnsIconOn.classList.add('off');
            settingsIcon.classList.add('off');
            not = 1
            adj = 1
            // console.log('1 - set ON and adj ON')
        }   else if (not === 1 && adj === 0) {
                // console.log('1 - set ON and adj OFF')
                notesView.classList.add('off');
                leftScore.classList.remove('off');
                rightScore.classList.remove('off');
                leftAdjustments.classList.remove('off');
                rightAdjustments.classList.remove('off');

                // resetIcon.classList.remove('off');
                adjustmentBtnsIconOff.classList.remove('off');
                adjustmentBtnsIconOff.classList.add('on');
                settingsIcon.classList.remove('off');
                not = 0
                adj = 0
                // console.log('1 - set OFF and adj OFF')
            }  else if (not === 1 && adj === 1) {
                    // console.log('1 - set ON and adj ON')
                    notesView.classList.add('off');
                    leftScore.classList.remove('off');
                    rightScore.classList.remove('off');
                    leftAdjustments.classList.add('on');
                    rightAdjustments.classList.add('on');
                    // resetIcon.classList.remove('off');
                    adjustmentBtnsIconOn.classList.remove('off');
                    settingsIcon.classList.remove('off');
                    not = 0
                    adj = 1
                    // console.log('1 - set OFF and adj ON')
                };
};

function adustmentBtnsToggle() {
    if (adj === 0) {
        leftAdjustments.classList.add('on');
        rightAdjustments.classList.add('on');
        body.classList.add('bodySmall')
        adjustmentBtnsIconOn.classList.remove('off')
        adjustmentBtnsIconOn.classList.add('on')
        adjustmentBtnsIconOff.classList.remove('on')
        adjustmentBtnsIconOff.classList.add('off')
        adj = 1
    }   else if (adj === 1){
        leftAdjustments.classList.remove('on');
        rightAdjustments.classList.remove('on');
        body.classList.remove('bodySmall')
        adjustmentBtnsIconOff.classList.remove('off')
        adjustmentBtnsIconOff.classList.add('on')
        adjustmentBtnsIconOn.classList.remove('on')
        adjustmentBtnsIconOn.classList.add('off')
        adj = 0
    };
};

function maxCount(){
    let maxNumber = document.getElementById('max').value;

    console.log(maxNumber)
    if (maxNumber == "" || maxNumber == null) {
        maxNumber = 99
    } else if (a > maxNumber || b > maxNumber) {
        reset()
        maxNumber = maxNumber
        } 

    max = maxNumber
}

function backColor() {
    let backColor = document.getElementById('backColor').value
    body.style.backgroundColor = backColor;
}

function keyAssignment() {
    let LIKey = document.getElementById('LIKey').value;
    let LDKey = document.getElementById('LDKey').value;
    let RIKey = document.getElementById('RIKey').value;
    let RDKey = document.getElementById('RDKey').value;

    LIKeyV = LIKey;
    LDKeyV = LDKey;
    RIKeyV = RIKey;
    RDKeyV = RDKey;
    
}
 
function apply() {
    maxCount()
    backColor() 
    keyAssignment()
    
    applyBtn.style.backgroundColor = "green";
    applyBtn.value = "DONE";
};

function deApply() {
    applyBtn.style.backgroundColor = "#000000";
    applyBtn.value = "Apply";
}

function reset() {
    leftNumber.innerText = 0;
    rightNumber.innerText = 0;
    a = 0;
    b = 0;
    resetBtn.style.backgroundColor = "green";
    resetBtn.value = "DONE";
}

function deReset() {
    resetBtn.style.backgroundColor = "#000000";
    resetBtn.value = "Reset";
}
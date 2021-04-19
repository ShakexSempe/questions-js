//using selectors inside the element


//1 traversing the dom

const buttons = document.querySelectorAll('.question-btn');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //parent of button = question-title. Parent of question-title is .question class
        //we need to add the .show-text to. 
        const question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle('show-text');
    })
})
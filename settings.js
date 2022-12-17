import Quiz from "./quiz.js";

class Settings {
    constructor() {
        this.quizElement = document.querySelector('.quiz');
        this.settingsElement = document.querySelector('.settings');
        this.category = document.querySelector('#category');
        this.numberOfQuestions = document.querySelector('#questions');
        this.difficulty = [
            document.querySelector('#easy'),
            document.querySelector('#medium'), 
            document.querySelector('#hard'),         
        ];
        this.startButton = document.querySelector('#start');
        
        this.quiz = { };

        this.startButton.addEventListener('click', this.startQuiz.bind(this));
    }

    async startQuiz() {
        try {
            const amount = this.getAmount();
            const categoryId = this.category.value;
            const difficulty = this.getCurrentDifficulty();

            const urlArray = [ 
                'https://opentdb.com/api.php?amount=5&category=24&type=multiple', 
                'https://opentdb.com/api.php?amount=5&category=21&type=multiple', 
                'https://opentdb.com/api.php?amount=5&category=17&type=multiple', 
                'https://opentdb.com/api.php?amount=5&category=26&type=multiple', 
                'https://opentdb.com/api.php?amount=5&category=22&type=multiple'
            ];
            
            let data = await this.fetchData(urlArray[categoryId]);
            this.toggleVisibility();
            this.quiz = new Quiz(this.quizElement, amount, data.results);
        } catch (error) {
            alert(error);
        }
    }

    toggleVisibility() {
        this.settingsElement.style.visibility = 'hidden';
        this.quizElement.style.visibility = 'visible';
    }

    async fetchData(url) {
        const response = await fetch(url);
        const result = await response.json();

        return result;
    }

    getCurrentDifficulty() {
        const checkedDifficulty = this.difficulty.filter(element => element.checked);

        if (checkedDifficulty.length === 1) {
            return checkedDifficulty[0].id;
        } else {
            throw new Error('Please select a difficulty level!');
        }
    }
    getAmount() {
        const amount = this.numberOfQuestions.value;
        // Not negative, not 0 and not more than 50
        if (amount > 0 && amount < 51) {
            return amount;
        }
        throw new Error('Please enter a number of questions between 1 and 10!');
    }
}

export default Settings;
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    const quizData = [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter',
      },
      {
        question: 'Which country won the FIFA World Cup in 2018?',
        options: ['Brazil', 'Germany', 'France', 'Argentina'],
        answer: 'France',
      },
      {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
      },
      {
        question: 'Which is the largest ocean on Earth?',
        options: [
          'Pacific Ocean',
          'Indian Ocean',
          'Atlantic Ocean',
          'Arctic Ocean',
        ],
        answer: 'Pacific Ocean',
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Cu', 'Fe'],
        answer: 'Au',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: [
          'Pablo Picasso',
          'Vincent van Gogh',
          'Leonardo da Vinci',
          'Michelangelo',
        ],
        answer: 'Leonardo da Vinci',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
        answer: 'Mars',
      },
      {
        question: 'What is the largest species of shark?',
        options: [
          'Great White Shark',
          'Whale Shark',
          'Tiger Shark',
          'Hammerhead Shark',
        ],
        answer: 'Whale Shark',
      },
      {
        question: 'Which animal is known as the King of the Jungle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
        answer: 'Lion',
      },
    ];
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const submitButton = document.getElementById('submit');
    const retryButton = document.getElementById('retry');
    const showAnswerButton = document.getElementById('showAnswer');

    let currentQuestion = 0;
    let score = 0;
    let incorrectAnswers = [];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function displayQuenstion() {
      const questionData = quizData[currentQuestion];

      const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = questionData.question;

      const optionsElement = document.createElement('div');
      optionsElement.className = 'options';

      const shuffledOptions = [...questionData.options];
      shuffleArray(shuffledOptions);

      for (let i = 0; i < shuffledOptions.length; i++) {
        const option = document.createElement('label');
        option.className = 'option';

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'quiz';
        radio.value = shuffledOptions[i];

        const optionText = document.createTextNode(shuffledOptions[i]);

        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option);
      }
    }
    displayQuenstion();
  }
}

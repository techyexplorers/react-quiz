import horseImg from "./assets/quizImages/horse.jpeg";
import donkeyImg from "./assets/quizImages/donkey.jpeg";

import catImg from "./assets/quizImages/cat.jpeg";
import dogImg from "./assets/quizImages/dog.jpeg";

import phoneImg from "./assets/quizImages/phone.jpeg";
import laptopImg from "./assets/quizImages/laptop.jpg";

import lemonImg from "./assets/quizImages/lemon.jpeg";
import strawberryImg from "./assets/quizImages/strawberry.jpeg";

import bananaImg from "./assets/quizImages/banana.jpeg";
import appleImg from "./assets/quizImages/apple.jpeg";

import honeyImg from "./assets/quizImages/honey.jpeg";
import treeImg from "./assets/quizImages/tree.jpg";

export const data = [
  {
    id: 1,
    question: "Which one is horse?",
    options: [
      {
        name: "Horse",
        option: "A",
        weight: 100,
        color: "brown",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: horseImg,
      },
      {
        name: "Donkey",
        option: "B",
        weight: 200,
        color: "grey",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: donkeyImg,
      },
    ],
    correctAnswer: "A",
  },
  {
    id: 2,
    question: "Which one is Dog?",
    options: [
      {
        name: "Cat",
        option: "A",
        weight: 50,
        color: "white",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: catImg,
      },
      {
        name: "Dog",
        option: "B",
        weight: 80,
        color: "black",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: dogImg,
      },
    ],
    correctAnswer: "B",
  },
  {
    id: 3,
    question: "Which one is laptop?",
    options: [
      {
        name: "Laptop",
        option: "A",
        weight: 100,
        color: "grey",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: laptopImg,
      },
      {
        name: "Phone",
        option: "B",
        weight: 100,
        color: "grey",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: phoneImg,
      },
    ],
    correctAnswer: "A",
  },
  {
    id: 4,
    question: "Which one is lemon?",
    options: [
      {
        name: "Strawberry",
        option: "A",
        weight: 100,
        color: "red",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: strawberryImg,
      },
      {
        name: "Lemon",
        option: "B",
        weight: 20,
        color: "yellow",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: lemonImg,
      },
    ],
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "Which one is apple?",
    options: [
      {
        name: "Apple",
        option: "A",
        weight: 100,
        color: "red",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: appleImg,
      },
      {
        name: "Banana",
        option: "B",
        weight: 100,
        color: "yellow",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: bananaImg,
      },
    ],
    correctAnswer: "A",
  },
  {
    id: 6,
    question: "Which one is honey?",
    options: [
      {
        name: "Tree",
        option: "A",
        weight: 1000,
        color: "green",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: treeImg,
      },
      {
        name: "Honey",
        option: "B",
        weight: 800,
        color: "golden",
        detail:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolore magni, iure itaque beatae et quo illo placeat debitis recusandae! Alias eum quae esse rerum totam distinctio ullam rem vel?",
        img: honeyImg,
      },
    ],
    correctAnswer: "B",
  },
];

import {Review} from "../types/review";

export const reviews: Review[] = [
  {
    "id": 1,
    "user": {
      "id": 18,
      "isPro": true,
      "name": "Sophie",
      "avatarUrl": "https://11.react.pages.academy/static/avatar/9.jpg"
    },
    "rating": 4,
    "comment": "The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.",
    "date": "2022-10-08T13:58:46.511Z"
  },
  {
    "id": 2,
    "user": {
      "id": 15,
      "isPro": false,
      "name": "Kendall",
      "avatarUrl": "https://11.react.pages.academy/static/avatar/6.jpg"
    },
    "rating": 2,
    "comment": "We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)",
    "date": "2022-10-08T13:58:46.511Z"
  },
  {
    "id": 3,
    "user": {
      "id": 13,
      "isPro": false,
      "name": "Zak",
      "avatarUrl": "https://11.react.pages.academy/static/avatar/4.jpg"
    },
    "rating": 3,
    "comment": "I stayed here for one night and it was an unpleasant experience.",
    "date": "2022-10-08T13:58:46.511Z"
  }
];

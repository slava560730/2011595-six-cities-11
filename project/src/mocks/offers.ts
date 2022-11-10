import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/18.jpg',
    images: [
      "https://11.react.pages.academy/static/hotel/4.jpg",
      "https://11.react.pages.academy/static/hotel/20.jpg",
      "https://11.react.pages.academy/static/hotel/12.jpg",
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: true,
    isPremium: true,
    rating: 2.6,
    type: 'apartment',
    bedrooms: 4,
    maxAdults: 7,
    price: 495,
    goods: ['Fridge', 'Towels', 'Baby seat', 'Kitchen'],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    id: 1,
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/13.jpg',
    images: [
      "https://11.react.pages.academy/static/hotel/7.jpg",
      "https://11.react.pages.academy/static/hotel/18.jpg",
      "https://11.react.pages.academy/static/hotel/13.jpg",
      "https://11.react.pages.academy/static/hotel/8.jpg",
    ],
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: true,
    isPremium: false,
    rating: 4.3,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 237,
    goods: ['Fridge', 'Towels', 'Baby seat', 'Kitchen'],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description:
      'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 13,
      },
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/3.jpg',
    images: [
      "https://11.react.pages.academy/static/hotel/2.jpg",
      "https://11.react.pages.academy/static/hotel/5.jpg",
      "https://11.react.pages.academy/static/hotel/17.jpg",
      "https://11.react.pages.academy/static/hotel/6.jpg",
      "https://11.react.pages.academy/static/hotel/15.jpg",
    ],
    title: 'House in countryside',
    isFavorite: true,
    isPremium: false,
    rating: 3.1,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 171,
    goods: ['Dishwasher', 'Wi-Fi', 'Washing machine', 'Heating'],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    id: 3,
  },
  {
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 13,
      },
    },
    previewImage: 'https://11.react.pages.academy/static/hotel/17.jpg',
    images: [
      "https://11.react.pages.academy/static/hotel/3.jpg",
      "https://11.react.pages.academy/static/hotel/11.jpg"
    ],
    title: 'Beautiful & luxurious apartment at great location',
    isFavorite: false,
    isPremium: true,
    rating: 3.5,
    type: 'house',
    bedrooms: 2,
    maxAdults: 7,
    price: 349,
    goods: ['Dishwasher', 'Wi-Fi', 'Washing machine', 'Heating'],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description:
      'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    id: 4,
  },
];

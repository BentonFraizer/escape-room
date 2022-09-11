export enum AppRoute {
  Main = '/',
  Quest = '/detailed-quest/:id',
  Contacts = '/contacts',
}

export enum NameSpace {
  Site = 'SITE',
  Data = 'DATA',
}

export enum APIRoute {
  Quests = '/quests',
  Quest = '/quests/',
  Orders = '/orders',
}

export enum ComplexityLevel {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export const TYPES = [
  { id: 1, en: 'All quests', ru: 'Все квесты', },
  { id: 2, en: 'Adventures', ru: 'Приключения', },
  { id: 3, en: 'Horror', ru: 'Ужасы', },
  { id: 4, en: 'Mystic', ru: 'Мистика', },
  { id: 5, en: 'Detective', ru: 'Детектив', },
  { id: 6, en: 'Sci-fi', ru: 'Sci-fi', },
]

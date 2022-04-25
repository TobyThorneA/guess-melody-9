export const levels = (level) => {
  switch(level){
    case 'easy':
      return 'Простой';
    case 'medium':
      return 'Средний';
    case 'hard':
      return 'Сложный';
    default:
      return '';
  }
}

export const types = (type) => {
  switch(type){
    case 'adventures':
      return 'Приключения';
    case 'horror':
      return 'Ужасы';
    case 'mystic':
      return 'Мистика';
    case 'detective':
      return 'Детектив';
    case 'sci-fi':
      return 'Sci-fi';
    default:
      return '';
  }
}

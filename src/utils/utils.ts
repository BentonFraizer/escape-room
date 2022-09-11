import { ComplexityLevel } from "../consts";

export const getComplexityLevel = (level: string): string => {
  switch(level) {
    case ComplexityLevel.Easy:
      return 'простой';
    case ComplexityLevel.Medium:
      return 'средний';
    case ComplexityLevel.Hard:
      return 'сложный';
  }
  return '';
}

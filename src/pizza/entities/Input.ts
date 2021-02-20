import Pizza from './Pizza';

export interface Input {
  numberOfTwoPersonTeams: number;
  numberOfThreePersonTeams: number;
  numberOfFourPersonTeams: number;
  pizzas: Array<Pizza>;
}

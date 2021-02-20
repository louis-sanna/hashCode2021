import Delivery from './Pizza';

export interface Submission {
    numberOfPizza: number;
    deliveries: Array<Delivery>
}

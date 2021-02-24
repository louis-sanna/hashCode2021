import { Delivery } from './Delivery';

export interface Submission {
    numberOfPizza: number;
    deliveries: Array<Delivery>
}

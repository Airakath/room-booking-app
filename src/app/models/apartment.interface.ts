import { Room } from './room.interface';

export interface Apartment {
    _id: number;
    name: string;
    street: string;
    zipCode: string;
    city: string;
    rooms: Array<Room>;
}
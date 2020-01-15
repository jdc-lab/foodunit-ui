import {Restaurant} from "./restaurant"
import {User} from "./user"

export interface Offer {
    id: number
    restaurant: Restaurant
    valid_from: Date
    valid_to: Date
    responsible: User
}
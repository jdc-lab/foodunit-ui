import React from "react"

import './flatButtonStyle.scss'
import {OFFER_ROUTE} from "../routes"
import FlatButton from "./flatButton"
import {Link} from "@reach/router"
import {Offer} from "../entity/offer"
import Table from "react-bootstrap/Table"

/**
 * newOfferListItem creates a new item by an offer and adds a unique key based on "key" to it
 */
function newOfferListItem(offer: Offer, key: string) {
    const options = { weekday: 'long', hour: '2-digit', minute: '2-digit'}
    let from = offer.valid_from.toLocaleDateString(undefined, options)
    let to = offer.valid_to.toLocaleDateString(undefined, options)

    return <OfferListItem key={`offerListItem${key}${offer.id}`} offerId={offer.id} offerName={offer.restaurant.name} responsibleName={offer.responsible.name} from={from} to={to} />
}

interface OfferListItemProps {
    offerId: number
    offerName: string
    responsibleName: string
    from: string
    to: string
}

const OfferListItem = ({offerId, offerName, responsibleName, from, to}: OfferListItemProps) => {

    return (
        <tr>
            <td className="align-middle py-3">
                <p className="text-sm mb-1">Bestellung möglich:</p>
                <p className="text-md text-strong mb-0">{from} – {to} Uhr</p>
            </td>
            <td className="align-middle pl-0 pr-3 py-4">
                <div className="text-hand text-lg bg-gradient rounded-0 text-dark text-center px-1 py-2">
                    {offerName}
                </div>
            </td>
            <td className="align-middle py-3">
                <p className="text-sm mb-1">Angebot erstellt von:</p>
                <p className="text-md text-strong mb-0">{responsibleName}</p>
            </td>
            <td className="align-middle px-0 py-3 text-center">
                <Link to={`${OFFER_ROUTE}/${offerId}`}><FlatButton>Angebot auswählen</FlatButton></Link>

            </td>
        </tr>
    )
}

interface OfferListProps {
    offers: Array<Offer>
    listKey: string
}

/**
 * OfferList creates a new offer list from offers.
 * The ky is needed to create unique react-keys for the list
 */
const OfferList = ({offers, listKey}: OfferListProps) => {
    return (
        <Table>
            <tbody>
                {offers.map((offer) => newOfferListItem(offer, listKey))}
            </tbody>
        </Table>
    )
}

export default OfferList
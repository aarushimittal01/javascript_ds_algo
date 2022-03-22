const Bookings = require('../dataStore/bookings')
const BookingStatusOngoing = require('../constants').BOOKING_STATUS_ONGOING
const BookingStatusCompleted = require('../constants').BOOKING_STATUS_COMPLETED


function startBooking(driverId, distance) {
    let bookingId = Bookings.length
    Bookings.push({
        bookingId: {
            driverId: driverId,
            status: BookingStatusOngoing,
            distance
        }
    })
    return bookingId
}

function completeBooking(bookingId) {
    if (Bookings[bookingId]) {
        Bookings[bookingId].status = BookingStatusCompleted
        return Bookings[bookingId].driverId
    } else {
        console.log("Incorrect Booking Id")
    }
}

module.exports = {
    startBooking,
    completeBooking
}

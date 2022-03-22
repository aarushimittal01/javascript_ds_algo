const drivers = require("../dataStore/drivers").drivers
const driverAvailability = require('../dataStore/drivers').AvailableDrivers
const statusAvailable = require('../constants').DRIVER_STATUS_AVAILABLE

const driverBookedStatus = require('../constants').DRIVER_STATUS_BOOKED

const startBooking = require('./booking').startBooking


function registerDriver(id) {
    if(drivers[id]) {
        console.log("Duplicate Driver id")
    } else {
        drivers[id] = {
            status: statusAvailable,
            distanceCovered: 0
        }
        
        driverAvailability.add(id)
        console.log("Driver " + id + " registered")
    } 
}

function dispatchDriver(distance) {
    if(driverAvailability.length) {
        let driverId = driverAvailability[0]
        let bookingId = startBooking(driverId)
        if(bookingId) {
            console.log("Driver " + driverId + "is assigned to booking " + bookingId + " with" +  distance + "km distance")
            drivers[driverId].status = driverBookedStatus
            driverAvailability.delete(driverId)
        } else {
            console.log("Sorry, Could not complete the Booking")
        }
    } else {
        console.log("Sorry, driver is not available")
    }
}

function deallocateDriver(driverId) {
    drivers[driverId].status = statusAvailable
    driverAvailability.add(id)
}

module.exports = {
    deallocateDriver,
    dispatchDriver,
    registerDriver
}

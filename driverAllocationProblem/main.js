const constants = require("./constants")

const DriverControllers = require('./controllers/driver')
const BookingControllers = require('./controllers/booking')

const fs = require("fs")


//const args = process.argv.slice(2)

process.stdin.on('data', () => {
    let cmd;


    while((cmd = process.stdin.read()) !== null) {
        console.log(cmd)
        let args = cmd.split(' ')
        console.log(args)

        switch(args[0]) {
            case constants.ARG_COMPLETE_BOOKING:
                let driverId = BookingControllers.completeBooking(args[1])
                if(driverId) DriverControllers.deallocateDriver(driverId)
                break;
            case constants.ARG_DISPATCH_DRIVER:
                DriverControllers.dispatchDriver(args[1])
                break;
            case constants.ARG_REGISTER_DRIVER:
                DriverControllers.registerDriver(args[1])
                break;
            case constants.ARG_DRIVERS_COMPLETED_BOOKING_GT:
                break;
            case constants.ARG_DRIVERS_COMPLETED_DISTANCE_GT_10:
                break;
            case 'exit':
                exitSignal = true;
                process.exit(0)
            default:
                console.log("Incorrect input")
        }
    }

})




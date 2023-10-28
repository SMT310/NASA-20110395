const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flighNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZMT', 'NASA'],
    upcoming: true,
    success: true
};

launches.set(launch.flighNumber, launch);

function existLaunchWithID(launchID) {
    return launch.has(launchID);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch() {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        upcoming: true,
        success: true,
        customer: ['zero to mastery', 'NASA'],
        flighNumber: latestFlightNumber,
    }));
}

function abortLaunchByID(launchID) {
    const aborted = launches.delete(launchID);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
module.exports = {
    existLaunchWithID,
    getAllLaunches,
    addNewLaunch,
    abortLaunchByID,
}
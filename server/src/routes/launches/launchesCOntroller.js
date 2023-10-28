const { aborted } = require('util');
const {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithID,
    abortLaunchByID,
} = require('../../models/launchesModel');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches);
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property',
        })
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid launch date',
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchID = Number(req.param.id);
    if (!existLaunchWithID(launchID)) {
        return res.status(400).json({
            error: 'Launch not found',
        });
    }

    const aborted = abortLaunchByID(launchID);
    return res.status(200).json(aborted);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}
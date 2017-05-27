function job(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}

module.exports = job;
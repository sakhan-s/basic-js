const STRING = `string`;

const MIN_ACTIVITY = 0;
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const REDUCTION_CONCENTRATION_RATIO = 0.693;

const RATIO = REDUCTION_CONCENTRATION_RATIO / HALF_LIFE_PERIOD;

const isString = (value) => typeof value === STRING;
const isNumberInRange = (value) => parseFloat(value) > MIN_ACTIVITY && parseFloat(value) < MODERN_ACTIVITY;

module.exports = function dateSample(sampleActivity) {
    return (isString(sampleActivity) && isNumberInRange(sampleActivity)) ?
        Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / RATIO) :
        false;
};
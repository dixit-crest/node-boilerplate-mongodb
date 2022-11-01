const { RECORD_FOUND } = require("./constants");

/**
 * Function to send json data to user with specific format.
 * 
 * @param {any} data - Data to send in response 
 * @param {HttpCode} code - Http response code 
 * @param {String} message - Message for the response 
 * @returns 
 */
module.exports.sendResponse = (
    data = null,
    code = 200,
    message = RECORD_FOUND
  ) => {
    return {
      data,
      code,
      message,
    };
  };

  /**
 * Check page permission for given module
 * @param {String|Number} num - Number
 * @param {Number} roundOff - Number to round off : Default is 2
 * @return {Number} number - Number fixed to roundoff (12.NN)
 */
module.exports.roundOff = (num, roundOff = 2) => {
  try {
    return parseFloat(parseFloat(num || 0).toFixed(roundOff));
  } catch (error) {
    return num;
  }
};
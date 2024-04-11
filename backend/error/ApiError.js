class ApiError {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
  static badReq(message) {
    return new ApiError(404, message);
  }
  static interal(message) {
    return new ApiError(500, message);
  }
  static forbiden(message) {
    return new ApiError(403, message);
  }
}

module.exports = ApiError;

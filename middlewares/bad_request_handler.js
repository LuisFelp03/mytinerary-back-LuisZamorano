const bad_request_handler = (req, res, next) => {
    return res.status(400).json({
        success: false,
        message: "Bad Request - The request could not be understood or was missing required parameters."
    });
};

export default bad_request_handler;

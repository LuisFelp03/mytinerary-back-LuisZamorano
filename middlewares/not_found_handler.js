const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Not Found - The request with the method ${req.method} with the route ${req.url} was not found.`
    });
};

export default not_found_handler;

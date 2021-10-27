module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) { //protecting route so that route can be reached only when user is logged in
        return res.redirect('/login');
    }
    next();
}
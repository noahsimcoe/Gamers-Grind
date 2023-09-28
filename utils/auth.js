const withAuth = (req,res,next) => {
    if (!req.session.user_id) {
       return res.redirect('/login')   
    }
    next()
}

module.exports = withAuth
const withAuth = (req, res, next) => {
  //if the user isn't logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    //if the user is logged in, execute the route function
    next();
  }
};

module.exports = withAuth;
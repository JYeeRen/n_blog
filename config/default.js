module.exports = {
  port: 3000,
  session: {
    secret: 'n_blog',
    key: 'n_blog',
    maxAge: 2592000000,
  },
  mongodb: 'mongodb://localhost:27017/n_blog',
};

module.exports = function(deployTarget) {
  return {
    pagefront: {
      app: 'ember-changeset-history-demo',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

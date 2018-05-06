const razzleHeroku = require("razzle-heroku");

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config = razzleHeroku(config, { target, dev }, webpack);
    // do something to config

    return config;
  }
};

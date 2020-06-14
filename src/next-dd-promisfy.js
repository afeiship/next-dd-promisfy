(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var DEFAULT_OPTIONS = { context: null };

  nx.ddPromisfy = function (inFn, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    return function () {
      new Promise(function (resolve, reject) {
        return function (opts) {
          var args = nx.mix({
            onSuccess: function (res) { resolve(res); },
            onFail: function (err) { reject(err); }
          }, opts);
          return inFn.apply(options.context, args);
        };
      })
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ddPromisfy;
  }
})();
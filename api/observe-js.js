(function() {
  window.ObjectObserve = function(obj, callback, acceptList) {
    var observer = new ObjectObserver(obj);
    if (typeof acceptList == 'undefined') {
      acceptList = ['add', 'update', 'delete', 'reconfigure', 'setPrototype',
                    'preventExtensions'];
    }

    observer.open(function(added, removed, changed, getOldValueFn) {
      var changes = [];
      if (acceptList.includes('add')) {
        Object.keys(added).forEach(function(property) {
          changes.push({
            name: property,
            object: obj,
            type: 'add',
          });
        });
      }
      if (acceptList.includes('update')) {
        Object.keys(changed).forEach(function(property) {
          changes.push({
            name: property,
            object: obj,
            type: 'update',
            oldValue: getOldValueFn(property),
          });
        });
      }
      if (acceptList.includes('delete')) {
        Object.keys(removed).forEach(function(property) {
          changes.push({
            name: property,
            object: obj,
            type: 'delete',
            oldValue: getOldValueFn(property),
          });
        });
      }
      if (!changes.length)
        return;
      callback(changes);
    });

    return obj;
  };
})();

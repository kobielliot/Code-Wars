function distinct(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (!result.includes(a[i])) {
        result.push(a[i]);
      }
    }
    return result;
  }
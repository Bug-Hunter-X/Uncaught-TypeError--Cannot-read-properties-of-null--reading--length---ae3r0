function foo(x) {
  if (x === null || x === undefined || typeof x !== 'string' && !Array.isArray(x)) {
    return 0; // Handle null, undefined, or non-string/array cases
  }
  return x.length;
}
// Last updated: 5/29/2026, 11:29:05 PM
1interface Array<T> {
2    last(): T | -1;
3}
4
5Array.prototype.last = function() {   
6    let len = this.length
7    return len === 0 ? -1 : this[len - 1]
8};
9
10/**
11 * const arr = [1, 2, 3];
12 * arr.last(); // 3
13 */
14
// Last updated: 5/29/2026, 11:28:08 PM
1interface Array<T> {
2    last(): T | -1;
3}
4
5Array.prototype.last = function() {   
6    return this.length === 0 ? -1 : this[this.length - 1]
7};
8
9/**
10 * const arr = [1, 2, 3];
11 * arr.last(); // 3
12 */
13
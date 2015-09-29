/**
 * @module 1-liners/guard
 *
 * @description
 *
 * Iterates over an array of predicate-value tuples of the form `[boolean, any]`
 * in order and returns the first truthy predicate's value. If no predicate
 * evaluates to truthy, guard returns `null`.
 *
 * @example
 *
 *     var guard = require('1-liners/guard');
 *
 *     guard([
 *       [1 === 0, "False!"],
 *       [1 === 1, "True!"],
 *       [true, "Default if nothing else is truthy."]
 *     ]) // => "True!"
 *
 *     guard([
 *       [1 === 1, "The first truthy value returns."],
 *       [false, "Nope!"],
 *       [true, "Default if nothing else is truthy."]
 *     ]) // => "The first truthy value returns."
 *
 *     guard([
 *       [false, "False!"]
 *     ]) // => null
 */

export default (ps) => ps.concat([[true, null]]).find(([p]) => p)[1];

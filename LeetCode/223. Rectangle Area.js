/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  var s1 = (C - A) * (D - B)
  var s2 = (G - E) * (H - F)
  if (A >= G || E >= C || H <= B || F >= D) {
    return s1 + s2
  }
  return s1 + s2 - (Math.min(G, C) - Math.max(A, E)) * (Math.min(D, H) - Math.max(B, F))

};
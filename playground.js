var spec   = require("washington")
var assert = require("assert")
var math   = require("mathjs")

var Playground = {}

Playground.transpose = function (matrix) {
  var transpose = math.zeros(matrix.size()[1], matrix.size()[0])
  matrix.forEach(function (value, index) {
    transpose.subset(math.index(index[1], index[0]), value)
  })
  return transpose
}

spec("Get the transpose for a 2 x 2 matrix", function () {
  var source = math.matrix([
    [1, 2],
    [3, 4]
  ])
  var transpose = Playground.transpose(source)
  assert.equal(transpose.subset(math.index(0, 0)), 1)
  assert.equal(transpose.subset(math.index(0, 1)), 3)
  assert.equal(transpose.subset(math.index(1, 0)), 2)
  assert.equal(transpose.subset(math.index(1, 1)), 4)
}) 

spec("Get the transpose for a vector", function () {
  var vector    = math.matrix([[0], [1], [2], [3]])
  var transpose = Playground.transpose(vector)
  assert.equal(transpose.subset(math.index(0, 0)), 0)
  assert.equal(transpose.subset(math.index(0, 1)), 1)
  assert.equal(transpose.subset(math.index(0, 2)), 2)
  assert.equal(transpose.subset(math.index(0, 3)), 3)
})

spec("Transpose for a scalar is scalar")

spec("Generalized transpose for n-dimensional matrices?")
var example = require("washington")
var assert  = require("assert")

var Graph = function (options) {
  this._edges    = []
  this._vertices = []
  this.directed  = true

  if (options) {
    if (options.directed === false) 
      this.directed = false
  }
}

Graph.prototype.add = function() {
  this._edges.push( null )
}

example("A graph should contain some edges", function () {
  var graph = new Graph
  graph.add()
  graph.add()
  assert.equal(graph._edges.length, 2)
})

Graph.prototype.relate = function(source, target) {
  this._vertices.push([source, target])

  if (!this.directed)
    this._vertices.push([target, source])
}

example("You can relate edges with vertices", function () {
  var graph = new Graph
  graph.add()
  graph.add()
  graph.relate(0, 1)
  assert.equal(graph._vertices[0][0], 0)
  assert.equal(graph._vertices[0][1], 1)
})

example("If undirected, vertices are created symmetrically", function () {
  var graph = new Graph({directed: false})
  graph.add()
  graph.add()
  graph.relate(1, 0)
  assert.equal(graph._vertices[0][0], 1)
  assert.equal(graph._vertices[0][1], 0)
  assert.equal(graph._vertices[1][0], 0)
  assert.equal(graph._vertices[1][1], 1)
})

example("Edges can be labeled")

example("An arbitrary document can be added to the edge")

example("Graphs can be converted back and from adjacency matrices")

example("Graphs can be converted back and from incidency matrices")
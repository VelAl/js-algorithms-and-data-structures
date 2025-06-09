import { bfsShortestPath, has_BFS_path } from "../scripts/graph-bfs.js";

const graph_a = {
  y: ["a"],
  a: ["b", "c"],
  b: ["f"],
  c: ["d", "e"],
  d: ["f"],
  e: ["f"],
  f: ["g"],
};

const graph_b = {
  a: ["b", "c"],
  b: ["e", "c", "o"],
  c: ["d", "f"],
  d: ["o", "f"],
  f: ["g"],
};

const props_andResults_a = [
  [graph_a, "y", "g", true],
  [graph_a, "a", "e", true],
  [graph_a, "d", "a", false],
  [graph_a, "y", "o", false],
];

const props_andResults_b = [
  [graph_b, "a", "g", ["a", "c", "f", "g"]],
  [graph_b, "b", "f", ["b", "c", "f"]],
  [graph_b, "f", "c", null],
  [graph_b, "a", "z", null],
];

describe.each(props_andResults_a)(
  "Test has_BFS_path",
  (graph, a, b, result) => {
    test("Check if path exists", () => {
      expect(has_BFS_path(structuredClone(graph), a, b)).toBe(result);
    });
  }
);

describe.each(props_andResults_b)(
  "Test bfsShortestPath",
  (graph, a, b, result) => {
    test("Check the shortest path", () => {
      expect(bfsShortestPath(structuredClone(graph), a, b)).toEqual(result);
    });
  }
);

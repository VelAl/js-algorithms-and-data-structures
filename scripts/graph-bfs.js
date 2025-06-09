// Breadth-First Search (BFS)

const graph = {
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

export const has_BFS_path = (graph, start, end) => {
  let que = [start];

  while (que.length > 0) {
    const current = que.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      que = [...que, ...graph[current]];
    }
  }

  return false;
};

export const bfsShortestPath = (graph, start, end) => {
  let paths_queue = [[start]];
  let visited = new Set();

  while (paths_queue.length > 0) {
    let path = paths_queue.shift();

    let node = path.at(-1);

    if (node === end) return path;

    if (!graph[node]) {
      graph[node] = [];
    }

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);

        paths_queue.push([...path, neighbor]);
      }
    }
  }

  return null;
};

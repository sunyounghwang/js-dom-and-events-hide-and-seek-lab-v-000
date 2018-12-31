function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll(".ranked-list li");

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n;
  }
}

function deepestChild() {
  let nodes = document.querySelectorAll("#grand-node div");

  for (let i = 0; i < nodes.length; i++) {
    if (i === nodes.length - 1) {
      return nodes[i];
    }
  }
}

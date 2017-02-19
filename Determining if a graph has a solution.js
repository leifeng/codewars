//https://www.codewars.com/kata/53223653a191940f2b000877/train/javascript

var arcs = [
    { start: "a", end: "b" },
    { start: "b", end: "c" },
    { start: "c", end: "a" },
    { start: "c", end: "d" },
    { start: "e", end: "a" }
];

function solve_graph(start, end, arcs) {
    // TODO
    if (start === end) return true
    var obj = {};
    var _start, _end;
    arcs.map((item) => {
        if (item.start == _end) {
            obj[_start] = obj[_start].concat(item.end)
        } else {
            if (obj[item.start]) {
                obj[item.start].push(item.end)
            } else {
                _start = item.start;
                _end = item.end;
                obj[item.start] = [].concat(item.end)
            }
        }
    })
    for (let key in obj) {
        obj[key].map((item) => {
            if (obj[item]) {
                obj[key] = obj[key].concat(obj[item])
            }
        })
    }
    return obj[start].indexOf(end) !== -1
}

solve_graph("a", "b", arcs);
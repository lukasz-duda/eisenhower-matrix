const tasks = [];
for (let index = 1; index <= 10; index++) {
    const task = new Task(`Task ${index} content`);
    tasks.push(task);
}
const eisenhowerMatrix = new EisenhowerMatrix(tasks);

const container = document.getElementById('container');
eisenhowerMatrix.bindTo(container);
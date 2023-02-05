const tasks = [];
for (let index = 1; index <= 40; index++) {
    const task = new Task(`Task ${index} content`);
    task.important = index % 3 == 0;
    task.urgent = index % 2 == 0;
    tasks.push(task);
}
const eisenhowerMatrix = new EisenhowerMatrix(tasks);

const container = document.getElementById('container');
eisenhowerMatrix.bindTo(container);
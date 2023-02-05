class Task {

    constructor(content) {
        this.id = `task-${Math.random()}`;
        this.content = content;
        this.urgent = false;
        this.important = false;
    }

}
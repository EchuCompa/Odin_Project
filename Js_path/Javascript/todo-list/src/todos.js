class todo {
    constructor(title, description, dueDate, priority) {
        this.done = false; //Maybe this is unnecesary cause the todos are going to checked or unchecked 
        //depending on their css class, not this state of the js class.
        this.show = true;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority; //This will define the color of the todo
    }

    set doneState(done) {
        this.done = done;
    }
}

class project {
    constructor(title, description = "", todos = []) {
        this._title = title;
        this._description = description;
        this.todos = todos;
    }
    
    addTodo(todo) {
        this.todos.push(todo);
    }
    
    eraseTodo(todo) {
        for (let i =0;i< this.todos.size; i++ ) {
            if (this.todos[i] === todo) {
                this.todo.splice(i,1); //Removes the todo from the array
                break;
            }
        }
    }

    changeTodoState(todo, done) {
        for (let i =0;i< this.todos.size; i++ ) {
            if (this.todos[i] === todo) {
                this.todos[i].doneState = !this.todos[i].doneState; //Inverts the state of the todo
                break;
            }
        }
    }

    set title(new_title) {
        this._title = new_title;
    }

    set description(new_description) {
        this._description = new_description;
    }
}

export {todo, project};
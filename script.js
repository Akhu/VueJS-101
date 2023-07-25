const TodoListApp = {
  data() {
    return {
      todos: [],
      sorted: false,
      newTask: {
        description: null,
        priority: 3,
        completed: false
      },
    }
  },
  beforeCreate() {

  },
  created() {
    this.fetchTodos();
  },

  updated() {
    this.setTodos();
  },
  methods: {
    taskColor(priority) {
      if (priority === 1) {
        return 'bg-red-200';
      }
    },
    sortByPriority() {
      this.todos.sort((a, b) => {
        return a.priority - b.priority ;
      });
    },
    setTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    fetchTodos() {
      this.todos = JSON.parse(localStorage.getItem('todos')) ?? [];
    },
    addNewTask() {
      this.todos.push(this.newTask);
      this.newTask = {
        description: null,
        priority: 3,
        completed: false
      }
    },
    removeAll() {
      this.todos = []
    }
  },
}


Vue.createApp(TodoListApp).mount('#app');

var app = app || {};

var TodoRouter = Backbone.Router.extend({
  routes:{
    '*filter': 'setFilter'
  },

  setFilter: function( param ) {
    if (param) {
      param = param.trim();
    }
    app.TodoFilter = param || '';

    app.Todos.trigger('filter');
  }
});

app.TodoRouter = new TodoRouter();
Backbone.history.start();
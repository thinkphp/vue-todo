var counter = 0;

var the_list = new Vue({

             el: '#thelist',

             data: {

                   todos: []
             },

             methods: {

                   delTask : function( id ) {

                   var arr = 0;

                   var BreakException = {};

                   try {

                        the_list.todos.forEach(function (element) {

                             if (element.id === id) {

                                  throw BreakException

                             } else {

                                   arr += 1;
                             }

                        });
   
                    } catch (e) {

                      if (e !== BreakException) throw e;
                    }

                   the_list.todos.splice(arr, 1);

                   localStorage.setItem('list', JSON.stringify(the_list.todos));
                          
                 }
             }
})


if(localStorage.getItem("list") == null) {

   the_list.todos.push({text: 'MooTools', details: 'Hello, Adrian', 'id': 0})  

} else {

    var prevlist = JSON.parse(localStorage.getItem('list'));

    prevlist.forEach(function (element) {

        the_list.todos.push({'text': element.text, details: element.details, 'id': counter});

        counter += 1;
    });

}

var addtask = new Vue({

    el: '#addTask',

    data: {

          message: '',

          messageDetails: ''
    },

    methods: {

          addTask: function() {

                 counter += 1

                 the_list.todos.push({text: this.message, details: this.messageDetails, 'id': counter})

                 this.message = '' 

                 this.messageDetails = ''

                 localStorage.setItem('list', JSON.stringify(the_list.todos)) 
          } 
    }

})
new Vue({
    // By specifying an HTML id in this el, an instance of Vue.js is imported in the DOM of that id
    el: '#app',
    // data is an attribute (value) of the defined Vue.js instance
    data: {
      name: 'ordinary Joe',
      course: 'Web Engineer Course',
      acceptancePeriod: 'January 2020',
      defaultLastId: 2,
      students: [
        { id: 1, name: 'kamali laurent', course: 'Machine learning course', acceptancePeriod: 'January 2020' },
        { id: 2, name: 'kevin moris', course: 'Web Engineer Course', acceptancePeriod: 'Bebruary 2020' },
       
      ]
    },
  
    methods: {
      addStudent: function() {
        let last_id = this.students[this.students.length-1];
        let new_id = last_id.id + 1;
      return this.students.push({id:new_id, name: this.name, course: this.course, acceptancePeriod:this.acceptancePeriod})
      }
    }
  })
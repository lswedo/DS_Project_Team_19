var app = new Vue({
  el: '#expCertReport',
  data: {
    Person: [],
    Certification: []
  },
created() {
  this.fetchExp()
},
methods: {
  fetchExp(){
    fetch("api/exp_cert_report/")
    .then(response => response.json())
    .then(json => {
      this.Person=json;
      this.Certification=json;
      console.log(this.Person);
      });
    }
}})

var app = new Vue({
  el: 'memberReport',
  data: {
    Person:[]
    created() {
      this.fetchMemberReport()
    },
    methods: {
      fetchMemberReport(){
        fetch("api/contact_report/")
        .then(response => response.json())
        .then(json => {
          this.Person=json;
          console.log(this.Person);
          });
        }
    }})

var app = new Vue({
  el: '#OCFR_tables',
  data: {
    certList: [],
    ffList: []
  },
    created() {
     fetch("api/certifications/")
     .then( response => response.json() )
     .then( json => {
       this.certList = json;
       console.log(json)}
     );
     fetch("api/firefighters/")
     .then( response => response.json() )
     .then( json => {
       this.ffList = json;
       console.log(json)}
     );
   },
  methods: {
  }
})

var app = new Vue({
  el: '#OCFR_tables',
  data: {
    perList: []
  },
  methods: {
    get_certs: function() {
     fetch("api/personel/")
     .then( response => response.json() )
     .then( json => {
       this.perList = json;
       console.log(json)}
     );
    }
  }
})
// var app = new Vue({
//   el: '#OCFR_tables',
//   data: {
//
//     perList: []
//   },
//     created() {
//      this.get_certs();
//      fetch("api/personel/")
//      .then( response => response.json() )
//      .then( json => {
//        this.perList = json;
//        console.log(json)}
//      );
//    }
// })

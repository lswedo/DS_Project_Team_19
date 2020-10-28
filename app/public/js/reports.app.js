var app = new Vue({
  el: '#expCertReport',
  data: {
    certList: [],
    Person: [],
    Cert_to_Get: ''
  },
created() {
  this.fetchExp();
  this.get_certs();
},
methods: {
  fetchExp(){
    fetch("api/exp_certs_report/")
    .then(response => response.json())
    .then(json => {
      this.Person=json;
      console.log(this.Person);
      });
    },
    get_certs(){
     fetch("api/certifications/")
     .then( response => response.json() )
     .then( json => {
       this.certList = json;
       console.log(json)}
     );
   },
   get_a_cert( evt ){
    console.log(this.Cert_to_Get)
    fetch("api/exp_certs_report/?CertId="+this.Cert_to_Get)
    .then( response => response.json() )
    .then( json => {
      this.Person=json;
      console.log(json)}
    );
   }
  }
})

var app = new Vue({
  el: '#memberReport',
  data: {
    Person:{}
  },
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

  var app = new Vue({
    el: '#login_check',
    data: {
      login_status: ''
    },
    created() {
      this.get_status();
    },
    methods: {
      get_status() {
      fetch("api/login/check.php")
      .then( response => response.json() )
      .then( json => {
        this.login_status = json['message'];
        console.log(json)}
      );
    }}})

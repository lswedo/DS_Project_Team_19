var app = new Vue({
  el: '#OCFR_tables',
  data: {
    certList: []
  },
    created() {
     this.get_certs();
   },
  methods: {
    get_certs: function() {
     fetch("api/certifications/")
     .then( response => response.json() )
     .then( json => {
       this.certList = json;
       console.log(json)}
     );
   }
 },
})
var app = new Vue({
  el: '#Certification_action',
  data: {
    newCertList: [],
    newCertForm: {},
    new_cert: ''
  },
  created() {
   fetch("api/certifications/")
   .then( response => response.json() )
   .then( json => {
     this.newCertList = json;
     console.log(json)}
     );
   },
    methods: {
      newCertData() {
        return {
          user_Cert: "",
        }
      },
      handleNewCert( evt ) {
       fetch('api/certifications/create.php', {
         method:'POST',
         body: JSON.stringify(this.newCertForm),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
        })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json[0]);
         // TODO: test a result was returned!
         this.newCertList.push(json[0]);
         this.new_cert = "Certification " + json[0]['CertId']+" submitted as: '" + json[0]['CertName'] + "' From Agency: " + json[0]['CertifyAgency']
       });

       console.log("Creating (POSTing)...!");
       console.log(this.newCertForm);
       console.log(this.newCertList);

       this.newCertForm = this.newCertData();
     }
    }
  })
var app = new Vue({
  el: '#delete_entry',
  data: {
    deleteForm: {},
    deletedCert: '',
    certList: []
  },
  created() {
   this.get_certs();
  },
  methods: {
    deleteCert( evt ) {
     fetch('api/certifications/delete.php', {
       method:'POST',
       body: JSON.stringify(this.deleteForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
     .then( response => response.json() )
     .then( json => {
       console.log(this.deleteForm);
       // TODO: test a result was returned!
       this.deletedCert = "Certification " + this.deleteForm['CertId']+" Deleted"
     });

     console.log("Deleting...!");
   },
   get_certs() {
    fetch("api/certifications/")
    .then( response => response.json() )
    .then( json => {
      this.certList = json;
      console.log(json)}
    );
  }
}})
var app = new Vue({
  el: '#update_entry',
  data: {
    updateForm: {},
    updatedCert: '',
    certList: []
  },
  created() {
   this.get_certs();
  },
  methods: {
    updateCert( evt ) {
     fetch('api/certifications/update.php', {
       method:'POST',
       body: JSON.stringify(this.updateForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
     .then( response => response.json() )
     .then( json => {
       console.log(this.updateForm);
       // TODO: test a result was returned!
       this.updatedCert = "Certification " + this.updateForm['CertId']+" updatedas: '" + this.updateForm['CertName'] + "' From Agency: " + this.updateForm['CertifyAgency']
     });

     console.log("Updating...!");
   },
   get_certs() {
    fetch("api/certifications/")
    .then( response => response.json() )
    .then( json => {
      this.certList = json;
      console.log(json)}
    );
  },
  changeCert() {
   fetch("api/certifications/?CertId="+this.updateForm.CertId)
   .then( response => response.json() )
   .then( json => {
     this.updateForm = json[0];
     console.log(json)}
   );
 }
}})

var app = new Vue({
  el: '#login_check',
  data: {
    login_status: '',
    redirect: ''
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
      this.redirect = json['redirect'];
      console.log(json)}
    );
  }}})
  var app = new Vue({
    el: '#get_login_status',
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

var app = new Vue({
  el: '#OCFR_tables',
  data: {
    certList: []
  },
    created() {
     this.get_certs();
     fetch("api/certifications/")
     .then( response => response.json() )
     .then( json => {
       this.certList = json;
       console.log(json)}
     );
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
    deletedCert: ''
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
   }
  }
})
var app = new Vue({
  el: '#update_entry',
  data: {
    updateForm: {},
    updatedCert: ''
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
   }
  }
})

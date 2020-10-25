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

//--------Create--------//


var app = new Vue({
  el: '#perCreate',
  data: {
    newCertList: [],
    newCertForm: {},
    new_cert: ''
  },
  created() {
   fetch("api/personel/")
   .then( response => response.json() )
   .then( json => {
     this.commentList = json;
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
       fetch('api/personel/create.php', {
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
         this.new_cert = json[0]['CertName'] +" submitted for " + json[0]['FirstName'] + json[0]['LastName']
       });

       console.log("Creating (POSTing)...!");
       console.log(this.newCertForm);
       console.log(this.newCertList);

       this.newCertForm = this.newCertData();
     }
    }
  })



  // -------------- Delete --------------//

  var app = new Vue({
    el: '#delete_entry',
    data: {
      deleteForm: {},
      deletedCert: ''
    },
    methods: {
      deleteCert( evt ) {
       fetch('api/personel/delete.php', {
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

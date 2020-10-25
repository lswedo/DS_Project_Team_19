var app = new Vue({
  el: '#OCFR_tables',
  data: {
    perList: [],
  },
  created(){
    this.get_certs();
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
    certList: [],
    perList: [],
    new_cert: '',
    cert_to_post: ''
  },
  created() {
    this.get_certs();
    this.get_people();
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
     },
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
    get_people(){
     fetch("api/firefighters/")
     .then( response => response.json() )
     .then( json => {
       this.perList = json;
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
  }})



  // -------------- Delete --------------//

  var app = new Vue({
    el: '#delete_entry',
    data: {
      certList: [],
      perList: [],
      deleteForm: {},
      deletedCert: ''
    },
    created() {
      this.get_certs();
      this.get_people();
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
         this.deletedCert = "Certification " + this.deleteForm['CertId'] + " obtained on "+ this.deleteForm['CertDate'] +" by firefigther " + this.deleteForm['PerId'] + " Has Been Deleted";

       });

       console.log("Deleting...!");
     },
     get_certs(){
      fetch("api/certifications/")
      .then( response => response.json() )
      .then( json => {
        this.certList = json;
        console.log(json)}
      );
    },
    get_people(){
     fetch("api/firefighters/")
     .then( response => response.json() )
     .then( json => {
       this.perList = json;
       console.log(json)}
     );
    }
  }})

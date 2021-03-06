//firefighter Table
var app = new Vue({
  el: '#OCFR_tables1',
  data: {
    ffList: []
  },
   created() {
    this.get_ffs();
    fetch("api/firefighters/")
    .then( response => response.json() )
    .then( json => {
      this.ffList = json;
      console.log(json)}
    );
  },
  methods: {
    get_ffs: function() {
     fetch("api/firefighters/")
     .then( response => response.json() )
     .then( json => {
       this.ffList = json;
       console.log(json)}
     );
   }
 },
})

//Firefighter JavaScript
var app = new Vue({
  el: '#firefighter_action',
  data: {
    newffList: [],
    newffForm: {},
    new_ff: ''
  },
  created() {
   fetch("api/firefighters/")
   .then( response => response.json() )
   .then( json => {
     this.ffList = json;
     console.log(json)}
     );
   },
    methods: {
      newffData() {
        return {
          user_ff: "",
        }
      },
      handleNewff( evt ) {
       fetch('api/firefighters/create.php', {
         method:'POST',
         body: JSON.stringify(this.newffForm),
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
        })
       .then( response => response.json() )
       .then( json => {
         console.log("Returned from post:", json[0]);
         // TODO: test a result was returne
         this.newffList.push(json[0]);
         this.new_ff = "Id Number " + json[0]['PerId']+" submitted as: '" + json[0]['FirstName']
       });

       console.log("Creating (POSTing)...!");
       console.log(this.newffForm);
       console.log(this.newffList);

       this.newffForm = this.newffData();
     }
    }
  })
var app = new Vue({
  el: '#delete_entry_ff',
  data: {
    deleteForm_ff: {},
    deletedff: '',
    ffList: []
  },
  created() {
   this.get_ffs();
  },
  methods: {
    deleteff( evt ) {
     fetch('api/firefighters/delete.php', {
       method:'POST',
       body: JSON.stringify(this.deleteForm_ff),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
     .then( response => response.json() )
     .then( json => {
       console.log(this.deleteForm_ff);
       // TODO: test a result was returned!
       this.deletedff = "Person " + this.deleteForm_ff['PerId']+" Deleted"
     });

     console.log("Deleting...!");
   },
  get_ffs() {
   fetch("api/firefighters/")
   .then( response => response.json() )
   .then( json => {
     this.ffList = json;
     console.log(json)}
   );
 }
}})
var app = new Vue({
  el: '#update_entry_ff',
  data: {
    updateForm_ff: {},
    updatedff: '',
    ffList: []
  },
  created() {
   this.get_ffs();
  },
  methods: {
    updateff( evt ) {
     fetch('api/firefighters/update.php', {
       method:'POST',
       body: JSON.stringify(this.updateForm_ff),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
     .then( response => response.json() )
     .then( json => {
       console.log(this.updateForm_ff);
       // TODO: test a result was returned!
       this.updatedff = "Person " + this.updateForm_ff['PerId']+" updatedas: '" + this.updateForm_ff['FirstName']
     });

     console.log("Updating...!");
   },
  get_ffs() {
   fetch("api/firefighters/")
   .then( response => response.json() )
   .then( json => {
     this.ffList = json;
     console.log(json)}
   );
 },
 changeff() {
  fetch("api/firefighters/?PerId="+this.updateForm_ff.PerId)
  .then( response => response.json() )
  .then( json => {
    this.updateForm_ff = json[0];
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

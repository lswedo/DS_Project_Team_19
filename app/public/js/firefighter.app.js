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
  }
})

//Firefighter JavaScript
var app = new Vue({
  el: '#Firefighter_action',
  data: {
    newffList: [],
    newffForm: {},
    new_ff: ''
  },
  created() {
   fetch("api/firefighters/")
   .then( response => response.json() )
   .then( json => {
     this.commentList = json;
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
         this.new_ff = "Person " + json[0]['PerId']+" submitted as: '" + json[0]['fname'] + "' From Agency: " + json[0]['CertifyAgency']
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
    deletedff: ''
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
   }
  }
})
var app = new Vue({
  el: '#update_entry_ff',
  data: {
    updateForm_ff: {},
    updatedff: ''
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
       this.updatedff = "Person " + this.updateForm_ff['PerId']+" updatedas: '" + this.updateForm_ff['fName'] + "' From Agency: " + this.updateForm_ff['CertifyAgency']
     });

     console.log("Updating...!");
   }
  }
})

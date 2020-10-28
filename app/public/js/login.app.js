var app = new Vue({
  el: '#login',
  data: {
    login_info: {},
    login_response: ''
  },
  methods: {
    verify( evt ) {
     fetch("api/login/login.php", {
       method:'POST',
       body: JSON.stringify(this.login_info),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
     }})
     .then( response => response.json() )
     .then( json => {
       console.log("Returned from post:", json);
       this.login_response = json['message']
     });
   }
 }
})

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
    el: '#logout',
    data: {
      logout_response: ''
    },
    methods: {
      perform_logout() {
      fetch("api/login/logout.php")
      .then( response => response.json() )
      .then( json => {
        this.logout_response = json['message'];
        console.log(json)}
      );
    }}})
var app = new Vue({
  el: '#create_user',
  data: {
    createForm: {},
    create_response: ''
  },
  methods: {
    register( evt ) {
     fetch('api/login/register.php', {
       method:'POST',
       body: JSON.stringify(this.createForm),
       headers: {
         "Content-Type": "application/json; charset=utf-8"
       }
      })
     .then( response => response.json() )
     .then( json => {
       this.create_response = json['message']
     });

     console.log("Creating...!");
   }
  }
})
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

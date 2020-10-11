var app = new Vue({
  el: '#triagePage',
  data: {
    ptList: [],
    visitList: [],
    activePt: null,
    triageForm: {
      priority: null,
      symptoms: ''
    },
    newPtForm: {}
  },
  methods: {
    created() {
   fetch("api/records/")
   .then( response => response.json() )
   .then( json => {
     this.ptList = json;

     console.log(json)}
   );
})

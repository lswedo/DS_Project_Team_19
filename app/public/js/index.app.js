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
    newPtData() {
      return {
        firstName: "",
        lastName: "",
        dob: "",
        sexAtBirth: ""
      }
})

<template>
  <div class="main">
    <h1>Negotiation App</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Employer Tab" active title-link-class="employer-tab-link">
        <AmountSetter
          class="employer-setter"
          placeholder="maximum offer" 
          @submitted="(value) => handleSubmit('employer', value)"
        />
      </b-tab>
      <b-tab title="Employee Tab" title-link-class="employee-tab-link">
        <AmountSetter
          class="employee-setter"         
          placeholder="minimum salary" 
          @submitted="(value) => handleSubmit('employee', value)"
        />
      </b-tab>     
    </b-tabs>
    <Modal 
      :result="result"
      :employerSalary="employerSalary"
      :employeeSalary="employeeSalary"
      :show="showModal"
      @closed="showModal=false"
    />
  </div>
</template>

<script>
import AmountSetter from './AmountSetter'
import Modal from './Modal'

export default {
  components: {
    AmountSetter,
    Modal
  },
  props: {
    msg: String
  },
  methods: {
    checkDone() {
        if(this.employeeSalary != null && this.employerSalary != null){
          this.showModal = true;
          this.result = this.employeeSalary <= this.employerSalary ? 'Success!' : 'Failure!';
        }
    },
    handleSubmit(field, value) {
      if(field == 'employer'){          
        this.employerSalary = value;
      }else{          
        this.employeeSalary = value;
      }
      this.checkDone();
    }
  },
  data () {
    return {
      employerSalary: null,
      employeeSalary: null,
      showModal: false,
      result: ''
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  width: 300px;
  display: flex;
  flex-direction: column 
}
</style>

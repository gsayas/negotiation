<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Employer Tab" active>
        <AmountSetter 
          placeholder="maximum offer" 
          @submitted="(value) => handleSubmit('employer', value)"
        />
      </b-tab>
      <b-tab title="Employee Tab">
        <AmountSetter 
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>

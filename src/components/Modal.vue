<template>
	<b-modal v-model="show" hide-footer>
	    <h3>{{result}}</h3>
	    Employee salary: {{employeeSalary}}<br/>
	    Employer salary: {{employerSalary}}<br/>
	    Current temp in London: {{temperature}}
	    <b-button class="mt-3" block @click="handleClose">Ok!</b-button>
  </b-modal>
</template>

<script>
	export default {
    	props: [
    		'result', 
    		'employeeSalary', 
    		'employerSalary',
    		'show'
    	],
    	methods: {
	      handleClose() {
	        this.$emit('closed');
	      }
	    },
	    data() {
	    	return {
		    	temperature: 'sdas'
		    }
	    },
	    created() {
	      fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ba8c4844fe58fa036b814fcf41d3cff5')
	      .then(response => response.json())
	      .then(json => {
	      	console.log(json);
	        this.temperature = json.main.temp
	      })
	    } 	
	}

</script>
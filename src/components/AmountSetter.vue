<template>
	<div class="amount-setter">
		<div v-if="visible">
			<b-form-input
				type="number"
		    	v-model="value" 
		    	:placeholder="'enter ' + placeholder"
		    ></b-form-input>
		    <b-button variant="outline-primary" @click="handleSubmit">
		      Submit
		    </b-button>
		</div>
		<span v-if="!visible">Amount submitted!</span>
	</div>
</template>

<script>
	export default {
    props: ['placeholder'],
    methods: {
      handleSubmit() {
        this.visible = false;
        this.$emit('submitted', this.value);
      }
    },   
    data () {
      return {
        value: '',
        visible: true 
      }
    },
  }
</script>


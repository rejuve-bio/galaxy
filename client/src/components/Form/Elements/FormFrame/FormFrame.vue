<template>
      
        <iframe 
        ref="iframe"
        src="./index.html" 
        style="width: 100%; height: 50vh" frameborder="0"></iframe>

</template>

<script>
export default {
    props:{
        id: {
            type: String,
            required: false,// change to true
        },
        src:{
            type: String,
            default: null,
        }
    },
    mounted() {

        window.addEventListener("message", (e) => {
            if(e.origin != this.expectedOrigin) return;
            console.log('Received message:', e.data);        });
    },
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            },
        },
    },

}
</script>


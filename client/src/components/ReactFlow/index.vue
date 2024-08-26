<template>

    <div>

        
        <iframe 
        ref="iframe"
        src="http://localhost:5173/" 
        style="width: 100%; height: 50vh" frameborder="0"></iframe>
    <button class="btn btn-primary" @click="test()">
        run
    </button>
    </div>
        
</template>

<script>
export default {
    data(){
        expectedOrigin="http://localhost:5173"
    },
    methods:{
        test(){
            alert('btn clicked')
        }
    },
    mounted() {

        window.addEventListener("message", (e) => {
            if(e.origin != this.expectedOrigin) return;
            console.log('Received message:', event.data);        });
    }
}
</script>


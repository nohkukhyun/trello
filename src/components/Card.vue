<template>
  <div>
    Card
    <div v-if="loading">
      Loading Card...
    </div>
    <div v-else>
      <div>cid: {{cid}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cid: 0,
      loading: false
    }
  },
  watch:{
    '$route': {
      handler: 'fetchData',
      immediate : true
    }
  },
  methods:{
    fetchData(){
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500);
    }
  },

  watch:{
    //라우트를 감시하고있다가 변경이되면 다시 cid반영
    '$route'(){
      this.cid = this.$route.params.cid
    }
  }
}
</script>

<style>

</style>

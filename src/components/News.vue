<template>
    <div class="container">
        <div class="area">
          <div class="row">
            <h2 class="title" v-html="items.title">{{items.title}}</h2>
           <p v-html="items.content" class="pubDescription">{{items.content}}</p>
        <router-link to="/" class="back">Back</router-link>
        <p class="date">{{ items.pubDate }}</p>
        <!-- <a :href="link">Read on Medium</a> -->
      </div>
       </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      index: this.$route.params.index,
      items : {},
      blockList : []
    }
  },
    mounted () {
      this.takeBlocks()
  },
  methods : {
     takeBlocks(){
       axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40isikduygu&api_key=h7oj8jf9hhn9pjekkkylbwla02q1vq00jesik09u')
      .then((response) => {
       this.blockList = response.data.items
        if(this.blockList.length >= this.index+1){
        this.items = this.blockList[this.index]
      }else{
        this.$router.push("/")
      }
      })
      .catch(error => console.log(error))
    }
  },
};
</script>
<style scoped>
.container{
  margin-bottom:50px;
}
.back{
  text-decoration: none;
  color: black;
  margin: 15px;
}
.date{
  font-size: 12px;
  text-align: end;
}
.row{
  width: 80%;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    padding:20px;
    border-radius: 20px;
    position: relative;
}
.area{
  display: flex;
  justify-content: center;
}
.title{
  text-align: center;
  margin-bottom: 50px;
}
.pubDescription{
  line-height: 1.5em;
}
.back{
  text-decoration: none;
  width:50px;
  color: gray;
}
.back:hover{
  color: black;
  border-bottom: 2px solid black;
}
</style>
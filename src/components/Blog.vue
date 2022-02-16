<template>
      <div class="container">
        <div v-for="(item,index) in items" :key="index" class="area">
            <div class="center">
              <div class=" frame-area">
                <p class="date">{{item.pubDate}}</p>
                <h2 class="title">{{item.title}}</h2>
                <div class="des-area">
              <div class="des-content">
                  <p v-html="item.description" class="description">{{item.description}}</p>
                  <router-link  class="read-more" active-class="active" :to="{ name: 'news' , params: { index: index }}">Read More</router-link>
              </div>
               <img :src="item.thumbnail" alt="" class="image"> </div>
              </div>
            </div>
            </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Blog',
    data () {
    return {
      items : []
  }},
  mounted () {
    axios
      .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isikduygu')
      .then(response => console.log(this.items = response.data.items))
      .catch(error => console.log(error))
  }
}
</script>

<style>
.frame-area{
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    padding:20px 0px 20px 50px;
    border-radius: 20px;
    position: relative;
    margin-bottom: 25px;
    width: 60%;
}
.read-more{
  text-decoration: none;
  width:100px;
  color: gray;
  text-align: center;
}
.read-more:hover{
  color: black;
  border-bottom: 2px solid black;
}
.date{
  font-size: 12px;
}
.image{
  width: 25%;
  margin-left: 50px;
  object-fit: cover;
}
h3{
  line-height:  1.8em;
}
.area{
  display: flex;
  justify-content: center;
}
.description{
  max-height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
  letter-spacing: 0;
  line-height: 24px;
}
.description figure{
  display: none
}
.des-area{
  display: flex;
  margin-top: 45px;
}
.des-content{
  width: 65%;
}
img{
  width: 50%;
  margin: 0 auto;
}
.center{
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
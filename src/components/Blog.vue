<template>
      <div class="container">
        <div v-for="(item,index) in items" :key="index" class="area">
            <div class="row">
              <div class=" frame-area">
                <p class="date">{{item.pubDate}}</p>
                <h2 class="title">{{item.title}}</h2>
                <div class="content-area"><p v-html="item.description" class="description">{{item.description}}</p>
               <img :src="item.thumbnail" alt="" class="image"></div>
                 <router-link  class="read-more" active-class="active" :to="{ name: 'news' , params: { index: index }}">Read More</router-link>
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
      .get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@{your_medium_user_name}')
      .then(response => console.log(this.items = response.data.items))
      .catch(error => console.log(error))
  },
}
</script>

<style>
.frame-area{
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    padding:20px 0px 20px 50px;
    border-radius: 20px;
    position: relative;
    margin-bottom: 25px;
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
.description figure{
  display: none;
}
.description{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 62%;
  line-height: 10px;
}
h3{
  line-height:  1.8em;
}
.content-area{
  display: flex;
}
.row{
  width: 80%;
}
.area{
  display: flex;
  justify-content: center;
}
img{
  width: 100%;
}
</style>
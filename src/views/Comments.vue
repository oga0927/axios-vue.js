<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input
      id="name"
      v-model="name"
      type="text"
    >
    <br><br>
    <label for="comment">コメント:</label>
    <textarea
      id="comment"
      v-model="comment"
    />
    <br><br>
    <button @click="createComment">
      送信
    </button>
    <h2>掲示板</h2>
    <div
      v-for="post in posts"
      :key="post.name"
    >
      <br>
      <div>名前：{{ post.fields.name.stringValue }}</div>
      <div>コメント：{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() {
    axios.get("/comments").then(response => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    createComment() {
      axios.post(
        "/comments", {
          fields: {
            name: {
              stringValue:this.name
            },
            comment: {
              stringValue:this.comment
            }
          }
        }
      );
      this.name = "";
      this.comment = "";
    }
  }

};
</script>


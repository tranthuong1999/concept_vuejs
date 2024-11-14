
<template>
  <div>
    <h1>Card screen</h1>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :name="post.name"
        @enlarge-text="handleIncreaseSize"
      />
    </div>
    <div class="demo">
      <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        {{ tab }}
      </button>
      <component :is="activeComp"></component>
      <FancyButton> Hello baby </FancyButton>
      <SubmitButton />
      <SubmitButton>Save</SubmitButton>
      <BaseLayout>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>

        <template #default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>

        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </BaseLayout>
    </div>
    
  </div>
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import HomePage from "./components/HomePage.vue";
import ArchivePage from "./components/ArchivePage.vue";
import AboutPage from "./components/AboutPage.vue";


export default {
  name: "App",
  components: {
    BlogPost,
    HomePage,
    ArchivePage,
    AboutPage,
  },
  data() {
    return {
      currentTab: "Home",
      first: "tranthuong",
      last: "thaibinh",
      postFontSize: 1,
      posts: [
        { id: 1, title: "My journey with Vue", name: "name one" },
        { id: 2, title: "Blogging with Vue", name: "name 2" },
        { id: 3, title: "Why Vue is so fun", name: "name 3" },
      ],
      tabs: ["Home", "About", "Archived"],
    };
  },
  methods: {
    handleIncreaseSize() {
      this.postFontSize += 0.1;
    },
  },
  computed: {
    activeComp() {
      return this.currentTab === "Home"
        ? "HomePage"
        : this.currentTab === "About"
        ? "AboutPage"
        : "ArchivePage";
    },
  },
};
</script>

<style lang="scss">
.demo {
  margin-top: 50px;
}
</style>

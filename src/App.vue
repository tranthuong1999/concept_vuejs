
<template>
  <div>
    <div class="text-xs-center">
      <v-badge left>
        <template v-slot:badge>
          <span>6</span>
        </template>
        <v-icon large color="grey lighten-1"> shopping_cart </v-icon>
      </v-badge>

      <v-badge color="red">
        <template v-slot:badge>
          <span>!</span>
        </template>
        <v-icon large color="grey"> mail </v-icon>
      </v-badge>
    </div>
    <div>
      <h1>Font awesome</h1>
      <font-awesome-icon icon="coffee" />
      <font-awesome-icon icon="home" />
      <span class="material-icons">home</span>
      <span class="material-icons">favorite</span>
      <span class="material-icons">add</span>
      <CustomIcon/>
    </div>

    <h1>Card screen</h1>
    <h2 v-highlight="'blue'">foo js kawa</h2>
    <WatchPage />
    <div :style="{ fontSize: postFontSize + 'em' }">
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :name="post.name"
        @enlarge-text="handleIncreaseSize"
      />
    </div>
    <h1>Routing</h1>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/user">Users</router-link>
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
    <h1>Layout count</h1>
    <LifeCycle />
    <IncrementCount class="large" />
    <CustomDirective />
  </div>
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import HomePage from "./components/HomePage.vue";
import ArchivePage from "./components/ArchivePage.vue";
import AboutPage from "./components/AboutPage.vue";
import LifeCycle from "./components/LifeCycle.vue";
import IncrementCount from "./components/IncrementCount.vue";
import CustomDirective from "./components/CustomDirective.vue";

export default {
  name: "App",
  components: {
    BlogPost,
    HomePage,
    ArchivePage,
    AboutPage,
    LifeCycle,
    IncrementCount,
    CustomDirective,
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
      tabs: ["Home", "About", "Archived", "Checking"],
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

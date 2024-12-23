<template>
  <div style="width:100%">
    <!-- 导航栏 -->
    <el-container>
      <el-header class="navbar">
        <!-- <div class="logo">ANJIA WINDOW & DOOR</div> -->
        <el-menu mode="horizontal" click :default-active="activeIndex" class="nav-menu" @select="handleMenuSelect"
          text-color="black" active-text-color="#ffd04b">
          <!-- Windows 下拉菜单 -->
          <el-menu-item index="home"> {{$t("home")}}</el-menu-item>
          <!-- 其他菜单 -->
          <el-menu-item index="products"> {{$t("products")}}</el-menu-item>
          <el-menu-item index="about_us" @select="handleMenuSelect"> {{$t("about_us")}}</el-menu-item>
          <el-menu-item index="contact_us">{{$t("contact_us")}}</el-menu-item>
          <el-menu-item index="product_categories"> {{$t("product_categories")}}</el-menu-item>
          <el-sub-menu index="5">
            <template #title>{{$t("language")}}</template>
            <el-menu-item index="5-1-lang">
              <div style="width:100%" @click="changeLanguage('en')">English</div>
            </el-menu-item>
            <el-menu-item index="5-2-lang">
              <div style="width:100%" @click="changeLanguage('zh')">中文</div>
            </el-menu-item>
            <el-menu-item index="5-3-lang">
              <div style="width:100%" @click="changeLanguage('ar')">arab</div>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
        <!-- <el-button type="warning" class="quote-btn" @click="requestQuote">Request A Quote →</el-button> -->
      </el-header>
    </el-container>
  
    <!-- 横幅区域 -->
    <component :is="currentComponent"></component>
    <!-- <div class="banner">
                <div class="banner-content">
                  <el-row type="flex" justify="center" align="middle">
                    <el-col :span="24" class="text-center">
                      <p class="sub-title">Find Inspiration For Your Next Project</p>
                      <h1 class="title">Get Design Ideas & Inspiration</h1>
                    </el-col>
                  </el-row>
                </div>
              </div> -->
    <el-dialog v-model="dialogVisible" title="About Us" width="30%">
      <div>
        <p><strong>企业名称：</strong> {{ companyName }}</p>
        <p><strong>联系方式：</strong> {{ contactInfo }}</p>
      </div>
      <template #footer>
        <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import HomePage from './HomePage.vue'
import ProductsPage from './ProductsPage.vue'
import AboutPage from './AboutPage.vue'
import ContactPage from './ContactPage.vue'
import ProductCategoriesPage from './ProductCategoriesPage.vue'

const { locale } = useI18n();
// 切换语言
const changeLanguage = (lang) => {
  locale.value = lang;
};
const requestQuote = () => {
  this.$message({
    message: "Request a quote feature is coming soon!",
    type: "success",
  });
}

// 当前激活的菜单项
const activeIndex = ref("home");
const dialogVisible = ref(false);
const components = {
  home: HomePage,
  products: ProductsPage,
  about_us: AboutPage,
  contact_us: ContactPage,
  product_categories: ProductCategoriesPage
};
const companyName = "Anjia Window & Door Ltd.";
const contactInfo = "电话: 400-123-4567 | 邮箱: info@anjia.com";
// 监听菜单点击事件
const handleMenuSelect = (index) => {
  if (index === "about_us") {
    dialogVisible.value = true; // 弹出弹窗
    return false
  }else if(index.includes('lang')){
    
    return false
  }
  console.log(index);
  
  activeIndex.value = index; // 更新当前选中的菜单项
};
const currentComponent = computed(() => components[activeIndex.value]);

// 处理菜单点击事件

// export default {
//   name: "HomeView",
//   data() {
//     return {
//       activeIndex: "1", // 设置默认选中的导航项
//     };
//   },
//   methods: {
//     requestQuote() {
//       this.$message({
//         message: "Request a quote feature is coming soon!",
//         type: "success",
//       });
//     },
//   },
// };
</script>

<style>
/* 导航栏样式 */
.navbar {
  width: 80%;
  /* 导航栏宽度 */
  margin: 0 auto;
  /* 居中显示 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: black;
}

.nav-menu {
  flex: 1;
  font-size: 1.2rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

.nav-menu.el-menu--horizontal>.el-menu-item {
  font-size: 1.2rem;
}

.nav-menu.el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
  font-size: 1.2rem;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
  font-size: 1.2rem !important;
}

.quote-btn {
  font-weight: 500;
  border-radius: 20px;
}



.sub-title {
  font-size: 1.2em;
  color: #ffcc33;
  margin-bottom: 10px;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
}

.text-center {
  text-align: center;
}
</style>

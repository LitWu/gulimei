<template>
  <div class="product-container">
    <!-- 图片展示区域 -->
    <el-row :gutter="20" class="product-row">
      <el-col v-for="(item, index) in paginatedData" :key="index" :span="8" class="product-item">
        <el-card shadow="hover">
          <img :src="item.image" alt="product" class="product-image" />
          <div class="product-info">
            <p class="product-title">{{ item.title }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 分页控件 -->
    <el-pagination
      v-model="currentPage"
      :page-size="pageSize"
      :total="products.length"
      layout="prev, pager, next"
      @current-change="handlePageChange"
      class="pagination"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 数据源：产品列表（示例数据）
const products = ref([
  { id: 1, title: "产品 1", image: "../src/img/1.jpg" },
  { id: 2, title: "产品 2", image: "../src/img/2.jpg" },
  { id: 3, title: "产品 3", image: "../src/img/3.jpg" },
  { id: 4, title: "产品 4", image: "../src/img/4.jpg" },
  { id: 5, title: "产品 5", image: "../src/img/5.jpg" },
  { id: 6, title: "产品 6", image: "../src/img/6.jpg" },
  { id: 7, title: "产品 7", image: "../src/img/7.jpg" },
  { id: 8, title: "产品 8", image: "../src/img/8.jpg" },
  { id: 9, title: "产品 9", image: "../src/img/9.jpg" },
  { id: 10, title: "产品 10", image: "../src/img/2.jpg" },
  { id: 11, title: "产品 11", image: "../src/img/3.jpg" },
  { id: 12, title: "产品 12", image: "../src/img/5.jpg" },
]);

// 分页设置
const currentPage = ref(1); // 当前页码
const pageSize = ref(9); // 每页展示9个产品（3行*3列）

// 计算当前页显示的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return products.value.slice(start, end);
});

// 处理页码变化
const handlePageChange = (page) => {
  currentPage.value = page;
};
</script>

<style scoped>
.product-container {
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
}

.product-row {
  margin-bottom: 30px; /* 行与行之间的间隔 */
}

.product-item {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* 每个产品下方的间隔 */
}

.product-image {
  width: 100%;
  height: 300px;
  border: 1px solid #ddd; /* 图片边框 */
  border-radius: 8px; /* 图片圆角 */
}

.product-info {
  text-align: center;
  margin-top: 10px;
}

.product-title {
  font-size: 14px;
  color: #333;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

</style>

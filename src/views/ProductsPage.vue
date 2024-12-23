<template>
  <div>
    <!-- 标题部分 -->
    <div style="text-align: center; margin: 20px 0;">
      <h1 style="font-weight: bold; font-size: 28px; margin-bottom: 10px;">Explore Our Products</h1>
      <p style="color: #666; font-size: 16px; line-height: 1.5;">
        Explore our extensive range of window and door types, designed for high performance and superior aesthetics,
        with virtually unlimited style options for a one-of-a-kind look.
      </p>
    </div>

    <!-- 产品卡片部分 -->
    <div style="display: flex; justify-content: center; gap: 20px; margin: 20px;">
      <!-- 窗户 -->
      <div
        style="
          width: 500px;
          height: 550px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
      >
        <img
          src="https://via.placeholder.com/300x350"
          alt="Windows"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
        <div
          style="
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: white;
          "
        >
          <h2 style="font-size: 24px; font-weight: bold;">Windows</h2>
          <el-button
            type="primary"
            style="
              background-color: transparent;
              border: 2px solid white;
              border-radius: 4px;
              padding: 5px 20px;
              color: white;
            "
          >
            View All Windows
          </el-button>
        </div>
      </div>

      <!-- 门 -->
      <div
        style="
          width: 500px;
          height: 550px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        "
      >
        <img
          src="https://via.placeholder.com/300x350"
          alt="Doors"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
        <div
          style="
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            color: white;
          "
        >
          <h2 style="font-size: 24px; font-weight: bold;">Doors</h2>
          <el-button
            type="primary"
            style="
              background-color: transparent;
              border: 2px solid white;
              border-radius: 4px;
              padding: 5px 20px;
              color: white;
            "
          >
            View All Doors
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const pageName = ref("ProductsPage")

</script>
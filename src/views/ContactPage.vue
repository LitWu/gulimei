<template>
  <div>
    <!-- 全屏横幅 -->
    <div style="position: relative; height: 400px; overflow: hidden;">
      <img
        src="https://via.placeholder.com/1920x400"
        alt="Factory Background"
        style="width: 100%; height: 100%; object-fit: cover;"
      />
      <!-- 数据统计 -->
      <div
        style="
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          display: flex;
          justify-content: space-around;
          width: 70%;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          z-index: 10;
        "
      >
        <div style="text-align: center; flex: 1;">
          <h2 style="font-size: 28px; font-weight: bold; margin: 0; color: #333;">19+</h2>
          <p style="margin: 5px 0; color: #666;">Years Experience</p>
        </div>
        <div style="text-align: center; flex: 1;">
          <h2 style="font-size: 28px; font-weight: bold; margin: 0; color: #333;">48500FT²</h2>
          <p style="margin: 5px 0; color: #666;">Factory Area</p>
        </div>
        <div style="text-align: center; flex: 1;">
          <h2 style="font-size: 28px; font-weight: bold; margin: 0; color: #333;">120k+</h2>
          <p style="margin: 5px 0; color: #666;">Trading Client</p>
        </div>
        <div style="text-align: center; flex: 1;">
          <h2 style="font-size: 28px; font-weight: bold; margin: 0; color: #333;">10000+</h2>
          <p style="margin: 5px 0; color: #666;">Finished Projects</p>
        </div>
      </div>
    </div>

    <!-- 内容部分 -->
    <div style="margin-top: 80px; width: 60%; margin-left: auto; margin-right: auto;">
      <!-- 文本部分 -->
      <div>
        <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 20px;">
          guguguguguguis Focused on Bringing You Beautiful, Quality Window and Door
        </h2>
        <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
          guguguguguguis a premium window and door manufacturer based in China. For over 19 years, we have provided our customers with high-quality customized window and door products. We use state-of-the-art equipment to make each product, ensuring quality, consistency, and long-lasting durability.
        </p>
        <h3 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Our Advantages</h3>
        <ul style="padding-left: 20px; color: #666; line-height: 1.8;">
          <li>✔ Exquisite craftsmanship</li>
          <li>✔ Quality materials and hardware</li>
          <li>✔ Perfect attention to detail</li>
          <li>✔ Tailored to your needs</li>
          <li>✔ Competitive pricing</li>
          <li>✔ Safe & fast delivery</li>
          <li>✔ Worry-free project management</li>
        </ul>
        <el-button type="primary" style="margin-top: 20px;">View Our Certifications</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WanjiaLayout",
};
</script>

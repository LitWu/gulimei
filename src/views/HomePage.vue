<template>
    <div class="">
        <div class="banner">
            <div class="banner-content">
                <el-row type="flex" justify="center" align="middle">
                    <el-col :span="24" class="text-center">
                        <p class="sub-title">Find Inspiration For Your Next Project</p>
                        <h1 class="title">Get Design Ideas & Inspiration</h1>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- <div style="margin:2rem auto;width:50%;font-size:1.5rem">
            Imagine the Possibilities
            Get inspired by design trends for windows, doors, home improvements, and indoor/outdoor decor. Our experts
            provide a free, no-obligation quote to transform your space.
        </div> -->
        <div>
            <!-- 标题部分 -->
            <div style="text-align: center; margin: 80px 0;">
                <h1 style="font-weight: bold; font-size: 28px; margin-bottom: 10px;">Explore Our Products</h1>
                <p style="font-size:1.2rem">
                    Explore our extensive range of window and door types, designed for high performance and superior
                    aesthetics,
                    
                </p>
                <p style="font-size:1.2rem">with virtually unlimited style options for a one-of-a-kind look.</p>
            </div>
    
            <!-- 产品卡片部分 -->
            <div style="display: flex; justify-content: center; gap: 20px; margin: 10px;">
                <!-- 窗户 -->
                <div style="
                          width: 500px;
                          height: 550px;
                          position: relative;
                          border-radius: 8px;
                          overflow: hidden;
                          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        ">
                    <img :src="`../src/img/${1}.jpg`" alt="Windows" style="width: 100%; height: 100%; object-fit: cover;" />
                    <div style="
                            position: absolute;
                            bottom: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                            text-align: center;
                            color: black;
                          ">
                        <h2 style="font-size: 24px; font-weight: bold;">Windows</h2>
                        <el-button type="primary" style="
                              background-color: transparent;
                              border: 2px solid black;
                              border-radius: 4px;
                              padding: 5px 20px;
                              color: black;
                            ">
                            View All Windows
                        </el-button>
                    </div>
                </div>
    
                <!-- 门 -->
                <div style="
                          width: 500px;
                          height: 550px;
                          position: relative;
                          border-radius: 8px;
                          overflow: hidden;
                          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        ">
                    <img :src="`../src/img/${0}.jpg`" alt="Doors" style="width: 100%; height: 100%; object-fit: cover;" />
                    <div style="
                            position: absolute;
                            bottom: 20px;
                            left: 50%;
                            transform: translateX(-50%);
                            text-align: center;
                            color: black;
                          ">
                        <h2 style="font-size: 24px; font-weight: bold;">Doors</h2>
                        <el-button type="primary" style="
                              background-color: transparent;
                              border: 2px solid black;
                              border-radius: 4px;
                              padding: 5px 20px;
                              color: black;
                            ">
                            View All Doors
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    
    
        <!-- v-for:: :style="item.id % 2 > 0 ? `margin-right:5rem` : `margin-left:5rem`" -->
        <!-- <el-row class="content pic_text" v-for="item in img_desc" :key="item.id">
                <el-col :span="12" class="left-section">
                    <img :src="`../src/img/${item.id}.jpg`" alt="示例图片" class="image" />
                </el-col>
                <el-col :span="12" class="right-section">
                    <div class="text-content">
                        <h2>{{item.id}}</h2>
                        <p>
                            {{$t("homeImg0")}}
                        </p>
                    </div>
                </el-col>
            </el-row> -->

            <!-- 第二横幅 -->
        <!-- <div class="banner">
            <div class="banner-content">
                <el-row type="flex" justify="center" align="middle">
                    <el-col :span="24" class="text-center">
                        <p class="sub-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h1 class="title">Lorem ipsum dolor sit amet.</h1>
                    </el-col>
                </el-row>
            </div>
        </div> -->
    
        <div>
            <!-- 全屏横幅 -->
            <div style="position: relative; height: 400px; overflow: hidden;">
                <img src="https://via.placeholder.com/1920x400" alt="Factory Background"
                    style="width: 100%; height: 100%; object-fit: cover;" />
                <!-- 数据统计 -->
                <div style="
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
                ">
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
                        WANJIA is Focused on Bringing You Beautiful, Quality Window and Door
                    </h2>
                    <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
                        WANJIA is a premium window and door manufacturer based in China. For over 19 years, we have provided
                        our customers with high-quality customized window and door products. We use state-of-the-art
                        equipment to make each product, ensuring quality, consistency, and long-lasting durability.
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
    
    
    
        <!-- <el-row class="content pic_text">
                                        <el-col :span="12" class="left-section">
                                            <img src="https://via.placeholder.com/300" alt="示例图片" class="image" />
                                        </el-col>
                                        <el-col :span="12" class="right-section">
                                            <div class="text-content">
                                                <h2>示例标题</h2>
                                                <p>
                                                    这里是示例文本内容。你可以在这里添加更多的描述信息，比如段落、列表等。两部分的内容各占50%宽度，并且整体区域占父元素75%的宽度。
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row> -->
    </div>
</template>

<script setup>
import { ref } from "vue"
const pageName = ref("homepage")
const img_desc = [
  {
    id: 0, desc: `视野开阔：窗户设计宽大，视野极佳，可以充分欣赏外部的景观，特别是绿色植被和水景。
\n采光极佳：大面积玻璃窗使得自然光充足，室内更加明亮。
\n现代设计：窗框采用简洁线条和深色金属材质，展现现代化设计感。
\n通风性能：多扇窗户可独立开启，便于灵活调整通风。
\n节能环保：大窗户可以有效利用自然光，减少对人工照明的依赖。
\n视线隐私兼具：视野既开阔，又能避开直接邻近的建筑，保护住户的隐私。`
  },
  {
    id: 1, desc: 'nothing'
  },
  //   {
  //     id: 2, desc: 'nothing'
  //   },
  //   {
  //     id: 3, desc: 'nothing'
  //   },
  //   {
  //     id: 4, desc: 'nothing'
  //   },
  //   {
  //     id: 5, desc: 'nothing'
  //   },
  //   {
  //     id: 6, desc: 'nothing'
  //   },
  //   {
  //     id: 7, desc: 'nothing'
  //   },
  //   {
  //     id: 8, desc: 'nothing'
  //   },
  //   {
  //     id: 9, desc: 'nothing'
  //   },
  //   {
  //     id: 10, desc: 'nothing'
  //   },
]
</script>
<style>
.desc {}

/* 横幅区域样式 */
.banner {
    width: 100%;
    /* 横幅区域占满整个宽度 */
    background-image: url("https://wanjiawindows.com/wp-content/uploads/2023/09/inspiration-banner.webp");
    background-size: cover;
    background-position: center;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* 添加灰色透明蒙层 */
}

.banner-content {
    position: relative;
    color: white;
    text-align: center;
}

/* 容器设置 */
.pic_text {
    white-space: pre-line;
    /* 保留换行符 */

    width: 65%;
    /* 父元素宽度的75% */
    margin: 2rem auto;
    /* 水平居中 */
    background-color: #fff;
    /* 背景色白色 */
    border: 1px solid black;
    /* 黑色边框 */
    display: flex;
    box-sizing: border-box;
    align-items: center;
    /* 垂直居中 */
}


/* 左侧图片 */
.left-section {
    display: flex;
    justify-content: center;
    /* 图片居中 */
}

.image {
    width: 100%;
    height: auto;
    /* 保持图片比例 */
}

/* 右侧文字 */
.right-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.text-content {
    text-align: left;
}
</style>
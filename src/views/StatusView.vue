<template>
  <div class="container my-10 mx-auto">
    <h1 class="text-xl font-bold p-5">สถานะเอกสาร</h1>

    <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-10">
      <router-link to="/statusConfer">
        <h2 class="text-lg font-bold">
          ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
        </h2>
        <div class="columns-2  mt-2 ml-5">
          <div>
            <div class="flex">
              <h4 class="mr-5">งานประชุม :</h4>
              <h4 class="">AFS in ACE</h4>
            </div>
            <div class="flex">
              <p class="mr-5">ชื่อบทความ :</p>
              <p>Title</p>
            </div>
          </div>
          <div class="flex justify-end  h-20 items-center">
            <p class="text-red-600 mr-10">สถานะตรวจสอบ</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 2 -->
    <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-10">
      <router-link to="/statusPC">
        <h2 class="text-lg font-bold">
          PC
        </h2>
        <div class="columns-2  mt-2 ml-5">
          <div>
            <div class="flex">
              <h4 class="mr-5">งานประชุม :</h4>
              <h4 class="">AFS in ACE</h4>
            </div>
            <div class="flex">
              <p class="mr-5">ชื่อบทความ :</p>
              <p>Title</p>
            </div>
          </div>
          <div class="flex justify-end  h-20 items-center">
            <p class="text-red-600 mr-10">สถานะตรวจสอบ</p>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 3 -->
    <div class="p-5 shadow m-5 rounded-xl hover:cursor-pointer mb-10">
      <router-link to="/statusKris">
        <h2 class="text-lg font-bold">
          Kris
        </h2>
        <div class="columns-2  mt-2 ml-5">
          <div>
            <div class="flex">
              <h4 class="mr-5">งานประชุม :</h4>
              <h4 class="">AFS in ACE</h4>
            </div>
            <div class="flex">
              <p class="mr-5">ชื่อบทความ :</p>
              <p>Title</p>
            </div>
          </div>
          <div class="flex justify-end  h-20 items-center">
            <p class="text-red-600 mr-10">สถานะตรวจสอบ</p>
          </div>
        </div>
      </router-link>
    </div>


  </div>
  <!-- test -->

</template>

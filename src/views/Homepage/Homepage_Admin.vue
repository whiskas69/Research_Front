<template>
    <div>
        <div class="container my-10 mx-auto ">
            <p class="text-xl font-bold pb-5">การจัดการผู้ใช้</p>
            <!-- table -->
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th></th>
                            <th class="text-xl text-black text-center">ID</th>
                            <th class="text-xl text-black text-center">ชื่อผู้ใช้</th>
                            <th class="text-xl text-black text-center">หน้าที่ของผู้ใช้</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <th class="text-center">1</th>
                            <td class="text-center">013458</td>
                            <td class="text-center">นายจารุวัฒน์ วรรณวนัช</td>
                            <td class="text-center">
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected>อาจารย์</option>
                                    <option>เจ้าหน้าที่ HR</option>
                                    <option>เจ้าหน้าที่งานวิจัย</option>
                                    <option>เจ้าหน้าที่การเงิน</option>
                                    <option>รองคณบดี</option>
                                    <option>คณบดี</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-error text-base text-white">ลบผู้ใช้</button>
                            </td>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                            <th class="text-center">2</th>
                            <td class="text-center">013459</td>
                            <td class="text-center">นางแก้วอำพา วรรณวนัช</td>
                            <td class="text-center">
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected>อาจารย์</option>
                                    <option>เจ้าหน้าที่ HR</option>
                                    <option>เจ้าหน้าที่งานวิจัย</option>
                                    <option>เจ้าหน้าที่การเงิน</option>
                                    <option>รองคณบดี</option>
                                    <option>คณบดี</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-error text-base text-white">ลบผู้ใช้</button>
                            </td>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <th class="text-center">3</th>
                            <td class="text-center">013460</td>
                            <td class="text-center">นางจอมขวัญ ไกรวิชญ์</td>
                            <td class="text-center">
                                <select class="select select-bordered w-full max-w-xs">
                                    <option disabled selected>อาจารย์</option>
                                    <option>เจ้าหน้าที่ HR</option>
                                    <option>เจ้าหน้าที่งานวิจัย</option>
                                    <option>เจ้าหน้าที่การเงิน</option>
                                    <option>รองคณบดี</option>
                                    <option>คณบดี</option>
                                </select>
                            </td>
                            <td class="text-center">
                                <button class="btn btn-error text-base text-white">ลบผู้ใช้</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex justify-end mt-5">
                <button class="btn btn-success text-white">ยืนยัน</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>

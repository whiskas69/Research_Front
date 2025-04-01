<template>
  <div class="container my-10 mx-auto">
    <div class="tabs tabs-lift">
      <input type="radio" name="mytabs" class="tab" aria-label="การประชุมวิชาการนานาชาติ 1" checked="checked" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>
          ข้อมูลการประชุมวิชาการ
          แยกการขอเบิกและแสดงเอกสารทั้งหมดที่ได้รับอนุมัติ
        </h2>
        <div class="overflow-x-auto mt-2">
          <div class="flex justify-end">
            <button class="btn bg-[#E85F19] text-white" @click="exportExcel('dataconfer1_1')">
              Export to Excel
            </button>
          </div>
          <table class="table w-full mt-2" ref="dataconfer1_1">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2">ขอเบิก</th>
                <th class="border px-3 py-2">จำนวน</th>
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าตั๋วเครื่องบิน</th>
                <th class="border px-3 py-2">ค่าที่พัก</th>
                <th class="border px-3 py-2">ค่าเบี้ยเลี้ยง</th>
                <th class="border px-3 py-2">ค่าใช้จ่ายอื่น ๆ</th>
                <th class="border px-3 py-2">รวม</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th class="border px-3 py-2">ร้อยละ 50</th>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_withdraws || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_registration || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_ticket || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_room || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_allowance || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.total_other || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw50?.all_total || 0).toLocaleString("en-US")
                  }}
                </td>
              </tr>
              <tr>
                <th class="border px-3 py-2">เต็มวงเงิน</th>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_withdraws || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_registration || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_ticket || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_room || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_allowance || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.total_other || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(withdraw100?.all_total || 0).toLocaleString("en-US")
                  }}
                </td>
              </tr>
            </tbody>
          </table>

          <div class="flex justify-end mt-2">
            <button class="btn bg-[#E85F19] text-white" @click="exportExcel('dataconfer1_2')">
              Export to Excel
            </button>
          </div>
          <table class="table w-full mt-2" ref="dataconfer1_2">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2">ลำดับที่</th>
                <th class="border px-3 py-2">ชื่อ</th>
                <th class="border px-3 py-2">ชื่อผลงานวิจัย</th>
                <th class="border px-3 py-2">ชื่อการประชุม</th>
                <th class="border px-3 py-2">จังหวัด/ประเทศ</th>
                <th class="border px-3 py-2">คุณภาพการประชุม</th>
                <th class="border px-3 py-2">ขอเบิก</th>
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าตั๋วเครื่องบิน</th>
                <th class="border px-3 py-2">ค่าที่พัก</th>
                <th class="border px-3 py-2">ค่าเบี้ยเลี้ยง</th>
                <th class="border px-3 py-2">ค่าอื่น ๆ</th>
                <th class="border px-3 py-2">รวม</th>
                <th class="border px-3 py-2">สิทธิ์ที่ได้</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in conferenceData" :key="index" class="text-center">
                <td class="border px-3 py-2">{{ index + 1 }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.conf_name }}</td>
                <td class="border px-3 py-2">{{ row.conf_research }}</td>
                <td class="border px-3 py-2">{{ row.location }}</td>
                <td class="border px-3 py-2">
                  {{ row.meeting_type }}
                  {{ row.quality_meeting ? `, ${row.quality_meeting}` : "" }}
                </td>
                <td class="border px-3 py-2">{{ row.withdraw }}</td>
                <td class="border px-3 py-2">
                  {{ Number(row.total_amount || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.inter_expenses || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.total_room || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.total_allowance || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.total_other || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.all_money || 0).toLocaleString("en-US") }}
                </td>
                <td class="border px-3 py-2">
                  {{ Number(row.amount_approval || 0).toLocaleString("en-US") }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="การประชุมวิชาการนานาชาติ 2"
        @click="activeTab = 'confer2'" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลการประชุมวิชาการ (ต่างประเทศ)</h2>
        <div class="flex justify-end mt-2">
          <button class="btn bg-[#E85F19] text-white" @click="exportExcel('dataconfer2')">
            Export to Excel
          </button>
        </div>
        <div class="overflow-x-auto mt-2">
          <table class="table w-full" ref="dataconfer2">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2" rowspan="2">ทวีป</th>
                <th class="border px-3 py-2" rowspan="2">จำนวน</th>
                <th class="border px-3 py-2" rowspan="2">ประเทศ</th>
                <th class="border px-3 py-2" rowspan="2">จำนวน</th>
                <th class="border px-3 py-2" colspan="7">ร้อยละ 50</th>
                <th class="border px-3 py-2" colspan="7">เต็มวงเงิน</th>
              </tr>
              <tr class="text-center">
                <!-- 50% columns -->
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าตั๋วเครื่องบิน</th>
                <th class="border px-3 py-2">ค่าที่พัก</th>
                <th class="border px-3 py-2">ค่าเบี้ยเลี้ยง</th>
                <th class="border px-3 py-2">อื่น ๆ</th>
                <th class="border px-3 py-2">รวม</th>
                <th class="border px-3 py-2">สิทธิ์ที่ได้</th>
                <!-- 100% columns -->
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าตั๋วเครื่องบิน</th>
                <th class="border px-3 py-2">ค่าที่พัก</th>
                <th class="border px-3 py-2">ค่าเบี้ยเลี้ยง</th>
                <th class="border px-3 py-2">อื่น ๆ</th>
                <th class="border px-3 py-2">รวม</th>
                <th class="border px-3 py-2">สิทธิ์ที่ได้</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- ASIA Row -->
              <template v-if="countryData.ASIA == 0">
                <tr>
                  <td class="border px-3 py-2">ASIA</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                </tr>
              </template>
              <template v-if="countryData.ASIA == 1">
                <tr>
                  <td class="border px-3 py-2">ASIA</td>
                  <td class="border px-3 py-2">{{ countryData.ASIA }}</td>
                  <template v-for="(row, index) in countryData.ASIA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="row.withdraw === '50%'">
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                      </template>
                      <template v-if="row.withdraw === '100%'">
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>
              <template v-if="countryData.ASIA > 1">
                <tr>
                  <td class="border px-3 py-2">ASIA</td>
                  <td class="border px-3 py-2">{{ countryData.ASIA }}</td>
                  <template v-for="(row, index) in countryData.ASIA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="index % 2 != 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                      <template v-if="index % 2 === 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>

              <!-- SEA Row -->
              <template v-if="countryData.SEA == 0">
                <tr>
                  <td class="border px-3 py-2">SEA</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                </tr>
              </template>
              <template v-if="countryData.SEA == 1">
                <tr>
                  <td class="border px-3 py-2">SEA</td>
                  <td class="border px-3 py-2">{{ countryData.SEA }}</td>
                  <template v-for="(row, index) in countryData.SEA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="row.withdraw === '50%'">
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                      </template>
                      <template v-if="row.withdraw === '100%'">
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>
              <template v-if="countryData.SEA > 1">
                <tr>
                  <td class="border px-3 py-2">SEA</td>
                  <td class="border px-3 py-2">{{ countryData.SEA }}</td>
                  <template v-for="(row, index) in countryData.SEA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="index % 2 != 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                      <template v-if="index % 2 === 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>

              <!-- EUA Row -->
              <template v-if="countryData.EUA == 0">
                <tr>
                  <td class="border px-3 py-2">EUA</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                  <td class="border px-3 py-2">-</td>
                </tr>
              </template>
              <template v-if="countryData.EUA == 1">
                <tr>
                  <td class="border px-3 py-2">EUA</td>
                  <td class="border px-3 py-2">{{ countryData.EUA }}</td>
                  <template v-for="(row, index) in countryData.EUA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="row.withdraw === '50%'">
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                      </template>
                      <template v-if="row.withdraw === '100%'">
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">-</td>
                        <td class="border px-3 py-2">
                          {{ row.total_registration }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_ticket }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_room }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_other }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_allowance }}
                        </td>
                        <td class="border px-3 py-2">
                          {{ row.total_amount_approval }}
                        </td>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>
              <template v-if="countryData.EUA > 1">
                <tr>
                  <td class="border px-3 py-2">EUA</td>
                  <td class="border px-3 py-2">{{ countryData.EUA }}</td>
                  <template v-for="(row, index) in countryData.EUA_data" :key="index">
                    <td class="border px-3 py-2">{{ row.location }}</td>
                    <td class="border px-3 py-2">{{ row.count }}</td>
                    <template v-for="(row, index) in row.details" :key="index">
                      <template v-if="index % 2 != 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                      <template v-if="index % 2 === 0">
                        <template v-if="row.withdraw === '50%'">
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                        <template v-if="row.withdraw === '100%'">
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">-</td>
                          <td class="border px-3 py-2">
                            {{ row.total_registration }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_ticket }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_room }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_other }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_allowance }}
                          </td>
                          <td class="border px-3 py-2">
                            {{ row.total_amount_approval }}
                          </td>
                        </template>
                      </template>
                    </template>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="การประชุมวิชาการนานาชาติ 3"
        @click="activeTab = 'confer3'" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลการประชุมวิชาการ (ในประเทศ)</h2>
        <div class="flex justify-end mt-2">
          <button class="btn bg-[#E85F19] text-white" @click="exportExcel('dataconfer3')">
            Export to Excel
          </button>
        </div>
        <div class="overflow-x-auto mt-2">
          <table class="table w-full" ref="dataconfer3">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2">จังหวัด</th>
                <th class="border px-3 py-2">จำนวน</th>
                <th class="border px-3 py-2">ค่าลงทะเบียน</th>
                <th class="border px-3 py-2">ค่าตั๋วเครื่องบิน</th>
                <th class="border px-3 py-2">ค่าที่พัก</th>
                <th class="border px-3 py-2">ค่าเบี้ยเลี้ยง</th>
                <th class="border px-3 py-2">อื่น ๆ</th>
                <th class="border px-3 py-2">รวม</th>
                <th class="border px-3 py-2">สิทธิ์ที่ได้</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <template v-for="(row, index) in inThai" :key="index">
                <tr>
                  <th class="border px-3 py-2">{{ row.location }}</th>
                  <td class="border px-3 py-2">{{ row.total_count }}</td>
                  <td class="border px-3 py-2">{{ row.total_registration }}</td>
                  <td class="border px-3 py-2">{{ row.total_ticket }}</td>
                  <td class="border px-3 py-2">{{ row.total_room }}</td>
                  <td class="border px-3 py-2">{{ row.total_allowance }}</td>
                  <td class="border px-3 py-2">{{ row.total_other }}</td>
                  <td class="border px-3 py-2">{{ row.all_total }}</td>
                  <td class="border px-3 py-2">
                    {{ row.total_amount_approval }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="Page Charge" @click="activeTab = 'pc'" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลทั้งหมดของ Page Charge</h2>
        <div class="flex justify-end mt-2">
          <button class="btn bg-[#E85F19] text-white" @click="exportExcel('datapc1')">
            Export to Excel
          </button>
        </div>
        <div class="overflow-x-auto mt-2">
          <table class="table w-full" ref="datapc1">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2" rowspan="2">Page Charge</th>
                <th class="border px-3 py-2" colspan="5">
                  วารสารอยู่ในข้อมูลสากล ใน Quartile
                </th>
                <th class="border px-3 py-2" rowspan="2">รวม</th>
              </tr>
              <tr class="text-center">
                <th class="border px-3 py-2">Quartile 1</th>
                <th class="border px-3 py-2">Quartile 2</th>
                <th class="border px-3 py-2">Quartile 3</th>
                <th class="border px-3 py-2">Quartile 4</th>
                <th class="border px-3 py-2">Nature</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <td class="border px-3 py-2">จำนวน</td>
                <td class="border px-3 py-2">
                  {{ CountPc[0]?.count_qt_1 || "0" }}
                </td>
                <td class="border px-3 py-2">
                  {{ CountPc[0]?.count_qt_2 || "0" }}
                </td>
                <td class="border px-3 py-2">
                  {{ CountPc[0]?.count_qt_3 || "0" }}
                </td>
                <td class="border px-3 py-2">
                  {{ CountPc[0]?.count_qt_4 || "0" }}
                </td>
                <td class="border px-3 py-2">
                  {{ CountPc[0]?.count_nature || "0" }}
                </td>
                <td class="border px-3 py-2">{{ totalCount }}</td>
              </tr>
              <tr>
                <td class="border px-3 py-2">งบ (บาท)</td>
                <td class="border px-3 py-2">
                  {{
                    Number(CountPc[0]?.money_qt_1 || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(CountPc[0]?.money_qt_2 || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(CountPc[0]?.money_qt_3 || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(CountPc[0]?.money_qt_4 || 0).toLocaleString("en-US")
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    Number(CountPc[0]?.money_nature || 0).toLocaleString(
                      "en-US"
                    )
                  }}
                </td>
                <td class="border px-3 py-2">{{ totalMoney }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end mt-5">
            <button class="btn bg-[#E85F19] text-white" @click="exportExcel('datapc2')">
              Export to Excel
            </button>
          </div>
          <table class="table w-full mt-2" ref="datapc2">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2" rowspan="2">ลำดับที่</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อ</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อบทความ</th>
                <th class="border px-3 py-2" rowspan="2">ชื่อวารสาร</th>
                <th class="border px-3 py-2" colspan="4">
                  วารสารอยู่ในข้อมูลสากล ใน Quartile
                </th>
                <th class="border px-3 py-2" rowspan="2">
                  คาดว่าจะตีพิมพ์ในวารสาร
                </th>
                <th class="border px-3 py-2" rowspan="2">
                  ผลงานจากโครงการวิจัยเรื่อง
                </th>
                <th class="border px-3 py-2" rowspan="2">ประเภทโครงการวิจัย</th>
                <th class="border px-3 py-2" rowspan="2">
                  ค่าใช้จ่ายในการลงตีพิมพ์
                </th>
              </tr>
              <tr class="text-center">
                <th class="border px-3 py-2">ISI</th>
                <th class="border px-3 py-2">SJR</th>
                <th class="border px-3 py-2">Scopus</th>
                <th class="border px-3 py-2">Nature</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in SummaryPc" :key="index" class="text-center">
                <td class="border px-3 py-2">{{ index + 1 }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.journal_name }}</td>
                <td class="border px-3 py-2">{{ row.article_title }}</td>
                <td class="border px-3 py-2">
                  {{ row.qt_isi ? `Quartile ${row.qt_isi}` : "-" }}
                </td>
                <td class="border px-3 py-2">
                  {{ row.qt_sjr ? `Quartile ${row.qt_sjr}` : "-" }}
                </td>
                <td class="border px-3 py-2">
                  {{ row.qt_scopus ? `Quartile ${row.qt_scopus}` : "-" }}
                </td>
                <td class="border px-3 py-2">
                  {{
                    row.quality_journal &&
                      row.quality_journal.includes("nature")
                      ? "✔"
                      : "-"
                  }}
                </td>
                <td class="border px-3 py-2">{{ row.month }} {{ row.year }}</td>
                <td class="border px-3 py-2">
                  {{
                    row.article_research_ject
                      ? `${row.article_research_ject}`
                      : "-"
                  }}
                </td>
                <td class="border px-3 py-2">
                  {{ row.research_type ? `${row.research_type}` : "-" }}
                </td>
                <td class="border px-3 py-2">{{ row.request_support }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <input type="radio" name="mytabs" class="tab" aria-label="โครงงานวิชาการ" @click="activeTab = 'kris'" />
      <div class="tab-content bg-base-100 border-base-300 p-6">
        <h2>ข้อมูลทั้งหมดของโครงงานวิชาการ</h2>
        <div class="flex justify-end mt-2">
          <button class="btn bg-[#E85F19] text-white" @click="exportExcel('datakris')">
            Export to Excel
          </button>
        </div>
        <div class="overflow-x-auto mt-2">
          <table class="table w-full" ref="datakris">
            <thead>
              <tr class="text-center">
                <th class="border px-3 py-2">ลำดับที่</th>
                <th class="border px-3 py-2">ชื่อ</th>
                <th class="border px-3 py-2">ชื่อผลงานวิจัย</th>
                <th class="border px-3 py-2">กลุ่มวิจัย</th>
                <th class="border px-3 py-2">มาตรฐานการวิจัย</th>
                <th class="border px-3 py-2">มาตราทางการค้า</th>
                <th class="border px-3 py-2">ระยะเวลาโครงการ(ปี)</th>
                <th class="border px-3 py-2">วันที่เริ่ม</th>
                <th class="border px-3 py-2">วันสิ้นสุด</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in krisData" :key="index" class="text-center">
                <td class="border px-3 py-2">{{ row.kris_id }}</td>
                <td class="border px-3 py-2">{{ row.user_nameth }}</td>
                <td class="border px-3 py-2">{{ row.name_research_th }}</td>
                <td class="border px-3 py-2">
                  {{ row.formattedResearch_cluster }},
                  {{ row.res_cluster_other }}
                </td>
                <td class="border px-3 py-2 w-1/6">
                  {{ row.formattedres_standard }}
                </td>
                <td class="border px-3 py-2" v-if="row.res_standard_trade == '52'">
                  มาตรา 52 (เพื่อประโยชน์ทางการค้า)
                </td>
                <td class="border px-3 py-2" v-if="row.res_standard_trade == '53'">
                  มาตรา 53 (ไม่มีวัตถุประสงค์เพื่อประโยชน์ทางการค้า)
                </td>
                <td class="border px-3 py-2" v-if="
                  row.res_standard_trade == '' ||
                  row.res_standard_trade == null
                ">
                  {{ row.res_standard_trade }}
                </td>
                <td class="border px-3 py-2">{{ row.year }}</td>
                <td class="border px-3 py-2">{{ row.formattedStartDate }}</td>
                <td class="border px-3 py-2">{{ row.formattedEndDate }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from "vue";
import api from "@/setting/api";
import { DateTime } from "luxon";
import * as XLSX from "xlsx";

const conferenceData = ref([]);
const SummaryPc = ref([]);
const CountPc = ref([]);
const krisData = ref([]);
const withdraw50 = ref([]);
const withdraw100 = ref([]);
const inThai = ref([]);
const countryData = reactive({
  ASIA: 0,
  ASIA_data: "",
  SEA: 0,
  SEA_data: "",
  EUA: 0,
  EUA_data: "",
});

const dataconfer1_1 = ref(null);
const dataconfer1_2 = ref(null);
const dataconfer2 = ref(null);
const dataconfer3 = ref(null);
const datapc1 = ref(null);
const datapc2 = ref(null);
const datakris = ref(null);

const totalCount = computed(() => {
  if (CountPc.value.length === 0) return 0;
  return Object.keys(CountPc.value[0])
    .filter((key) => key.startsWith("count_"))
    .reduce((sum, key) => sum + CountPc.value[0][key], 0);
});

const totalMoney = computed(() => {
  if (CountPc.value.length === 0) return 0;
  return Object.keys(CountPc.value[0])
    .filter((key) => key.startsWith("money_"))
    .reduce((sum, key) => sum + Number(CountPc.value[0][key] || 0), 0)
    .toLocaleString("en-US");
});

const getConferenceData = async () => {
  const response = await api.get("/all_summary_conference");

  conferenceData.value = response.data;
};

const getPageChargeData = async () => {
  const response = await api.get("/all_summary_page_charge");

  SummaryPc.value = response.data[0];
  CountPc.value = response.data[1];
};

const getKrisData = async () => {
  const response = await api.get("/all_summary_kris");

  krisData.value = response.data.map((item) => ({
    ...item,
    formattedStartDate: item.project_periodStart
      ? DateTime.fromISO(item.project_periodStart).toFormat("dd-MM-yyyy")
      : "N/A",
    formattedEndDate: item.project_periodEnd
      ? DateTime.fromISO(item.project_periodEnd).toFormat("dd-MM-yyyy")
      : "N/A",
    formattedResearch_cluster: item.research_cluster
      .filter((item) => item !== "อื่น ๆ")
      .join(", "),
    formattedres_standard: item.res_standard.join(", "),
  }));
};

const getConfer_countwithdraw = async () => {
  const response = await api.get("/count_confer_withdraw");

  withdraw50.value = response.data[0];
  withdraw100.value = response.data[1];
};

const getConfer_country = async () => {
  try {
    const response = await api.get("/count_confer_country");
    const data = response.data; // JSON ที่ได้จาก API

    // ฟังก์ชันจัดกลุ่มข้อมูลตาม location และลบ location ออกจาก details
    const groupByLocation = (regionData) => {
      const grouped = {};
      regionData.data.forEach((item) => {
        const { location, ...detailWithoutLocation } = item; // ลบ location ออกจาก details

        if (!grouped[location]) {
          grouped[location] = {
            location: location,
            count: 0,
            details: [],
          };
        }
        grouped[location].count += 1;
        grouped[location].details.push(detailWithoutLocation);
      });

      return Object.values(grouped);
    };

    countryData.ASIA = data.ASIA?.count || 0;
    countryData.ASIA_data = data.ASIA ? groupByLocation(data.ASIA) : [];

    countryData.SEA = data.SEA?.count || 0;
    countryData.SEA_data = data.SEA ? groupByLocation(data.SEA) : [];

    countryData.EUA = data.EUA?.count || 0;
    countryData.EUA_data = data.EUA ? groupByLocation(data.EUA) : [];
  } catch (error) {
    console.log("Failed to fetch country data:", error);
  }
};

const getConfer_thai = async () => {
  const response = await api.get("/count_confer_thai");

  inThai.value = response.data;
};

const exportExcel = (tableRefName) => {
  let table = null;
  let name = null

  if (tableRefName === "dataconfer1_1") {
    table = dataconfer1_1.value;
    name = "ข้อมูลการประชุมวิชาการแยกจากการขอเบิก"
  } else if (tableRefName === "dataconfer1_2") {
    table = dataconfer1_2.value;
    name = "ข้อมูลการประชุมวิชาการทั้งหมด"
  } else if (tableRefName === "dataconfer2") {
    table = dataconfer2.value;
    name = "ข้อมูลการประชุมวิชาการในต่างประเทศแยกด้วยทวีป"
  } else if (tableRefName === "dataconfer3") {
    table = dataconfer3.value;
    name = "ข้อมูลการประชุมวิชาการในประเทศแยกด้วยจังหวัด"
  } else if (tableRefName === "datapc1") {
    table = datapc1.value;
    name = "ข้อมูลการขอการสนับสนุนการตีพิมพ์แยกด้วย Quartile"
  } else if (tableRefName === "datapc2") {
    table = datapc2.value;
    name = "ข้อมูลการขอการสนับสนุนการตีพิมพ์ทั้ง"
  } else if (tableRefName === "datakris") {
    table = datakris.value;
    name = "ข้อมูลโครงงานวิชาการทั้งหมด"
  }

  if (!table || !(table instanceof HTMLElement)) {
    console.error("Table reference is invalid:", tableRefName);
    return;
  }

  //ดึงข้อมูลจากตาราง HTML
  let rows = Array.from(table.querySelectorAll("tr")).map((row) =>
    Array.from(row.querySelectorAll("th, td")).map((cell) => cell.innerText)
  );

  //สร้าง Sheet ใหม่จากข้อมูลที่ได้
  let worksheet = XLSX.utils.aoa_to_sheet(rows);
  let workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // ปรับความกว้างของคอลัมน์
  worksheet["!cols"] = new Array(rows[0].length).fill({ wch: 20 });

  //บันทึกไฟล์ Excel
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

  saveAs(blob, `${name}.xlsx`);
};

onMounted(() => {
  getConferenceData();
  getPageChargeData();
  getKrisData();
  getConfer_countwithdraw();
  getConfer_country();
  getConfer_thai();
});
</script>

<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        ขออนุมัติเดินทางไปเผยแพร่ผลงานในการประชุมทางวิชาการ
      </p>
      <Mainbox>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อ"
            customLabel="w-2/12 text-lg font-bold"
            disabled="true"
            :placeholder="formData.user.user_nameth"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.user.user_positionth"
            disabled="true"
          />

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
              customLabel="w-auto"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.conference.conf_times"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.conference.conf_days)"
            />
          </div>
          <p class="text-red-500 text-sm">
            สามารถตรวจสอบรายชื่อ List ของคณะได้ที่เว็บไซต์คณะที่ Share
            online-การวิจัย และ
            <a href="https://erp.it.kmitl.ac.th/journal_conf_list"
              >https://erp.it.kmitl.ac.th/journal_conf_list</a
            >
          </p>
        </SectionWrapper>
      </Mainbox>

      <!-- 1.  รายละเอียดการขออนุมัติเดินทาง -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1. รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="เดินทางวันที่"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.conference.trav_dateStart)"
            />
            <TextInputLabelLeft
              label="ถึงวันที่"
              customLabel="w-auto mr-8"
              customDiv="max-w-max ml-36"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.conference.trav_dateEnd)"
            />
          </div>

          <TextInputLabelLeft
            label="ชื่อผลงานวิจัยที่นำเสนอ"
            customLabel="w-1/6"
            disabled="true"
            :placeholder="formData.conference.conf_research"
          />
          <TextInputLabelLeft
            label="ชื่อการประชุมทางวิชาการ"
            customLabel="w-1/6"
            disabled="true"
            :placeholder="formData.conference.conf_name"
          />

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วันที่จัด"
              customLabel="w-auto mr-8"
              customDiv="max-w-max mr-36"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.conference.meeting_date)"
            />
            <TextInputLabelLeft
              label="สถานที่จัด"
              customLabel="w-24"
              disabled="true"
              :placeholder="formData.conference.meeting_venue"
            />
          </div>

          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังผู้จัด"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              disabled="true"
              :placeholder="
                formatThaiDate(formData.conference.date_submit_orrganizer)
              "
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณาบทความ"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              disabled="true"
              :placeholder="
                formatThaiDate(formData.conference.argument_date_review)
              "
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการลงทะเบียน"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              disabled="true"
              :placeholder="
                formatThaiDate(formData.conference.last_day_register)
              "
            />
          </div>
        </SectionWrapper>
      </Mainbox>

      <!-- 2.  รายละเอียดการขออนุมัติเดินทาง -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2.  รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <RadioInput
            label="การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูลสากล SCOPUS"
            name="Scopus"
            value="คณะจัด ไม่อยู่scopus"
            disabled="flase"
            :checked="
              formData.conference.meeting_type == 'คณะจัด ไม่อยู่scopus'
                ? true
                : false
            "
          />
          <RadioInput
            label="การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ "
            name="Scopus"
            value="อยู่ในscopus"
            disabled="flase"
            :checked="
              formData.conference.meeting_type == 'อยู่ในscopus' ? true : false
            "
          />

          <SectionWrapper>
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Level"
              value="มาตรฐาน"
              disabled="flase"
              :checked="
                formData.conference.quality_meeting == 'มาตรฐาน' ? true : false
              "
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Level"
              value="ดีมาก"
              disabled="flase"
              :checked="
                formData.conference.quality_meeting == 'ดีมาก' ? true : false
              "
            />
            <SectionWrapper>
              <RadioInput
                label="ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank"
                name="Score"
                value="SJR"
                disabled="flase"
                :checked="formData.score.score_type == 'SJR' ? true : false"
              />
              <div v-if="formData.score.score_type == 'SJR'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า SJR"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.sjr_score"
                  />
                  <TextInputLabelLeft
                    label="ปี"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.sjr_year"
                  />
                  <TextInputLabelLeft
                    label="x H-Index"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.hindex_score"
                  />
                  <TextInputLabelLeft
                    label="ปี"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.hindex_year"
                  />
                </div>
                <span class="place-self-center"
                  >มีค่าคะแนน = {{ formData.score.score_result }} คะแนน</span
                >
              </div>

              <RadioInput
                label="ใช้ผลการจัดระดับ CIF (Conference Impact Factor)"
                name="Score"
                value="CIF"
                disabled="flase"
                :checked="formData.score.score_type == 'CIF' ? true : false"
              />
              <div v-if="formData.score.score_type == 'CIF'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า Citation total"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.citat"
                  />
                  <TextInputLabelLeft
                    label="x H-Index"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="formData.score.hindex_score"
                  />
                </div>
                <span class="place-self-center"
                  >มีค่าคะแนน = {{ formData.score.score_result }} คะแนน</span
                >
              </div>
              <RadioInput
                label="ใช้ผลการจัดระดับ CORE Conference Ranking"
                name="Score"
                value="CORE"
                disabled="flase"
                :checked="
                  formData.score.score_type == 'CORE' ? true : false
                "
              />
              <div v-if="formData.score.score_type == 'CORE'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    disabled="true"
                    :placeholder="
                      formData.score.core_rank
                        ? formData.score.core_rank.toUpperCase()
                        : ''
                    "
                  />
                  <span class="place-self-center">(ตั้งแต่ A ขึ้นไป)</span>
                </div>
                <p class="px-7 text-sm text-red-500">
                  เช็คคะแนนได้จาก http://portal.core.edu.au/conf-ranks
                </p>
              </div>
            </SectionWrapper>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <!-- 3. ผู้ขอรับการสนับสนุน -->
      <Mainbox>
        <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>
        <SectionWrapper>
          <RadioInput
            label="ผู้ประพันธ์อันดับแรก First Author"
            value="First Author"
            name="Author"
            disabled="flase"
            :checked="
              formData.conference.presenter_type == 'First Author'
                ? true
                : false
            "
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            disabled="flase"
            :checked="
              formData.conference.presenter_type == 'Corresponding Author'
                ? true
                : false
            "
          />
        </SectionWrapper>
      </Mainbox>

      <!-- 4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ -->
      <Mainbox>
        <p class="text-lg font-bold">
          4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ
        </p>

        <SectionWrapper>
          <p class="font-bold text-base pt-3">4.1 ครั้งที่ในการลา</p>
          <SectionWrapper>
            <RadioInput
              label="ครั้งที่ 1"
              name="TimeLeave"
              value="1"
              disabled="flase"
              :checked="formData.conference.time_of_leave == 1 ? true : false"
            />
            <div
              v-if="formData.conference.time_of_leave == 1"
              class="flex flex-row px-7 mt-1"
            >
              <RadioInput
                label="สถานที่จัดภายในประเทศ"
                name="thai"
                value="ในประเทศ"
                disabled="flase"
                :checked="
                  formData.conference.locattion_1 == 'ในประเทศ' ? true : false
                "
              />
              <RadioInput
                label="สถานที่จัด ณ ต่างประเทศ"
                name="thai"
                value="ต่างประเทศ"
                disabled="flase"
                :checked="
                  formData.conference.locattion_1 == 'ต่างประเทศ' ? true : false
                "
              />
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <RadioInput
              label="ครั้งที่ 2"
              name="TimeLeave"
              value="2"
              disabled="flase"
              :checked="formData.conference.time_of_leave == 2 ? true : false"
            />
            <p class="py-1 px-7">
              ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
              มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล
            </p>
            <div
              v-if="formData.conference.time_of_leave == 2"
              class="flex flex-row px-7 mt-1"
            >
              <RadioInput
                label="WoS-Q1"
                name="WoS"
                value="WoS-Q1"
                disabled="flase"
                :checked="
                  formData.conference.wos_2_leave == 'WoS-Q1' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                disabled="flase"
                :checked="
                  formData.conference.wos_2_leave == 'WoS-Q2' ? true : false
                "
              />
            </div>
            <div
              v-if="formData.conference.time_of_leave == 2"
              class="px-7 py-2"
            >
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                disabled="true"
                :placeholder="formData.conference.name_2_leave"
              />
            </div>
          </SectionWrapper>

          <p class="font-bold text-base pt-3">
            4.2 กรณีที่จัดการประชุมฯ ณ ต่างประเทศ
          </p>
          <SectionWrapper>
            <p>ขอเบิกค่าลงทะเบียนตามที่จ่ายจริง และค่าใช้จ่ายอื่น ๆ</p>
            <RadioInput
              label="ไม่เกิน 50%"
              name="withdraw"
              value="50%"
              disabled="flase"
              :checked="formData.conference.withdraw == '50%' ? true : false"
            />
            <RadioInput
              label="ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล"
              name="withdraw"
              value="100%"
              disabled="flase"
              :checked="formData.conference.withdraw == '100%' ? true : false"
            />
            <div
              v-if="formData.conference.withdraw == '100%'"
              class="flex flex-row px-7 mt-1"
            >
              <RadioInput
                label="WoS-Q1"
                name="WoS"
                value="WoS-Q1"
                disabled="flase"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q1' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                disabled="flase"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q2' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q3"
                name="WoS"
                value="WoS-Q3"
                disabled="flase"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q3' ? true : false
                "
              />
              <RadioInput
                label="SJR-Q1"
                name="WoS"
                value="SJR-Q1"
                disabled="flase"
                :checked="
                  formData.conference.wd_100_quality == 'SJR-Q1' ? true : false
                "
              />
              <RadioInput
                label="SJR-Q2"
                name="WoS"
                value="SJR-Q2"
                disabled="flase"
                :checked="
                  formData.conference.wd_100_quality == 'SJR-Q2' ? true : false
                "
              />
            </div>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                disabled="true"
                :placeholder="formData.conference.wd_name_100"
              />
            </div>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <!-- 5. เป็นการประชุมวิชาการที่ใช้สถานที่จัด -->
      <Mainbox>
        <p class="text-lg font-bold">5. เป็นการประชุมวิชาการที่ใช้สถานที่จัด</p>
        <SectionWrapper>
          <RadioInput
            label="ณ ต่างประเทศ"
            name="Venue"
            value="ณ ต่างประเทศ"
            disabled="flase"
            :checked="
              formData.conference.country_conf == 'ณ ต่างประเทศ' ? true : false
            "
          />
          <RadioInput
            label="ภายในประเทศ"
            name="Venue"
            value="ภายในประเทศ"
            disabled="flase"
            :checked="
              formData.conference.country_conf == 'ภายในประเทศ' ? true : false
            "
          />
        </SectionWrapper>
      </Mainbox>

      <!-- รายการค่าใช้จ่ายที่ขอเบิกจ่าย -->
      <Mainbox>
        <SectionWrapper>
          <p class="leading-9 text-lg font-bold">
            รายการค่าใช้จ่ายที่ขอเบิกจ่าย
          </p>
          <SectionWrapper>
            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="1. ค่าลงทะเบียน (ตามที่จ่ายจริง) จำนวน"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  disabled="true"
                  :placeholder="formData.conference.num_register_articles"
                />
                <TextInputLabelLeft
                  label="บทความ ๆ ละ"
                  customLabel="w-auto px-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  disabled="true"
                  :placeholder="formData.conference.regist_amount_1_article"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม {{ formData.conference.total_amount }} บาท
              </p>
            </div>

            <p>2. ค่าพาหนะเดินทาง</p>
            <div class="flex flex-col px-5">
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  disabled="true"
                  :placeholder="formData.conference.domestic_expenses"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในต่างประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  disabled="true"
                  :placeholder="formData.conference.overseas_expenses"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row">
                <p>ถ้าไปต่างประเทศแล้วต้องเดินทางไปอีกเมือง คิดยังไง</p>
                <p>ข้อนี้เฉพาะในประเทศ?</p>
                <TextInputLabelLeft
                  label="• เดินทางระหว่างประเทศ กรุงเทพฯ -"
                  customLabel="w-96 pr-2"
                  customDiv="max-w-[30rem]"
                  customInput="max-w-[14rem]"
                  disabled="true"
                  :placeholder="formData.conference.travel_country"
                />
                <TextInputLabelLeft
                  label="- กรุงเทพฯ"
                  customLabel="w-22 px-2"
                  customDiv="max-w-[20rem]"
                  customInput="max-w-[14rem]"
                  disabled="true"
                  :placeholder="formData.conference.inter_expenses"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
            </div>

            <div class="flex flex-row">
              <TextInputLabelLeft
                label="3. ค่าภาษีสนามบิน (ถ้ามี)"
                customLabel="w-auto pr-2"
                customDiv="max-w-[52rem]"
                customInput="max-w-[40rem]"
                disabled="true"
                :placeholder="formData.conference.airplane_tax"
              />
              <p class="flex items-center pl-2">บาท</p>
            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="4. ค่าเช่าที่พัก"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[19rem]"
                  disabled="true"
                  :placeholder="formData.conference.num_days_room"
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  disabled="true"
                  :placeholder="formData.conference.room_cost_per_night"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม {{ formData.conference.total_room }} บาท
              </p>
            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="5. ค่าเบี้ยเลี้ยงเดินทาง"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[16rem]"
                  disabled="true"
                  :placeholder="formData.conference.num_travel_days"
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  disabled="true"
                  :placeholder="formData.conference.daily_allowance"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม {{ formData.conference.total_allowance }} บาท
              </p>
            </div>
            <p class="font-bold text-2xl pt-5 text-right">
              รวมทั้งสิ้น {{ formData.conference.all_money }} บาท
            </p>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ สจล. และประกาศคณะ</p>

          <!-- เอกสารหลักฐานที่แนบ -->
          <!-- 1 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>สำเนาบทความ (Full Paper)</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 2 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <span class="w-[15rem] flex items-center text-blue-500 mr-2"
                  >*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span
                >
                <TextInputLabelLeft
                  customInput="max-w-24"
                  label="(Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
                  disabled="true"
                />
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 3 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <span class="text-blue-500 mr-2"
                  >"*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน*</span
                >
                <p>หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 4 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)
                </p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 5 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>จดหมายการตอบรับเข้าร่วมประชุม (Accepted)</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 6 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงค่าลงทะเบียน</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 7 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <!-- 8 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
          <CheckInput
            v-model="formData.checkWorkedNo3NeverAbroad"
            @input="handleCheckbox('checkWorkedNo3NeverAbroad', true)"
            label="เป็นพนักงานสถาบันที่ปฏิบัติงานมาแล้วไม่เกิน 3 ปีนับตั้งแต่วันบรรจุและยังไม่เคยลาเข้าร่วมประชุมทางวิชาการ ณ ต่างประเทศ"
          />
          <p class="text-xl font-bold my-5">file other</p>
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบความถูกต้องของข้อมูล</p>
          <RadioInput
            label="ข้อมูลถูกต้อง"
            value="ถูกต้อง"
            name="re"
            disabled="flase"
            :checked="formData.offic.c_research_hr == 'ถูกต้อง' ? true : false"
          />
          <RadioInput
            label="ข้อมูลไม่ถูกต้อง"
            value="ไม่ถูกต้อง"
            name="re"
            disabled="flase"
            :checked="
              formData.offic.c_research_hr == 'ไม่ถูกต้อง' ? true : false
            "
          />
          <textarea
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.c_reason"
          ></textarea>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p>ตรวจหลักฐานคุณภาพของการจัดประชุมทางวิชาการ</p>

          <p>• คุณภาพของการประชุม ฯ</p>

          <div class="px-5">
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Sub1"
              value="มาตรฐาน"
              disabled="flase"
              :checked="
                formData.offic.c_meet_quality == 'มาตรฐาน' ? true : false
              "
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Sub1"
              value="ดีมาก"
              disabled="flase"
              :checked="formData.offic.c_meet_quality == 'ดีมาก' ? true : false"
            />
          </div>

          <TextArea
            label="• กรณี ที่เป็นการประชุมวิชาการระดับดีมาก เลือกวิธีคิดค่าคะแนนคุณภาพ และมีระดับคะแนนคุณภาพของการประชุมฯ ดังนี้"
            disabled="true"
            :placeholder="formData.offic.c_good_reason"
          />
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบเงินงบประมาณประจำปีที่จัดสรรในการเผยแพร่ผลงานวิชาการ</p>
          <TextInputLabelLeft
            label="ปีงบประมาณ พ.ศ."
            customInput="max-w-max text-center"
            disabled="true"
            :placeholder="formData.budget.budget_year"
          />

          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ จำนวนเงินทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.total_amount"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="โดยคณะได้อนุมัติค่าใช้จ่ายในการเสนอผลงานวิชาการไปแล้ว จำนวน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.num_expenses_approved"
              />
              <p class="flex items-center w-12">รายการ</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="รวมเป็นเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.total_amount_approved"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือ"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.remaining_credit_limit"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="จำนวนเงินที่ขออนุมัติจค่า Page Charge ในครั้งนี้ เป็นจำนวนเงิน"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.money_confer"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="flex flex-row justify-between">
              <TextInputLabelLeft
                label="วงเงินที่คณะจัดสรรไว้ คงเหลือทั้งสิ้น"
                customInput="max-w-max text-center"
                disabled="true"
                :placeholder="formData.budget.total_remaining_credit_limit"
              />
              <p class="flex items-center w-12">บาท</p>
            </div>
          </div>
          <p class="text-red-500 mr-5">เหลือ RuleBase******</p>
          <div class="flex justify-end mt-5">
            <p class="text-red-500 mr-5">
              วงเงินที่สามารถเบิกได้ {{ formData.budget.form_money }} บาท
            </p>
          </div>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <TextArea
            label="ความคิดเห็น"
            disabled="true"
              :placeholder="formData.offic.c_deputy_dean"
          />
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความจากผู้จัด</p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>

      <div class="flex justify-end">
        <button @click="OfficerConfer" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

const formData = reactive({
  conference: [],
  user: [],
  score: [],
  offic: [],
  budget: [],
  // ความเห้นเจ้าหน้าที่
  year: "",
  totalAll: 0,
  numAppove: 0,
  totalAppove: 0,
  creditLimit: 0,
  moneyConfer: 0,
  totalcreditLimit: 0,
  canWithdrawn: 0,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  // ความเห้นเจ้าหน้าที่
  acknowledge: "",
  //satatus
  formStatus: "รออนุมัติ",
});
console.log("conference", formData);
//วันที่ส่งเอกสาร
const datetime = new Date();
// Extract year, month, and day
const year = datetime.getFullYear();
const month = String(datetime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
const day = String(datetime.getDate()).padStart(2, "0");
// Combine in YYYY-MM-DD format
formData.docSubmitDate = `${year}-${month}-${day}`;
console.log(formData.docSubmitDate);

const formatThaiDate = (dateString) => {
  console.log("formatThaiDate input: ", dateString);
  const date = new Date(dateString);
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear() + 543;
  console.log("new date: ", `${day} ${month} ${year}`);
  return `${day} ${month} ${year}`;
};

const handleInput = (key, value) => {
  formData[key] = value;
  console.log("0000000000000000000000000000000");
  // console.log(JSON.stringify(formData));
  console.log(`${key} updated to: ${value}`);
  // console.log("key: ", key);
  // console.log("value: ", value);
  console.log("--------------------------------");
};

const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);

const fetchOfficerData = async () => {
  try {
    const responseConfer = await axios.get(
      `http://localhost:3000/conference/${id}`
    );
    console.log("conference123", responseConfer);
    formData.conference = responseConfer.data;
    console.log("conference123", formData.conference);
    console.log("conf_research", formData.conference.conf_research);

    const userID = responseConfer.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    console.log("get user: ", responseUser.data);
    formData.user = responseUser.data;
    console.log("user123", formData.user);
    console.log("user_nameth", formData.user.user_nameth);

    const responseScore = await axios.get(`http://localhost:3000/score/${id}`);
    console.log("score123", responseScore);
    formData.score = responseScore.data;
    console.log("score", formData.score);
    console.log("score_type", formData.score.score_type);

    const responseoffic = await axios.get(
      `http://localhost:3000/opinionConf/${id}`
    );
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("offic", JSON.stringify(formData.offic));

    const responsebudget = await axios.get(
      `http://localhost:3000/budget/conference/${id}`
    );
    console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    console.log("budget", JSON.stringify(formData.budget));
  } catch (error) {
    console.error("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};

const OfficerConfer = async () => {
  try {
    const dataForBackend = {
      conf_id: id,
      //hr
      c_research_hr: formData.offic.c_research_hr,
      c_reason: formData.offic.c_reason,
      hr_doc_submit_date: new Date(formData.offic.hr_doc_submit_date)
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //research
      c_meet_quality: formData.offic.c_meet_quality,
      c_good_reason: formData.offic.c_good_reason,
      research_doc_submit_date: new Date(
        formData.offic.research_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //long kanabodee
      c_deputy_dean: formData.offic.c_deputy_dean,
      associate_doc_submit_date: new Date(
        formData.offic.associate_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //kanabodee
      c_approve_result: formData.acknowledge,
      dean_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.formStatus,
    };
    console.log("post office confer: ", JSON.stringify(dataForBackend));

    const response = await axios.put(
      `http://localhost:3000/opinionConf/${id}`,
      dataForBackend,
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Have new OfficerConfer!");
    console.log("res: ", response);
    console.log("allpostOfficerConfer: ", message.value);
    console.log("postOfficerConfer: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};

onMounted(() => {
  fetchOfficerData();
});
</script>

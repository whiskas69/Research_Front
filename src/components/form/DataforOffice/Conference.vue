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
            :disabled="true"
            :placeholder="formData.user.user_nameth"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.user.user_positionth"
            :disabled="true"
          />

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
              customLabel="w-auto"
              customInput="max-w-max"
              customDiv="max-w-max"
              :disabled="true"
              :placeholder="formData.conference.conf_times"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              :disabled="true"
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
              :disabled="true"
              :placeholder="formatThaiDate(formData.conference.trav_dateStart)"
            />
            <TextInputLabelLeft
              label="ถึงวันที่"
              customLabel="w-auto mr-8"
              customDiv="max-w-max ml-36"
              customInput="max-w-max"
              :disabled="true"
              :placeholder="formatThaiDate(formData.conference.trav_dateEnd)"
            />
          </div>

          <TextInputLabelLeft
            label="ชื่อผลงานวิจัยที่นำเสนอ"
            customLabel="w-1/6"
            :disabled="true"
            :placeholder="formData.conference.conf_research"
          />
          <TextInputLabelLeft
            label="ชื่อการประชุมทางวิชาการ"
            customLabel="w-1/6"
            :disabled="true"
            :placeholder="formData.conference.conf_name"
          />
          <div class="flex flex-row w-full">
            <p class="w-1/4">การประชุมวิชาการจัดในประเทศ หรือต่างประเทศ</p>
            <RadioInput
              label="ภายในประเทศ"
              name="Venue"
              value="ภายในประเทศ"
              customDiv="w-max mr-4"
              :disabled="true"
              :checked="
                formData.conference.country_conf == 'ภายในประเทศ' ? true : false
              "
            />
            <RadioInput
              label="ณ ต่างประเทศ"
              name="Venue"
              value="ณ ต่างประเทศ"
              customDiv="max-w-36"
              :disabled="true"
              :checked="
                formData.conference.country_conf == 'ณ ต่างประเทศ'
                  ? true
                  : false
              "
            />
          </div>
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วันที่จัด"
              customLabel="w-auto mr-9"
              customDiv="max-w-max mr-10"
              customInput="max-w-max"
              :disabled="true"
              :placeholder="formatThaiDate(formData.conference.meeting_date)"
            />
            <TextInputLabelLeft
              label="สถานที่จัด"
              customLabel="w-24"
              :disabled="true"
              :placeholder="formData.conference.meeting_venue"
            />
            <div
              class="ml-10 w-full flex justify-center items-center"
              v-if="formData.conference.country_conf == 'ณ ต่างประเทศ'"
            >
              <div class="flex flex-row w-full">
                <TextInputLabelLeft
                  label="ประเทศ"
                  customLabel="w-24"
                  :disabled="true"
                  :placeholder="formData.conference.location"
                />
              </div>
            </div>

            <div
              class="ml-5 w-full flex justify-center items-center"
              v-if="formData.conference.country_conf == 'ภายในประเทศ'"
            >
              <div class="flex flex-row w-full">
                <TextInputLabelLeft
                  label="จังหวัด"
                  customLabel="w-24"
                  :disabled="true"
                  :placeholder="formData.conference.location"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังผู้จัด"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              :disabled="true"
              :placeholder="
                formatThaiDate(formData.conference.date_submit_organizer)
              "
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณาบทความ"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              :disabled="true"
              :placeholder="
                formatThaiDate(formData.conference.argument_date_review)
              "
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการลงทะเบียน"
              customLabel="w-auto mr-1"
              customDiv="max-w-max"
              customInput="max-w-max"
              :disabled="true"
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
            :disabled="true"
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
            :disabled="true"
            :checked="
              formData.conference.meeting_type == 'อยู่ในscopus' ? true : false
            "
          />

          <SectionWrapper>
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Level"
              value="มาตรฐาน"
              :disabled="true"
              :checked="
                formData.conference.quality_meeting == 'มาตรฐาน' ? true : false
              "
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Level"
              value="ดีมาก"
              :disabled="true"
              :checked="
                formData.conference.quality_meeting == 'ดีมาก' ? true : false
              "
            />
            <SectionWrapper>
              <RadioInput
                label="ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank"
                name="Score"
                value="SJR"
                :disabled="true"
                :checked="formData.score.score_type == 'SJR' ? true : false"
              />
              <div v-if="formData.score.score_type == 'SJR'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า SJR"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
                    :placeholder="formData.score.sjr_score"
                  />
                  <TextInputLabelLeft
                    label="ปี"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
                    :placeholder="formData.score.sjr_year"
                  />
                  <TextInputLabelLeft
                    label="x H-Index"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
                    :placeholder="formData.score.hindex_score"
                  />
                  <TextInputLabelLeft
                    label="ปี"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
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
                :disabled="true"
                :checked="formData.score.score_type == 'CIF' ? true : false"
              />
              <div v-if="formData.score.score_type == 'CIF'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า citation total"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
                    :placeholder="formData.score.Citation"
                  />
                  <TextInputLabelLeft
                    label="x H-Index"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
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
                :disabled="true"
                :checked="formData.score.score_type == 'CORE' ? true : false"
              />
              <div v-if="formData.score.score_type == 'CORE'">
                <div class="flex flex-row w-full px-7 my-2">
                  <TextInputLabelLeft
                    label="• ค่า"
                    customLabel="w-auto mr-1"
                    customDiv="max-w-max"
                    customInput="max-w-max mr-3"
                    :disabled="true"
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
            :disabled="true"
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
            :disabled="true"
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
              :disabled="true"
              :checked="formData.conference.time_of_leave == 1 ? true : false"
            />
          </SectionWrapper>

          <SectionWrapper>
            <RadioInput
              label="ครั้งที่ 2"
              name="TimeLeave"
              value="2"
              :disabled="true"
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
                :disabled="true"
                :checked="
                  formData.conference.wos_2_leave == 'WoS-Q1' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                :disabled="true"
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
                :disabled="true"
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
              :disabled="true"
              :checked="formData.conference.withdraw == '50%' ? true : false"
            />
            <RadioInput
              label="ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล"
              name="withdraw"
              value="100%"
              :disabled="true"
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
                :disabled="true"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q1' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q2"
                name="WoS"
                value="WoS-Q2"
                :disabled="true"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q2' ? true : false
                "
              />
              <RadioInput
                label="WoS-Q3"
                name="WoS"
                value="WoS-Q3"
                :disabled="true"
                :checked="
                  formData.conference.wd_100_quality == 'WoS-Q3' ? true : false
                "
              />
              <RadioInput
                label="SJR-Q1"
                name="WoS"
                value="SJR-Q1"
                :disabled="true"
                :checked="
                  formData.conference.wd_100_quality == 'SJR-Q1' ? true : false
                "
              />
              <RadioInput
                label="SJR-Q2"
                name="WoS"
                value="SJR-Q2"
                :disabled="true"
                :checked="
                  formData.conference.wd_100_quality == 'SJR-Q2' ? true : false
                "
              />
            </div>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                :disabled="true"
                :placeholder="formData.conference.wd_name_100"
              />
            </div>
          </SectionWrapper>
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
                  :disabled="true"
                  :placeholder="
                    parseFloat(
                      formData.conference.num_register_articles
                    ).toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                    })
                  "
                />
                <TextInputLabelLeft
                  label="บทความ ๆ ละ"
                  customLabel="w-auto px-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  :disabled="true"
                  :placeholder="
                    parseFloat(
                      formData.conference.regist_amount_1_article
                    ).toLocaleString('en-US', {
                      minimumFractionDigits: 2,
                    })
                  "
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม
                {{
                  parseFloat(formData.conference.total_amount).toLocaleString(
                    "en-US",
                    {
                      minimumFractionDigits: 2,
                    }
                  )
                }}
                บาท
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
                  :disabled="true"
                  :placeholder="
                    formData.conference.domestic_expenses == null
                      ? 0
                      : parseFloat(
                          formData.conference.domestic_expenses
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                        })
                  "
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในต่างประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.overseas_expenses == null
                      ? 0
                      : parseFloat(
                          formData.conference.overseas_expenses
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })
                  "
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="• เดินทางระหว่างประเทศ กรุงเทพฯ -"
                  customLabel="w-96 pr-2"
                  customDiv="max-w-[30rem]"
                  customInput="max-w-[14rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.travel_country == null
                      ? '-'
                      : formData.conference.travel_country
                  "
                />
                <TextInputLabelLeft
                  label="- กรุงเทพฯ"
                  customLabel="w-22 px-2"
                  customDiv="max-w-[20rem]"
                  customInput="max-w-[14rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.inter_expenses == null
                      ? 0
                      : parseFloat(
                          formData.conference.inter_expenses
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })
                  "
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
                :disabled="true"
                :placeholder="
                  formData.conference.airplane_tax == null
                    ? 0
                    : parseFloat(
                        formData.conference.airplane_tax
                      ).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                      })
                "
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
                  :disabled="true"
                  :placeholder="
                    formData.conference.num_days_room == null
                      ? 0
                      : parseFloat(
                          formData.conference.num_days_room
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                        })
                  "
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.room_cost_per_night == null
                      ? 0
                      : parseFloat(
                          formData.conference.room_cost_per_night
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })
                  "
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม
                {{
                  formData.conference.total_room == null
                    ? 0
                    : parseFloat(formData.conference.total_room).toLocaleString(
                        "en-US",
                        {
                          minimumFractionDigits: 2,
                        }
                      )
                }}
                บาท
              </p>
            </div>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="5. ค่าเบี้ยเลี้ยงเดินทาง"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[16rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.num_travel_days == null
                      ? 0
                      : parseFloat(
                          formData.conference.num_travel_days
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                        })
                  "
                />
                <TextInputLabelLeft
                  label="วัน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  :disabled="true"
                  :placeholder="
                    formData.conference.daily_allowance == null
                      ? 0
                      : parseFloat(
                          formData.conference.daily_allowance
                        ).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })
                  "
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">
                รวม
                {{
                  formData.conference.total_allowance == null
                    ? 0
                    : parseFloat(
                        formData.conference.total_allowance
                      ).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })
                }}
                บาท
              </p>
            </div>
            <p class="font-bold text-2xl pt-5 text-right">
              รวมทั้งสิ้น
              {{
                parseFloat(formData.conference.all_money).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                  }
                )
              }}
              บาท
            </p>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";

const formData = reactive({
  conference: [],
  user: [],
  score: [],
});
const formatThaiDate = (dateString) => {
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
  return `${day} ${month} ${year}`;
};

const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;

const fetchOfficerData = async () => {
  try {
    const responseConfer = await api.get(`/conference/${id}`);
    formData.conference = responseConfer.data;

    const userID = responseConfer.data.user_id;
    const responseUser = await api.get(`/user/${userID}`);
    formData.user = responseUser.data;

    const responseScore = await api.get(`/score/${id}`);
    formData.score = responseScore.data;
  } catch (error) {
    console.log("Error fetching Officer data:", error);
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  fetchOfficerData();
});
</script>

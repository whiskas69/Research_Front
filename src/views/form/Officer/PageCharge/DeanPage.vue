<template>
  <div>
    <div class="container my-10 mx-auto">
      <p class="text-xl font-bold mb-5">
        ขออนุมัติค่า Page Charge เพื่อตีพิมพ์ผลงานในวารสารวิชาการระดับนานาชาติ
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
              :placeholder="formData.pageChange.pageC_times"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              disabled="true"
              :placeholder="formatThaiDate(formData.pageChange.pageC_days)"
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
      <!-- 1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์  -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1.  รายละเอียดวารสารที่ส่งเสนอพิจารณา / การตอบรับให้ลงตีพิมพ์
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อวารสาร"
            name="Input"
            customLabel="w-24"
            disabled="true"
            :placeholder="formData.pageChange.journal_name"
          />
          <p>เป็นวารสารที่อยู่ในฐานข้อมูลสากล</p>

          <div class="flex flex-row">
            <CheckInput
              label="ISI ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkISI"
              :checked="formData.checkISI == 'ISI' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
              v-if="formData.checkISI == 'ISI'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pc_isi_year"
            />
            <TextInputLabelLeft
              v-if="formData.checkISI == 'ISI'"
              label="Impact Factor"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.impact_factor"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="SJR ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkSJR"
              :checked="formData.checkSJR == 'SJR' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
              v-if="formData.checkSJR == 'SJR'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pc_sjr_year"
            />
            <TextInputLabelLeft
              v-if="formData.checkSJR == 'SJR'"
              label="SJR Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.sjr_score"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="Scopus ได้รับการจัดลำดับ Quartile "
              customDiv="max-w-72 flex items-center"
              v-model="formData.checkScopus"
              :checked="formData.checkScopus == 'Scopus' ? true : false"
              disabled="false"
            />
            <TextInputLabelLeft
              v-if="formData.checkScopus == 'Scopus'"
              label="ปี"
              customLabel="mr-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.pc_scopus_year"
            />
            <TextInputLabelLeft
              v-if="formData.checkScopus == 'Scopus'"
              label="Cite Score"
              customLabel="w-28 mx-2"
              customInput="max-w-max"
              customDiv="max-w-max"
              disabled="true"
              :placeholder="formData.pageChange.cite_score"
            />
          </div>

          <div class="flex flex-row">
            <CheckInput
              label="Nature"
              customDiv="max-w-72 flex items-center"
              v-model="formData.nature"
              :checked="formData.nature == 'nature' ? true : false"
              disabled="false"
            />
          </div>
          <label class="form-control">
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินตามเกณฑ์การให้การสนับสนุนไม่เกิน"
                customLabel="w-auto mx-2"
                customInput="max-w-max"
                customDiv="max-w-max"
                disabled="true"
                :placeholder="formData.pageChange.support_limit"
              />
              <span class="flex items-center">บาท</span>
            </div>
          </label>
        </SectionWrapper>
      </Mainbox>

      <!-- 2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์ -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2. รายละเอียดผลงานวิจัยที่ส่งเสนอพิจารณา / ได้รับการตอบรับให้ตีพิมพ์
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="ชื่อบทความ"
            customLabel="w-auto min-w-fit"
            disabled="true"
            :placeholder="formData.pageChange.article_title"
          />
        </SectionWrapper>
        <div>
          <p>กำหนดการที่คาดว่าจะได้รับการลงตีพิมพ์ในวารสาร</p>
          <div class="flex flex-row mt-2 justify-between">
            <TextInputLabelLeft
              label="ปีที่ (Vol.)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.pageChange.vol_journal"
            />
            <TextInputLabelLeft
              label="ฉบับที่ (Issue)"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.pageChange.issue_journal"
            />
            <TextInputLabelLeft
              label="เดือน"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formData.pageChange.month"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="ปี ค.ศ./พ.ศ."
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.pageChange.year"
              />
              <TextInputLabelLeft
                label="เลขที่ ISSN/ISBN (อื่นๆ)"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.pageChange.ISSN_ISBN"
              />
            </div>
          </div>

          <div class="flex flex-row mt-4 justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังสำนักพิมพ์เจ้าของวารสาร"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formatThaiDate(formData.pageChange.submission_date)"
            />
            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณา"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="
                formatThaiDate(formData.pageChange.date_review_announce)
              "
            />
            <TextInputLabelLeft
              label="วันสุดท้ายของการจ่ายค่าตีพิมพ์"
              customLabel="w-auto min-w-fit"
              customDiv="max-w-fit"
              disabled="true"
              :placeholder="formatThaiDate(formData.pageChange.final_date)"
            />
          </div>

          <SectionWrapper>
            <div class="flex flex-row mt-3">
              <p class="flex text-blue-500 w-12 items-center">(ถ้ามี)</p>
              <TextInputLabelLeft
                label="บทความวิจัยนี้เป็นผลงานจากโครงการวิจัยเรื่อง"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-fit"
                disabled="true"
                :placeholder="formData.pageChange.article_research_ject"
              />
            </div>
            <p>ประเภทโครงการวิจัย</p>
            <div class="flex flex-row ml-5">
              <RadioInput
                label="วิจัยพื้นฐาน"
                value="วิจัยพื้นฐาน"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.pageChange.research_type == 'วิจัยพื้นฐาน'
                    ? true
                    : false
                "
                v-model="formData.pageChange.research_type"
              />
              <RadioInput
                label="วิจัยประยุกต์"
                value="วิจัยประยุกต์"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.pageChange.research_type == 'วิจัยประยุกต์'
                    ? true
                    : false
                "
                v-model="formData.pageChange.research_type"
              />
              <RadioInput
                label="วิจัยและพัฒนา"
                value="วิจัยและพัฒนา"
                name="type"
                customDiv="max-w-fit mr-10 flex items-center"
                disabled="flase"
                :checked="
                  formData.pageChange.research_type == 'วิจัยและพัฒนา'
                    ? true
                    : false
                "
                v-model="formData.pageChange.research_type"
              />
              <div class="flex flex-row">
                <RadioInput
                  label="วิจัยอื่น ๆ "
                  value="วิจัยอื่น ๆ"
                  name="type"
                  customDiv="max-w-fit mr-2 flex items-center"
                  disabled="flase"
                  :checked="
                    formData.pageChange.research_type == 'วิจัยอื่น ๆ'
                      ? true
                      : false
                  "
                  v-model="formData.pageChange.research_type"
                />
                <TextInputLabelLeft
                  v-if="formData.pageChange.research_type == 'วิจัยอื่น ๆ '"
                  label="(ระบุ)"
                  name="type"
                  customDiv="max-w-fit flex items-cente"
                  v-model="formData.pageChange.research_type2"
                />
              </div>
            </div>

            <TextInputLabelLeft
              label="ชื่อแหล่งทุนวิจัย"
              customLabel="w-auto min-w-fit"
              disabled="true"
              :placeholder="formData.pageChange.name_funding_source"
            />
            <div class="flex flex-row">
              <TextInputLabelLeft
                label="วงเงินงบประมาณการวิจัย"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                disabled="true"
                :placeholder="formData.pageChange.budget_limit"
              />
              <TextInputLabelLeft
                label="ประจำปี"
                customLabel="w-auto min-w-fit"
                customDiv="max-w-max mr-10"
                disabled="true"
                :placeholder="formData.pageChange.annual"
              />
            </div>
          </SectionWrapper>
        </div>
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
              formData.pageChange.presenter_type == 'First Author'
                ? true
                : false
            "
            v-model="formData.pageChange.presenter_type"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            disabled="flase"
            :checked="
              formData.pageChange.presenter_type == 'Corresponding Author'
                ? true
                : false
            "
            v-model="formData.pageChange.presenter_type"
          />
        </SectionWrapper>
      </Mainbox>
      <!-- 4. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge) -->
      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          4. ขอรับการสนับสนุนค่าใช้จ่ายในการลงตีพิมพ์ (Page Charge)
        </p>
        <SectionWrapper>
          <TextInputLabelLeft
            label="จำนวนเงิน"
            customLabel="w-auto min-w-fit"
            customInput="max-w-fit"
            disabled="true"
            :placeholder="formData.pageChange.request_support"
          />
        </SectionWrapper>
      </Mainbox>
      <!-- เอกสารหลักฐานที่แนบ -->
      <p class="text-xl font-bold my-5 bg-red-600">ยังไม่สามารถเปิด pdf ได้</p>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <!-- 1 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>
                  หลักฐานแสดงการอยู่ในฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus
                  หรือ Nature
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
          <!-- 2 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <TextInputLabelLeft
                  customLabel="w-auto min-w-fit"
                  customInput="max-w-fit ml-2"
                  label="หลักฐานแสดงการจัดลำดับ Quartile ของฐานข้อมูลสากล ISI หรือ SJR หรือ Scopus"
                  disabled="ture"
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
                <p>
                  ใบแจ้งหนี้ค่าใช้จ่ายสำหรับการตีพิมพ์ /
                  อัตราค่าใช้จ่ายที่ประกาศบนหน้าเว็บไซต์
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
          <!-- 4 -->
          <div class="flex flex-row items-center w-full">
            <div class="flex flex-row items-center w-full justify-between">
              <div class="flex flex-row">
                <p>หลักฐานการส่งบทความ หนังสือตอบรับบทความ</p>
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
                <p>สำเนาบทความ และ Upload บทความเข้าระบบ IT Scholar</p>
              </div>
              <div class="">
                <button class="btn bg-[#E85F19] text-white mr-5">
                  ดูเอกสาร
                </button>
                <button class="btn bg-[#4285F4] text-white">โหลดเอกสาร</button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </Mainbox>

      <p class="text-xl font-bold my-5">ตรวจสอบข้อมูลและหลักฐาน</p>
      <Mainbox>
        <SectionWrapper>
          <p>ตรวจสอบหลักฐานตามหลักเกณฑ์ที่กำหนดในประกาศ ส.จ.ล และประกาศคณะ</p>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน ดังนี้"
            value="อนุมัติ"
            name="re"
            disabled="flase"
            :checked="
              formData.offic.p_research_admin == 'อนุมัติ' ? true : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'อนุมัติ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="ถูกต้องตามเงื่อนไขการสนับสนุน กรณีส่งหนังสือตอบรับย้อนหลัง ดังนี้"
            value="รอหนังสือตอบรับ"
            name="re"
            disabled="flase"
            :checked="
              formData.offic.p_research_admin == 'รอหนังสือตอบรับ'
                ? true
                : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'รอหนังสือตอบรับ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
          <RadioInput
            label="อื่น ๆ"
            value="อื่น ๆ"
            name="re"
            disabled="flase"
            :checked="
              formData.offic.p_research_admin == 'อื่น ๆ' ? true : false
            "
          />
          <textarea
            v-if="formData.offic.p_research_admin == 'อื่น ๆ'"
            class="textarea textarea-bordered w-full"
            disabled="true"
            :placeholder="formData.offic.p_reason"
          ></textarea>
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
      <!-- รองคณบดีฝ่ายงานวิจัย -->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">รองคณบดีฝ่ายงานวิจัย</p>
          <div>
            <TextArea
              label="ความคิดเห็น"
              disabled="true"
              :placeholder="formData.offic.p_deputy_dean"
            />
          </div>
        </SectionWrapper>
      </Mainbox>
      <!-- คณบดี 1-->
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 1)
          </p>
          <p class="text-base mt-1">
            เพื่อโปรดทราบการจัดสรรวงเงิน ก่อนการตอบรับบทความ
          </p>
          <RadioInput
            label="รับทราบ"
            value="รับทราบ"
            v-model="formData.acknowledge"
            @change="handleInput('acknowledge', $event.target.value)"
          />
        </SectionWrapper>
      </Mainbox>
      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">
            เรียน คณบดีคณะเทคโนโลยีสารสนเทศ (ครั้งที่ 2)
          </p>
          <p class="text-base mt-1">
            ขณะนี้บทความได้รับการตอบรับแล้ว (Letter of acceptance) เมื่อวันที่
            <b>{{ formData.check }} </b>
            ตามหลักฐานที่แนบจึงเรียนมาเพื่อโปรดพิจารณา
          </p>
          <div class="px-2">
            <RadioInput
              label="อนุมัติ"
              value="อนุมัติ"
              name="comment"
              v-model="formData.redioAuthOffic"
              @change="handleInput('redioAuthOffic', $event.target.value)"
            />
          </div>
          <div class="px-2">
            <RadioInput
              label="ไม่อนุมัติ"
              value="ไม่อนุมัติ"
              name="comment"
              v-model="formData.redioAuthOffic"
              @change="handleInput('redioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea label="เนื่องจาก" />
          </div>
          <div class="px-2">
            <RadioInput
              label="อื่น ๆ"
              value="อื่น ๆ"
              name="comment"
              v-model="formData.redioAuthOffic"
              @change="handleInput('redioAuthOffic', $event.target.value)"
            />
          </div>
          <div>
            <TextArea label="เนื่องจาก" 
            @input="handleInput('description', $event.target.value)"
            />
          </div>
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="OfficerPC" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import CheckInput from "@/components/Input/CheckInput.vue";
import TextArea from "@/components/Input/TextArea.vue";

// จัดการข้อมูลหลัก
const formData = reactive({
  pageChange: [],
  user: [],
  offic: [],
  budget: [],

  check: [],
  checkISI: "",
  checkSJR: "",
  checkScopus: "",
  nature: "",
  //FileForm
  file1: null,
  file2: null,
  inputFile2: "",
  file3: null,
  file4: null,
  file5: null,
  //วันที่ส่งเอกสาร
  docSubmitDate: "",
  //satatus
  statusForm: "",
  // ความเห้นเจ้าหน้าที่
  acknowledge: "",
  redioAuthOffic: "",
  description: "",
});

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
  // console.log("formatThaiDate input: ", dateString);
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
  // console.log("new date: ",`${day} ${month} ${year}`)
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

//isLoading เพื่อแสดงสถานะว่ากำลังโหลดข้อมูล
const isLoading = ref(true);
// Access route parameters
const route = useRoute();
const id = route.params.id;
console.log("params.id", id);
// ตัวแปรสำหรับเก็บข้อมูลจาก backend
const fetchProfessorData = async () => {
  try {
    const responsePC = await axios.get(
      `http://localhost:3000/page_charge/${id}`
    );
    const userID = responsePC.data.user_id;
    const responseUser = await axios.get(
      `http://localhost:3000/user/${userID}`
    );
    formData.user = responseUser.data;

    console.log("get user: ", formData.user);
    console.log("get userid: ", responsePC.data.user_id);
    console.log("get responsePC: ", responsePC.data);

    formData.pageChange = responsePC.data;
    console.log("pageChange", formData.pageChange);
    formData.check = formData.pageChange.quality_journal;

    // const responseFile = await axios.get("http://localhost:3000/pdf/2");
    // const pdfData = responseFile.data;

    const responseoffic = await axios.get(
      `http://localhost:3000/opinionPC/${id}`
    );
    console.log("offic123", responseoffic);
    formData.offic = responseoffic.data;
    console.log("offic", JSON.stringify(formData.offic));

    const responsebudget = await axios.get(
      `http://localhost:3000/budget/pageCharge/${id}`
    );
    console.log("budget 123", responsebudget);
    formData.budget = responsebudget.data;
    console.log("budget", JSON.stringify(formData.budget));

    console.log("PDF JAAAA: ", pdfData);
  } catch (error) {
    console.error("Error fetching professor data:", error);
  } finally {
    isLoading.value = false;
  }
  console.log("Fetching professor data...");
};

const OfficerPC = async () => {
  try {
    const dataForBackend = {
      pageC_id: id,
      //research
      p_research_admin: formData.offic.p_research_admin,
      p_reason: formData.offic.p_reason,
      research_doc_submit_date: new Date(
        formData.offic.research_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //long ka na bo dee
      p_deputy_dean: formData.offic.p_deputy_dean,
      associate_doc_submit_date: new Date(
        formData.offic.associate_doc_submit_date
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      //ka na bo dee
      p_date_accepted_approve: '2001-02-10',//fake
      p_acknowledge: formData.acknowledge,
      p_approve_result: formData.redioAuthOffic,
      p_reason_dean_appeove: formData.description,
      dean_doc_submit_date: formData.docSubmitDate,
      //form
      form_status: formData.redioAuthOffic,
    };
    console.log("postPC: ", JSON.stringify(dataForBackend));

    const response = await axios.put(
      `http://localhost:3000/opinionPC/${id}`,
      dataForBackend,
      {
        headers: {
          "Content-Type": "application/json", // Required for file uploads
        },
      }
    );
    alert("Have new OfficerPC!");
    console.log("res: ", response);
    console.log("allpostOfficerPC: ", message.value);
    console.log("postOfficerPC: ", response.data);
  } catch (error) {
    console.error(error);
    message.value = "Error adding page_charge. Please try again.";
  }
};

const loopdata = async () => {
  console.log("in loop");

  fetchProfessorData();

  console.log("formdata, ", formData.check);
  for (let i = 0; i < formData.check.length; i++) {
    console.log("checking journal", formData.check[i]);
    if (formData.check[i] == "nature") {
      formData.nature = "nature";
      console.log("Journal have 'nature'");
    }
    if (formData.check[i] == "ISI") {
      formData.checkISI = "ISI";
      console.log("Journal have 'ISI'");
    }
    if (formData.check[i] == "SJR") {
      formData.checkSJR = "SJR";
      console.log("Journal have 'SJR'");
    }
    if (formData.check[i] == "Scopus") {
      formData.checkScopus = "Scopus";
      console.log("Journal have 'Scopus'");
    }
  }
};

// ดึงข้อมูลเมื่อ component ถูกโหลด
onMounted(async () => {
  await fetchProfessorData();
  loopdata();
});
</script>

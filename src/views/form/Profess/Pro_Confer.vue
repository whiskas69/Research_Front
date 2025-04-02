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
            :placeholder="formData.name"
          />
          <TextInputLabelLeft
            label="ตำแหน่ง"
            customLabel="w-2/12 text-lg font-bold"
            :placeholder="formData.position"
            :disabled="true"
          />

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="มีรายชื่ออยู่ใน List ที่คณะได้ให้การรับรองแล้ว โดยมติคณะ ครั้งที่"
              customLabel="w-auto"
              customInput="max-w-max"
              customDiv="max-w-max"
              v-model="formData.textOther1"
              @input="handleInput('textOther1', $event.target.value)"
            />
            <TextInputLabelLeft
              label="วันที่"
              customLabel="ml-2 w-10"
              customInput="max-w-max"
              type="date"
              v-model="formData.textOther2"
              @input="handleInput('textOther2', $event.target.value)"
            />
          </div>
          <span
            v-if="v$.textOther1.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.textOther1.$errors[0].$message }}
          </span>
          <span
            v-if="v$.textOther2.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.textOther2.$errors[0].$message }}
          </span>

          <p class="text-red-500 text-sm">
            สามารถตรวจสอบรายชื่อ List ของคณะได้ที่เว็บไซต์คณะที่ Share
            online-การวิจัย และ
            <a href="https://erp.it.kmitl.ac.th/journal_conf_list"
              >https://erp.it.kmitl.ac.th/journal_conf_list</a
            >
          </p>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          1. รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <div class="flex flex-row">
            <TextInputLabelLeft
              label="เดินทางวันที่"
              customLabel="w-auto mr-2"
              customDiv="max-w-max"
              customInput="max-w-max"
              type="date"
              v-model="formData.travelStart"
              @input="handleInput('travelStart', $event.target.value)"
            />
            <TextInputLabelLeft
              label="ถึงวันที่"
              customLabel="w-auto mr-2"
              customDiv="max-w-max ml-[10%]"
              customInput="max-w-max"
              type="date"
              v-model="formData.travelEnd"
              @input="handleInput('travelEnd', $event.target.value)"
            />
          </div>

          <span
            v-if="v$.travelStart.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.travelStart.$errors[0].$message }}
          </span>
          <span
            v-if="v$.travelEnd.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.travelEnd.$errors[0].$message }}
          </span>

          <TextInputLabelLeft
            label="ชื่อผลงานวิจัยที่นำเสนอ"
            customLabel="w-1/6"
            v-model="formData.research"
            @input="handleInput('research', $event.target.value)"
          />
          <span
            v-if="v$.research.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.research.$errors[0].$message }}
          </span>

          <TextInputLabelLeft
            label="ชื่อการประชุมทางวิชาการ"
            customLabel="w-1/6"
            v-model="formData.conferenceName"
            @input="handleInput('conferenceName', $event.target.value)"
          />

          <span
            v-if="v$.conferenceName.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.conferenceName.$errors[0].$message }}
          </span>

          <div class="flex flex-row w-full">
            <p class="w-1/4">การประชุมวิชาการจัดในประเทศ หรือต่างประเทศ</p>
            <RadioInput
              label="ภายในประเทศ"
              name="Venue"
              value="ภายในประเทศ"
              customDiv="w-max mr-4"
              v-model="formData.venue"
              @change="handleInput('venue', $event.target.value)"
            />
            <RadioInput
              customDiv="max-w-36"
              label="ณ ต่างประเทศ"
              name="Venue"
              value="ณ ต่างประเทศ"
              v-model="formData.venue"
              @change="handleInput('venue', $event.target.value)"
            />
          </div>

          <span
            v-if="v$.venue.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.venue.$errors[0].$message }}
          </span>

          <div class="flex flex-row">
            <TextInputLabelLeft
              label="วันที่จัด"
              customLabel="w-auto mr-9"
              customDiv="max-w-max mr-10"
              customInput="max-w-max"
              type="date"
              v-model="formData.meetingDate"
              @input="handleInput('meetingDate', $event.target.value)"
            />
            <TextInputLabelLeft
              label="สถานที่จัด"
              customLabel="w-24"
              customInput="w-full"
              v-model="formData.meetingVenue"
              @input="handleInput('meetingVenue', $event.target.value)"
            />
            <div
              class="ml-10 w-full flex justify-center items-center"
              v-if="formData.venue == 'ณ ต่างประเทศ'"
            >
              <div class="flex flex-row w-full">
                <span class="flex mr-2 items-center"> ประเทศ </span>
                <v-select
                  class="w-full"
                  :options="countries"
                  v-model="formData.location"
                  @change="handleInput('location', $event.target.value)"
                ></v-select>
              </div>
            </div>

            <div
              class="ml-5 w-full flex justify-center items-center"
              v-if="formData.venue == 'ภายในประเทศ'"
            >
              <div class="flex flex-row w-full">
                <span class="flex mr-2 items-center"> จังหวัด </span>
                <v-select
                  class="w-full"
                  :options="provinces"
                  v-model="formData.location"
                  @input="handleInput('location', $event.target.value)"
                ></v-select>
              </div>
            </div>
          </div>

          <span
            v-if="v$.meetingDate.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.meetingDate.$errors[0].$message }}
          </span>
          <span
            v-if="v$.meetingVenue.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.meetingVenue.$errors[0].$message }}
          </span>
          <span
            v-if="v$.location.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.location.$errors[0].$message }}
          </span>

          <div class="flex flex-row justify-between">
            <TextInputLabelLeft
              label="วันที่ส่งบทความไปยังผู้จัด"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.dateSubmitToOrganizer"
              @input="handleInput('dateSubmitToOrganizer', $event.target.value)"
            />

            <TextInputLabelLeft
              label="วันประกาศผลการพิจารณาบทความ"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.argumentDateReview"
              @input="handleInput('argumentDateReview', $event.target.value)"
            />

            <TextInputLabelLeft
              label="วันสุดท้ายของการลงทะเบียน"
              type="date"
              customDiv="max-w-max"
              customInput="max-w-max"
              v-model="formData.lastDayRegister"
              @input="handleInput('lastDayRegister', $event.target.value)"
            />
          </div>
          <span
            v-if="v$.dateSubmitToOrganizer.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.dateSubmitToOrganizer.$errors[0].$message }}
          </span>
          <span
            v-if="v$.argumentDateReview.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.argumentDateReview.$errors[0].$message }}
          </span>
          <span
            v-if="v$.lastDayRegister.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.lastDayRegister.$errors[0].$message }}
          </span>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="leading-9 text-lg font-bold">
          2.  รายละเอียดการขออนุมัติเดินทาง
        </p>
        <SectionWrapper>
          <RadioInput
            label="การประชุมทางวิชาการที่คณะจัดหรือร่วมจัดในประเทศ และไม่อยู่ในฐานข้อมูลสากล SCOPUS"
            name="Scopus"
            value="คณะจัด ไม่อยู่scopus"
            v-model="formData.meetingType"
            @change="handleInput('meetingType', $event.target.value)"
          />
          <RadioInput
            label="การประชุมทางวิชาการที่อยู่ในฐานข้อมูลสากล SCOPUS โดยมีการกำหนดคุณภาพแบ่งเป็น 2 ระดับ "
            name="Scopus"
            value="อยู่ในscopus"
            v-model="formData.meetingType"
            @change="handleInput('meetingType', $event.target.value)"
          />

          <span
            v-if="v$.meetingType.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.meetingType.$errors[0].$message }}
          </span>

          <SectionWrapper>
            <RadioInput
              label="ระดับมาตรฐาน"
              name="Level"
              value="มาตรฐาน"
              v-model="formData.qualityMeeting"
              :disabled="
                !formData.meetingType || formData.meetingType !== 'อยู่ในscopus'
              "
              @change="handleInput('qualityMeeting', $event.target.value)"
            />
            <RadioInput
              label="ระดับดีมาก"
              name="Level"
              value="ดีมาก"
              v-model="formData.qualityMeeting"
              :disabled="
                !formData.meetingType || formData.meetingType !== 'อยู่ในscopus'
              "
              @change="handleInput('qualityMeeting', $event.target.value)"
            />

            <span
              v-if="v$.qualityMeeting.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.qualityMeeting.$errors[0].$message }}
            </span>

            <SectionWrapper>
              <RadioInput
                label="ใช้คะแนนที่คำนวณจาก SJR indicator และ H Index ที่ได้มาจาก SCImago Journal & Country Rank"
                name="Score"
                value="SJR"
                v-model="formData.score"
                :disabled="
                  !formData.qualityMeeting ||
                  formData.qualityMeeting !== 'ดีมาก'
                "
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า SJR"
                  customLabel="w-16 mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.sjr"
                  :disabled="!formData.score || formData.score !== 'SJR'"
                  @input="handleInput('sjr', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.sjrYear"
                  :disabled="!formData.score || formData.score !== 'SJR'"
                  @input="handleInput('sjrYear', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.sjrhIndex"
                  :disabled="!formData.score || formData.score !== 'SJR'"
                  @input="handleInput('sjrhIndex', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="ปี"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.hIndexYear"
                  :disabled="!formData.score || formData.score !== 'SJR'"
                  @input="handleInput('hIndexYear', $event.target.value)"
                />
                <span v-if="formData.score == 'SJR'" class="place-self-center">
                  มีค่าคะแนน ={{ totalScore.total }} คะแนน  และระดับ {{ totalScore.result }}</span
                >
              </div>

              <span
                v-if="v$.sjr.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.sjr.$errors[0].$message }}
              </span>
              <span
                v-if="v$.sjrYear.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.sjrYear.$errors[0].$message }}
              </span>
              <span
                v-if="v$.sjrhIndex.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.sjrhIndex.$errors[0].$message }}
              </span>
              <span
                v-if="v$.hIndexYear.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.hIndexYear.$errors[0].$message }}
              </span>

              <RadioInput
                label="ใช้ผลการจัดระดับ CIF (Conference Impact Factor)"
                name="Score"
                value="CIF"
                v-model="formData.score"
                :disabled="
                  !formData.qualityMeeting ||
                  formData.qualityMeeting !== 'ดีมาก'
                "
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า citation total"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.Citation"
                  :disabled="!formData.score || formData.score !== 'CIF'"
                  @input="handleInput('Citation', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="x H-Index"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.hIndex"
                  :disabled="!formData.score || formData.score !== 'CIF'"
                  @input="handleInput('hIndex', $event.target.value)"
                />
                <span v-if="formData.score == 'CIF'" class="place-self-center"
                  >มีค่าคะแนน = {{ totalScore.total }} คะแนน  และระดับ {{ totalScore.result }}</span
                >
              </div>

              <span
                v-if="v$.Citation.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.Citation.$errors[0].$message }}
              </span>
              <span
                v-if="v$.hIndex.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.hIndex.$errors[0].$message }}
              </span>

              <RadioInput
                label="ใช้ผลการจัดระดับ CORE Conference Ranking"
                name="Score"
                value="CORE"
                v-model="formData.score"
                :disabled="
                  !formData.qualityMeeting ||
                  formData.qualityMeeting !== 'ดีมาก'
                "
                @change="handleInput('score', $event.target.value)"
              />
              <div class="flex flex-row w-full px-7 my-2">
                <TextInputLabelLeft
                  label="• ค่า"
                  customLabel="w-auto mr-1"
                  customDiv="max-w-max"
                  customInput="max-w-max mr-3"
                  v-model="formData.coreConf"
                  :disabled="!formData.score || formData.score !== 'CORE'"
                  @input="handleInput('coreConf', $event.target.value)"
                />
                <span class="place-self-center"
                  >(ตั้งแต่ A ขึ้นไป)</span
                >
              </div>
              <p class="px-7 text-sm text-red-500">
                เช็คคะแนนได้จาก http://portal.core.edu.au/conf-ranks
              </p>
              <span
                v-if="v$.coreConf.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.coreConf.$errors[0].$message }}
              </span>

              <span
                v-if="v$.score.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.score.$errors[0].$message }}
              </span>
            </SectionWrapper>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="text-lg font-bold">3. ผู้ขอรับการสนับสนุน</p>
        <SectionWrapper>
          <RadioInput
            label="ผู้ประพันธ์อันดับแรก First Author"
            value="First Author"
            name="Author"
            v-model="formData.radioAuth"
            @change="handleInput('radioAuth', $event.target.value)"
          />
          <RadioInput
            label="ผู้ประพันธ์บรรณกิจ Corresponding Author"
            value="Corresponding Author"
            name="Author"
            v-model="formData.radioAuth"
            @change="handleInput('radioAuth', $event.target.value)"
          />

          <span
            v-if="v$.radioAuth.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.radioAuth.$errors[0].$message }}
          </span>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <p class="text-lg font-bold">
          4.  การลาและการขอเบิกค่าลงทะเบียนและค่าใช้จ่ายอื่น ๆ
        </p>

        <SectionWrapper>
          <p class="font-bold text-base pt-3">4.1 ครั้งที่ในการลา</p>
          <SectionWrapper>
            <RadioInput
              label="ครั้งที่ 1"
              name="timeLeave"
              value="1"
              v-model="formData.timeLeave"
              @change="handleInput('timeLeave', $event.target.value)"
            />
            <RadioInput
              label="ครั้งที่ 2"
              name="timeLeave"
              value="2"
              v-model="formData.timeLeave"
              @change="handleInput('timeLeave', $event.target.value)"
            />

            <span
              v-if="v$.timeLeave.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.timeLeave.$errors[0].$message }}
            </span>

            <p class="py-1 px-7">
              ในกรณีลาครั้งที่ 2 (การประชุมฯ ณ ต่างประเทศ)
              มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล
            </p>
            <div class="flex flex-row px-7 mt-1">
              <RadioInput
                label="WoS-Q1"
                name="wos"
                value="WoS-Q1"
                v-model="formData.wos"
                :disabled="
                  !(
                    formData.timeLeave === '2' &&
                    formData.venue === 'ณ ต่างประเทศ'
                  )
                "
                @change="handleInput('wos', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q2"
                name="wos"
                value="WoS-Q2"
                v-model="formData.wos"
                :disabled="
                  !(
                    formData.timeLeave === '2' &&
                    formData.venue === 'ณ ต่างประเทศ'
                  )
                "
                @change="handleInput('wos', $event.target.value)"
              />
            </div>
            <span
              v-if="v$.wos.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.wos.$errors[0].$message }}
            </span>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                v-model="formData.nameWos"
                :disabled="
                  !(
                    formData.timeLeave === '2' &&
                    formData.venue === 'ณ ต่างประเทศ'
                  )
                "
                @input="handleInput('nameWos', $event.target.value)"
              />

              <span
                v-if="v$.nameWos.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.nameWos.$errors[0].$message }}
              </span>
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
              v-model="formData.withdraw"
              :disabled="formData.venue !== 'ณ ต่างประเทศ'"
              @change="handleInput('withdraw', $event.target.value)"
            />
            <RadioInput
              label="ไม่เกิน 100% มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล"
              name="withdraw"
              value="100%"
              v-model="formData.withdraw"
              :disabled="formData.venue !== 'ณ ต่างประเทศ'"
              @change="handleInput('withdraw', $event.target.value)"
            />
            <span
              v-if="v$.withdraw.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.withdraw.$errors[0].$message }}
            </span>

            <div class="flex flex-row px-7 mt-1">
              <RadioInput
                label="WoS-Q1"
                name="quality100"
                value="WoS-Q1"
                v-model="formData.quality100"
                :disabled="formData.withdraw !== '100%'"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q2"
                name="quality100"
                value="WoS-Q2"
                v-model="formData.quality100"
                :disabled="formData.withdraw !== '100%'"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="WoS-Q3"
                name="quality100"
                value="WoS-Q3"
                v-model="formData.quality100"
                :disabled="formData.withdraw !== '100%'"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="SJR-Q1"
                name="quality100"
                value="SJR-Q1"
                v-model="formData.quality100"
                :disabled="formData.withdraw !== '100%'"
                @change="handleInput('quality100', $event.target.value)"
              />
              <RadioInput
                label="SJR-Q2"
                name="quality100"
                value="SJR-Q2"
                v-model="formData.quality100"
                :disabled="formData.withdraw !== '100%'"
                @change="handleInput('quality100', $event.target.value)"
              />
            </div>
            <span
              v-if="v$.quality100.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.quality100.$errors[0].$message }}
            </span>
            <div class="px-7 py-2">
              <TextInputLabelLeft
                label="เรื่อง"
                customLabel="pr-2"
                v-model="formData.name100"
                :disabled="formData.withdraw !== '100%'"
                @input="handleInput('name100', $event.target.value)"
              />
              <span
                v-if="v$.name100.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.name100.$errors[0].$message }}
              </span>
            </div>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

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
                  v-model="formData.numberArticles"
                  @input="handleInput('numberArticles', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="บทความ ๆ ละ"
                  customLabel="w-auto px-2"
                  customDiv="max-w-max"
                  customInput="max-w-max"
                  v-model="formData.amount1article"
                  @input="handleInput('amount1article', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalAmount }} บาท</p>
            </div>
            <span
              v-if="v$.numberArticles.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.numberArticles.$errors[0].$message }}
            </span>
            <span
              v-if="v$.amount1article.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.amount1article.$errors[0].$message }}
            </span>

            <p>2. ค่าพาหนะเดินทาง</p>
            <div class="flex flex-col px-5">
              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  v-model="formData.domesticExpenses"
                  @input="handleInput('domesticExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <span
                v-if="v$.domesticExpenses.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.domesticExpenses.$errors[0].$message }}
              </span>

              <div class="flex flex-row mb-2">
                <TextInputLabelLeft
                  label="• เดินทางในต่างประเทศ"
                  customLabel="w-64 pr-2"
                  customDiv="max-w-[50rem]"
                  customInput="max-w-[50rem]"
                  v-model="formData.overseasExpenses"
                  @input="handleInput('overseasExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <span
                v-if="v$.overseasExpenses.$error"
                class="text-base font-bold text-red-500 text-left"
              >
                {{ v$.overseasExpenses.$errors[0].$message }}
              </span>
              <div class="flex flex-row">
                <TextInputLabelLeft
                  label="• เดินทางระหว่างประเทศ กรุงเทพฯ -"
                  customLabel="w-22 pr-2"
                  customDiv="max-w-[31rem]"
                  customInput="max-w-[14rem]"
                  :disabled="true"
                  :placeholder="computedPlaceholder"
                />
                <!-- <div class="max-w-[30rem] flex justify-center items-center">
                  <div class="flex flex-row w-full">
                    <span
                      class="w-[31rem] pr-2 flex justify-center items-center"
                      >• เดินทางระหว่างประเทศ กรุงเทพฯ -</span
                    >
                    <v-select
                      class="w-full"
                      :options="countries"
                      v-model="formData.travelCountry"
                      @input="handleInput('travelCountry', $event.target.value)"
                    ></v-select>
                  </div>
                </div> -->
                <TextInputLabelLeft
                  label="- กรุงเทพฯ"
                  customLabel="w-22 pr-2"
                  customDiv="max-w-[20rem]"
                  customInput="max-w-[14rem]"
                  v-model="formData.interExpenses"
                  @input="handleInput('interExpenses', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
            </div>
            <!-- <span v-if="v$.travelCountry.$error" class="text-base font-bold text-red-500 text-left">
              {{ v$.travelCountry.$errors[0].$message }}
            </span> -->
            <span
              v-if="v$.interExpenses.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.interExpenses.$errors[0].$message }}
            </span>

            <div class="flex flex-row">
              <TextInputLabelLeft
                label="3. ค่าภาษีสนามบิน (ถ้ามี)"
                customLabel="w-auto pr-2"
                customDiv="max-w-[52rem]"
                customInput="max-w-[40rem]"
                v-model="formData.airplaneTax"
                @input="handleInput('airplaneTax', $event.target.value)"
              />
              <p class="flex items-center pl-2">บาท</p>
            </div>

            <span
              v-if="v$.airplaneTax.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.airplaneTax.$errors[0].$message }}
            </span>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="4. ค่าเช่าที่พัก"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[19rem]"
                  v-model="formData.numberDaysRoom"
                  @input="handleInput('numberDaysRoom', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="คืน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  v-model="formData.roomCostPerNight"
                  @input="handleInput('roomCostPerNight', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalRoom }} บาท</p>
            </div>
            <span
              v-if="v$.numberDaysRoom.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.numberDaysRoom.$errors[0].$message }}
            </span>
            <span
              v-if="v$.roomCostPerNight.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.roomCostPerNight.$errors[0].$message }}
            </span>

            <div class="flex flex-row mb-2 justify-between">
              <div class="flex flex-row w-5/6">
                <TextInputLabelLeft
                  label="5. ค่าเบี้ยเลี้ยงเดินทาง"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[16rem]"
                  v-model="formData.numTravelDays"
                  @input="handleInput('numTravelDays', $event.target.value)"
                />
                <TextInputLabelLeft
                  label="วัน ๆ ละ"
                  customLabel="w-auto pr-2"
                  customDiv="max-w-[26rem]"
                  customInput="max-w-[20rem]"
                  v-model="formData.dailyAllowance"
                  @input="handleInput('dailyAllowance', $event.target.value)"
                />
                <p class="flex items-center pl-2">บาท</p>
              </div>
              <p class="flex items-center">รวม {{ totalAllowance }} บาท</p>
            </div>
            <span
              v-if="v$.numTravelDays.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.numTravelDays.$errors[0].$message }}
            </span>
            <span
              v-if="v$.dailyAllowance.$error"
              class="text-base font-bold text-red-500 text-left"
            >
              {{ v$.dailyAllowance.$errors[0].$message }}
            </span>
            <p class="font-bold text-2xl pt-5 text-right">
              รวมทั้งสิ้น {{ allTotal }} บาท
            </p>
          </SectionWrapper>
        </SectionWrapper>
      </Mainbox>

      <Mainbox>
        <SectionWrapper>
          <p class="text-lg font-bold">เอกสารหลักฐานที่แนบ</p>
          <FileInput
            label="สำเนาบทความ (Full Paper)"
            name="First"
            type="file"
            @change="handleFile($event, 'file1')"
          />
          <span
            v-if="v$.file1.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file1.$errors[0].$message }}
          </span>
          <TextInputLabelLeft
            label="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* (Full Paper ประกอบการเบิก) มีผลงานตีพิมพ์ในวารสารในฐานข้อมูล WoS/SJR ซึ่งได้รับการตีพิมพ์ไม่เกิน 2 ปี ก่อนการประชุม เมื่อ"
            customLabel="w-[290%]"
            customInput="w-1/6"
            :disabled="formData.withdraw !== '100%'"
            @input="handleInput('inputFile2', $event.target.value)"
          />
          <FileInput
            name="Second"
            type="file"
            :disabled="formData.withdraw !== '100%'"
            @change="handleFile($event, 'file2')"
          />
          <span
            v-if="v$.inputFile2.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.inputFile2.$errors[0].$message }}
          </span>
          <span
            v-if="v$.file2.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file2.$errors[0].$message }}
          </span>
          <FileInput
            label="*กรณีเบิกค่าใช้จ่ายเต็มวงเงิน* หลักฐานเอกสาร Quartile ของ Paper ที่ใช้ประกอบการเบิก"
            name="Third"
            type="file"
            :disabled="formData.withdraw !== '100%'"
            @change="handleFile($event, 'file3')"
          />
          <span
            v-if="v$.file3.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file3.$errors[0].$message }}
          </span>
          <FileInput
            label="เอกสารประชาสัมพันธ์การจัดการประชุมทางวิชาการ (Call for paper)"
            name="Fourth"
            type="file"
            @change="handleFile($event, 'file4')"
          />
          <span
            v-if="v$.file4.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file4.$errors[0].$message }}
          </span>
          <FileInput
            label="จดหมายการตอบรับเข้าร่วมประชุม (Accepted)"
            name="Fifth"
            type="file"
            @change="handleFile($event, 'file5')"
          />
          <span
            v-if="v$.file5.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file5.$errors[0].$message }}
          </span>
          <FileInput
            label="เอกสารแสดงค่าลงทะเบียน"
            name="Sixth"
            type="file"
            @change="handleFile($event, 'file6')"
          />
          <span
            v-if="v$.file6.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file6.$errors[0].$message }}
          </span>
          <FileInput
            label="เอกสารแสดงอัตราแลกเปลี่ยน (ณ วันที่ยื่น)"
            name="Seventh"
            type="file"
            @change="handleFile($event, 'file7')"
          />
          <span
            v-if="v$.file7.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file7.$errors[0].$message }}
          </span>
          <FileInput
            label="หลักฐานการประชุมวิชาการอยู่ในฐาน Scopus"
            name="Eighth"
            type="file"
            @change="handleFile($event, 'file8')"
          />
          <span
            v-if="v$.file8.$error"
            class="text-base font-bold text-red-500 text-left"
          >
            {{ v$.file8.$errors[0].$message }}
          </span>
        </SectionWrapper>
      </Mainbox>
      <div class="flex justify-end">
        <button @click="newConfer" class="btn btn-success text-white">
          บันทึกข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  numeric,
  minValue,
  integer,
  helpers,
  requiredIf,
  maxValue,
  decimal,
  sameAs,
} from "@vuelidate/validators";
import { DateTime } from "luxon";

import { useUserStore } from "@/store/userStore";
import api from "@/setting/api";

import Mainbox from "@/components/form/Mainbox.vue";
import SectionWrapper from "@/components/form/SectionWrapper.vue";
import TextInputLabelLeft from "@/components/Input/TextInputLabelLeft.vue";
import RadioInput from "@/components/Input/RadioInput.vue";
import FileInput from "@/components/Input/FileInput.vue";

import location from "@/location.json";

const countries = location.countries;
const provinces = location.provinces;

const router = useRouter();

// จัดการข้อมูลหลัก
const formData = reactive({
  user_id: 0,
  name: "",
  position: "",
  textOther1: 0,
  textOther2: "",

  travelStart: "",
  travelEnd: "",
  research: "",
  conferenceName: "",

  venue: "",
  meetingDate: "",
  meetingVenue: "",
  location: "",

  dateSubmitToOrganizer: "",
  argumentDateReview: "",
  lastDayRegister: "",

  meetingType: "",
  qualityMeeting: "",

  score: "",
  sjr: 0,
  sjrYear: 0,
  sjrhIndex: 0,
  hIndexYear: 0,
  total: 0,
  Citation: 0,
  hIndex: 0,
  coreConf: "",

  radioAuth: "",

  timeLeave: "",
  wos: "",
  nameWos: "",

  withdraw: "",
  quality100: "",
  name100: "",

  numberArticles: "",
  amount1article: "",
  totalAmount: "",
  domesticExpenses: "",
  overseasExpenses: "",
  travelCountry: "",
  interExpenses: "",
  airplaneTax: "",
  numberDaysRoom: "",
  roomCostPerNight: "",
  totalRoom: "",
  numTravelDays: "",
  dailyAllowance: "",
  totalAllowance: "",
  all_money: "",

  file1: "",
  file2: null,
  inputFile2: "",
  file3: null,
  file4: "",
  file5: "",
  file6: "",
  file7: "",
  file8: "",
});

const totalScore = computed(() => {
  if (formData.score == "SJR") {
    if (formData.sjr !== null && formData.sjrhIndex !== null) {
      const total = formData.sjr * formData.sjrhIndex;
      let result = "ระดับมาตรฐาน"; // ค่าเริ่มต้น

      if (total >= 4) {
        result = "ระดับดีมาก";
      }

      return { total, result };
    }

    return null;
  } else if (formData.score == "CIF") {
    if (formData.Citation != null && formData.hIndex != null) {
      const total = 0.5 * (formData.Citation / 200 + formData.hIndex);
      let result = "ระดับมาตรฐาน"; // ค่าเริ่มต้น

      if (total >= 9.38) {
        result = "ระดับดีมาก";
      }

      return { total, result };
    }
    return null;
  }
  return null;
});

//score
watch(totalScore, (newValue) => {
  formData.total = newValue;
});

// ตรวจสอบปีและวันที่นี้
const currentYear = computed(() => DateTime.now().year);
const currentDate = computed(() => DateTime.now().toISODate());

// ตรวจเงื่อนไข 2 อัน
const isRequiredForWos = () =>
  formData.timeLeave.includes("2") && formData.venue.includes("ณ ต่างประเทศ");

// ตรวจว่าวันที่ไม่อยู่หลัง value <= x
const beforeDate = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() <= DateTime.fromISO(date).toISODate()
  );
};

//ตรวจว่าวันที่ไม่เกิดก่อน value >= x
const afterDate = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() >= DateTime.fromISO(date).toISODate()
  );
};

// ตรวจว่าวันที่ไม่อยู่หลัง value < x
const beforeDatenoteqal = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() < DateTime.fromISO(date).toISODate()
  );
};

//ตรวจว่าวันที่ไม่เกิดก่อน value > x
const afterDatenoteqal = (value, date) => {
  return (
    DateTime.fromISO(value).toISODate() > DateTime.fromISO(date).toISODate()
  );
};

const computedPlaceholder = computed(() => {
  return formData.venue === "ณ ต่างประเทศ" ? formData.location : "";
});

const rules = computed(() => ({
  textOther1: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลครั้งที่ *", required),
    numeric: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      numeric
    ),
    integer: helpers.withMessage("* กรุณากรอกเป็นจำนวนเต็ม *", integer),
    minValue: helpers.withMessage(
      "* ครั้งที่ไม่สามารถต่ำกว่า 1 ได้ *",
      minValue(1)
    ),
  },
  textOther2: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลวันที่ *", required),
    beforeDate: helpers.withMessage("* วันที่ต้องไม่เกินวันนี้ *", (value) =>
      beforeDate(value, currentDate.value)
    ),
  },
  travelStart: {
    required: helpers.withMessage("* กรุณากรอกข้อมูลเดินทาง *", required),
    afterDatenoteqal: helpers.withMessage(
      "* วันเดินทางไม่สามารถเกิดก่อน หรือเป็นวันนี้ได้ *",
      (value) => afterDatenoteqal(value, currentDate.value)
    ),
  },
  travelEnd: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลวันเดินทางกลับ *",
      required
    ),
    afterDate: helpers.withMessage(
      "* วันเดินทางกลับไม่สามารถเกิดก่อนวันไปได้ *",
      (value) => afterDate(value, formData.travelStart)
    ),
  },
  research: {
    required: helpers.withMessage("* กรุณากรอกชื่อผลงานวิจัย *", required),
  },
  conferenceName: {
    required: helpers.withMessage(
      "* กรุณากรอกชื่องานประชุมวิชาการ *",
      required
    ),
  },
  venue: {
    required: helpers.withMessage(
      "* กรุณาเลือกว่าไปต่างประเทศ หรือในประเทศ *",
      required
    ),
  },
  meetingDate: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลวันที่จัดข้อมูลการประชุมวิชาการ *",
      required
    ),
    afterDate: helpers.withMessage(
      "* วันที่จัดการประชุมวิชาการไม่สามารถจัดก่อนวันที่จะเดินทางได้ *",
      (value) => afterDate(value, formData.travelStart)
    ),
    beforeDate: helpers.withMessage(
      "* วันที่จัดการประชุมวิชาการไม่สามารถจัดหลังจากที่เดินทางกลับได้ *",
      (value) => beforeDate(value, formData.travelEnd)
    ),
  },
  meetingVenue: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลสถานที่จัดงานประชุมวิชาการ *",
      required
    ),
  },
  location: {
    required: helpers.withMessage(
      "* กรุณากรอกประเทศ หรือจังหวัดที่ไปประชุมวิชาการ *",
      required
    ),
  },
  dateSubmitToOrganizer: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลวันที่ส่งข้อมูลงานวิชาการ *",
      required
    ),
    beforeDate: helpers.withMessage(
      "* ไม่สามารถส่งงานวิจัยหลังจากวันที่กรอกข้อมูลแบบฟอร์มนี้ *",
      (value) => beforeDate(value, currentDate.value)
    ),
  },
  argumentDateReview: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลวันที่ประกาศผลการคัดเลือก *",
      required
    ),
    afterDatenoteqal: helpers.withMessage(
      "* ไม่สามารถกรอกวันประกาศผลก่อน หรือวันสมัคร *",
      (value) => afterDatenoteqal(value, formData.dateSubmitToOrganizer)
    ),
    beforeDatenoteqal: helpers.withMessage(
      "* ไม่สามารถกรอกวันประกาศผลหลังจากวันที่เดินทางได้ *",
      (value) => beforeDatenoteqal(value, formData.travelStart)
    ),
  },
  lastDayRegister: {
    required: helpers.withMessage(
      "* กรุณากรอกข้อมูลวันที่วันสุดท้ายที่สามารถลงทะเบียนได้ *",
      required
    ),
    afterDatenoteqal: helpers.withMessage(
      "* วันสุดท้ายของการลงทะเบียนไม่สามารถเกิดก่อนวันที่ส่งงาน หรือประกาศผลได้ *",
      (value) =>
        afterDatenoteqal(
          value,
          DateTime.min(
            DateTime.fromISO(formData.dateSubmitToOrganizer),
            DateTime.fromISO(formData.argumentDateReview)
          )
        )
    ),
    beforeDatenoteqal: helpers.withMessage(
      "* วันสุดท้ายของการลงทะเบียนไม่สามารถเกิดหลังจากวันเดินทาง หรือวันที่จัดงานได้ *",
      (value) =>
        beforeDatenoteqal(
          value,
          DateTime.min(
            DateTime.fromISO(formData.travelStart),
            DateTime.fromISO(formData.meetingDate)
          )
        )
    ),
  },
  meetingType: {
    required: helpers.withMessage(
      "* กรุณาเลือกว่าการประชุมมีอยู่ใน Scopus หรือคณะเป็นผู้ร่วมจัด *",
      required
    ),
  },
  qualityMeeting: {
    required: helpers.withMessage(
      "* กรุณาเลือกระดับคุณภาพ *",
      requiredIf(() => formData.meetingDate.includes("อยู่ในscopus"))
    ),
  },
  score: {
    required: helpers.withMessage(
      "* กรุณาเลือกสูตรที่ใช้ในการคำนวณ *",
      requiredIf(() => formData.qualityMeeting.includes("ดีมาก"))
    ),
  },
  sjr: {
    required: helpers.withMessage(
      "* กรุณากรอกค่า SJR *",
      requiredIf(() => formData.score.includes("SJR"))
    ),
    decimal: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      decimal
    ),
  },
  sjrYear: {
    required: helpers.withMessage(
      "* กรุณากรอกปีที่นำมาคำนวณ *",
      requiredIf(() => formData.score.includes("SJR"))
    ),
    numeric: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      numeric
    ),
    integer: helpers.withMessage("* กรุณากรอกเป็นจำนวนเต็ม *", integer),
    sameAs: helpers.withMessage(
      "* กรุณากรอกปีให้ตรงกันกับปีของ H-index *",
      sameAs(formData.hIndexYear)
    ),
    maxValue: helpers.withMessage(
      "* ปีไม่สามารถเป็นปีที่มากกว่าปีนี้ *",
      maxValue(currentYear.value)
    ),
  },
  sjrhIndex: {
    required: helpers.withMessage(
      "* กรุณากรอก H-Index *",
      requiredIf(() => formData.score.includes("SJR"))
    ),
    numeric: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      numeric
    ),
    decimal: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      decimal
    ),
  },
  hIndexYear: {
    required: helpers.withMessage(
      "* กรุณกรอกปีของ H-Index *",
      requiredIf(() => formData.score.includes("SJR"))
    ),
    numeric: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      numeric
    ),
    integer: helpers.withMessage("* กรุณากรอกเป็นจำนวนเต็ม *", integer),
    sameAs: helpers.withMessage(
      "* กรุณากรอกปีให้ตรงกันกับปีของค่า SJR *",
      sameAs(formData.sjrYear)
    ),
    maxValue: helpers.withMessage(
      "* ปีไม่สามารถเป็นปีที่มากกว่าปีนี้ *",
      maxValue(currentYear.value)
    ),
  },
  Citation: {
    required: helpers.withMessage(
      "* กรุณากรอกค่า SJR *",
      requiredIf(() => formData.score.includes("CIF"))
    ),
    decimal: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      decimal
    ),
  },
  hIndex: {
    required: helpers.withMessage(
      "* กรุณากรอก H-Index *",
      requiredIf(() => formData.score.includes("CIF"))
    ),
    numeric: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      numeric
    ),
    decimal: helpers.withMessage(
      "* กรุณากรอกข้อมูลครั้งที่เป็นตัวเลข *",
      decimal
    ),
  },
  coreConf: {
    required: helpers.withMessage(
      "* กรุณากรอกค่า CORE Conference Ranking *",
      requiredIf(() => formData.score.includes("CORE"))
    ),
    value: helpers.withMessage(
      "* กรุณากรอกค่าเป็น A หรือ A* เท่านั้น *",
      helpers.regex(/^A[\*\+]?$/)
    ),
  },
  radioAuth: {
    required: helpers.withMessage(
      "* กรุณาเลือกว่ารูปแบบผู้ประพันธ์ *",
      required
    ),
  },
  timeLeave: {
    required: helpers.withMessage("* กรุณาเลือกครั้งที่ที่ลา *", required),
    regex: helpers.withMessage(
      "* เลือกได้แค่ครั้งที่ 1 หรือ ครั้งที่ 2 *",
      helpers.regex(/^[12]$/)
    ),
  },
  wos: {
    required: helpers.withMessage(
      "* กรุณาเลือก WoS-Q1 หรือ WoS-Q2 *",
      requiredIf(isRequiredForWos)
    ),
  },
  nameWos: {
    required: helpers.withMessage(
      "* กรุณากรอกชื่อผลงานตีพิมพ์ *",
      requiredIf(isRequiredForWos)
    ),
  },
  withdraw: {
    required: helpers.withMessage(
      "* กรุณาเลือกจำนวนค่าใช้จ่ายที่เบิกได้ *",
      requiredIf(isRequiredForWos)
    ),
  },
  quality100: {
    required: helpers.withMessage(
      "* กรุณาเลือก Quartile ของงานวิจัย *",
      requiredIf(() => formData.withdraw.includes("100%"))
    ),
  },
  name100: {
    required: helpers.withMessage(
      "* กรุณากรอกชื่อผลงานตีพิมพ์ *",
      requiredIf(() => formData.withdraw.includes("100%"))
    ),
  },
  numberArticles: {
    required: helpers.withMessage("* กรุณากรอกจำนวนบทความ *", required),
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    integer: helpers.withMessage("* กรุณาระบุเป็นจำนวนจริง *", integer),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  amount1article: {
    required: helpers.withMessage(
      "* กรุณากรอกจำนวนค่าลงทะเบียน 1 บทความ *",
      required
    ),
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  domesticExpenses: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
    required: helpers.withMessage(
      "* กรุณากรอกค่าพาหนะเดินทาง *",
      requiredIf(() => formData.venue == "ภายในประเทศ")
    ),
  },
  overseasExpenses: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
    required: helpers.withMessage(
      "* กรุณากรอกค่าพาหนะเดินทาง *",
      requiredIf(() => formData.venue == "ณ ต่างประเทศ")
    ),
  },
  interExpenses: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  airplaneTax: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  numberDaysRoom: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    integer: helpers.withMessage("* กรุณาระบุเป็นจำนวนจริง *", integer),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  roomCostPerNight: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },

  numTravelDays: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    integer: helpers.withMessage("* กรุณาระบุเป็นจำนวนจริง *", integer),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  dailyAllowance: {
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    decimal: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", decimal),
    minValue: helpers.withMessage("* ไม่สามารถต่ำกว่า 1 *", minValue(1)),
  },
  file1: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file2: {
    required: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(() => formData.withdraw.includes("100%"))
    ),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true;
        return value.type === "application/pdf";
      }
    ),
  },
  inputFile2: {
    required: helpers.withMessage(
      "* กรุณาระบุปี *",
      requiredIf(() => formData.withdraw.includes("100%"))
    ),
    numeric: helpers.withMessage("* กรุณาระบุเป็นตัวเลข *", numeric),
    integer: helpers.withMessage("* กรุณาระบุเป็นจำนวนเต็ม *", integer),
    minValue: helpers.withMessage(
      "* ต้องอยู่ในช่วง 2 ปี *",
      minValue(currentYear.value - 2)
    ),
    maxValue: helpers.withMessage(
      "* ไม่สามารถยื่นเอกสารที่ปีมากกว่าปัจจุบันได้ห *",
      maxValue(currentYear.value)
    ),
  },
  file3: {
    required: helpers.withMessage(
      "* กรุณาอัปโหลดไฟล์ *",
      requiredIf(() => formData.withdraw.includes("100%"))
    ),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return true;
        return value.type === "application/pdf";
      }
    ),
  },
  file4: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file5: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file6: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file7: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
  file8: {
    required: helpers.withMessage("* กรุณาอัปโหลดไฟล์ *", required),
    fileType: helpers.withMessage(
      "* อัปโหลดได้เฉพาะไฟล์ PDF เท่านั้น *",
      (value) => {
        if (!value) return false;
        const allowedTypes = ["application/pdf"];
        return allowedTypes.includes(value.type);
      }
    ),
  },
}));

const v$ = useVuelidate(rules, formData);

const userStore = useUserStore();
const user = computed(() => userStore.user);

onMounted(async () => {
  await userStore.fetchUser();

  formData.user_id = user.value?.user_id;
  formData.name = user.value?.user_nameth || "";
  formData.position = user.value?.user_positionth || "";
});

const handleInput = (key, value) => {
  formData[key] = value;
};

const handleFile = (event, fieldName) => {
  const file = event.target.files[0];
  if (file) {
    formData[fieldName] = file;
  } else {
    console.log(`No file selected for ${fieldName}.`);
  }
};

const totalAmount = computed(() => {
  formData.totalAmount = formData.numberArticles * formData.amount1article;
  return formData.totalAmount;
});
const totalRoom = computed(() => {
  formData.totalRoom = formData.numberDaysRoom * formData.roomCostPerNight;
  return formData.totalRoom;
});
const totalAllowance = computed(() => {
  formData.totalAllowance = formData.numTravelDays * formData.dailyAllowance;
  return formData.totalAllowance;
});

const allTotal = computed(() => {
  formData.all_money =
    (parseFloat(formData.totalAmount) || 0) +
    (parseFloat(formData.domesticExpenses) || 0) +
    (parseFloat(formData.overseasExpenses) || 0) +
    (parseFloat(formData.interExpenses) || 0) +
    (parseFloat(formData.airplaneTax) || 0) +
    (parseFloat(formData.totalRoom) || 0) +
    (parseFloat(formData.totalAllowance) || 0);

  return formData.all_money;
});

const newConfer = async () => {
  const result = await v$.value.$validate();

  if (result) {
    try {
      const dataForBackend = {
        user_id: formData.user_id,
        conf_times: formData.textOther1,
        conf_days: formData.textOther2,
        trav_dateStart: formData.travelStart,
        trav_dateEnd: formData.travelEnd,
        conf_research: formData.research,
        conf_name: formData.conferenceName,
        meeting_date: formData.meetingDate,
        meeting_venue: formData.meetingVenue,
        date_submit_organizer: formData.dateSubmitToOrganizer,
        argument_date_review: formData.argumentDateReview,
        last_day_register: formData.lastDayRegister,
        meeting_type: formData.meetingType,
        quality_meeting: formData.qualityMeeting,
        presenter_type: formData.radioAuth,
        time_of_leave: formData.timeLeave,
        location: formData.location,
        wos_2_leave: formData.wos,
        name_2_leave: formData.nameWos,
        withdraw: formData.withdraw,
        wd_100_quality: formData.quality100,
        wd_name_100: formData.name100,
        country_conf: formData.venue,
        num_register_articles: formData.numberArticles,
        regist_amount_1_article: formData.amount1article,
        total_amount: formData.totalAmount,
        domestic_expenses: formData.domesticExpenses,
        overseas_expenses: formData.overseasExpenses,
        travel_country: formData.location, //ดูตรงนี้
        inter_expenses: formData.interExpenses,
        airplane_tax: formData.airplaneTax,
        num_days_room: formData.numberDaysRoom,
        room_cost_per_night: formData.roomCostPerNight,
        total_room: formData.totalRoom,
        num_travel_days: formData.numTravelDays,
        daily_allowance: formData.dailyAllowance,
        total_allowance: formData.totalAllowance,
        all_money: formData.all_money,

        score_type: formData.score,
        sjr_score: formData.sjr,
        sjr_year: formData.sjrYear,
        hindex_score: formData.sjrhIndex || formData.hIndex,
        hindex_year: formData.hIndexYear,
        Citation: formData.Citation,
        score_result: formData.total.total,
        core_rank: formData.coreConf,

        type: formData.typeFile,
        full_page: formData.file1,
        date_published_journals: formData.inputFile2,
        published_journals: formData.file2,
        q_proof: formData.file3,
        call_for_paper: formData.file4,
        accepted: formData.file5,
        fee_receipt: formData.file6,
        fx_rate_document: formData.file7,
        conf_proof: formData.file8,
      };
      console.log("post confer: ", JSON.stringify(dataForBackend));
      const response = await api.post("/conference", dataForBackend, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      alert("บันทึกข้อมูลเรียบร้อยแล้ว");
      router.push("/allstatus");
    } catch (error) {
      console.log("Error saving code : ", error);

      alert("ไม่สามารถส่งข้อมูล โปรดลองอีกครั้งในภายหลัง");
    }
  } else {
    alert("โปรดกรอกข้อมูลให้ครบถ้วน และถูกต้อง");
  }
};
</script>

<template>
  <main class="tw-bg-indigo-500 tw-min-h-screen">
    <v-container class="extended right">
      <v-row>
        <v-col :cols="9">
          <s-card class="tw-my-2">
            <v-container>
              <p class="tw-text-sm tw-text-gray-600" v-html="record.mentionPrevious" />
              <p :class="{'tw-text-red-500 tw-font-bold': isImportantSection(record.section)}">
                {{ record.section }}
              </p>
              <p v-html="record.mention" />
              <p class="tw-text-gray-600" v-html="record.mentionNext" />
            </v-container>
          </s-card>
        </v-col>
        <v-col :cols="3" class="tw-fixed tw-top-0 tw-right-0">
          <s-card class="tw-my-2">
            <v-container class="extended right">
              <v-row dense>
                <v-col :cols="12">
                  <v-checkbox
                    v-model="form.actualParticipated"
                    dense
                    label="实际参与"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
                <template v-if="form.actualParticipated === 1">
                  <v-col :cols="12">
                    <v-text-field
                      v-model="form.specificProjects"
                      dense
                      label="具体项目"
                    />
                  </v-col>
                  <v-col :cols="12">
                    <v-text-field
                      v-model="form.subsidyAmounts"
                      dense
                      label="补助金额"
                    />
                  </v-col>
                  <v-col :cols="12">
                    <v-textarea
                      v-model="form.locationMentioned"
                      dense
                      clearable
                      :rows="2"
                      label="参与地区"
                    />
                  </v-col>
                </template>
                <v-col :cols="12">
                  <v-textarea
                    v-model="form.comment"
                    dense
                    :rows="1"
                    label="备注"
                  />
                </v-col>
              </v-row>
              <v-btn block color="accent" :loading="$fetchState.pending || loading" @click="submit">
                保存
              </v-btn>
            </v-container>
          </s-card>
          <s-card class="tw-my-2">
            <s-card-title>{{ record.title }}</s-card-title>
            <s-card-subtitle>{{ record.sourceYear }} · {{ record.industry }} · {{ record.actualControllerType }}</s-card-subtitle>
            <s-card-subtitle>
              <a :href="record.docLink || record.link" target="_blank">
                查看原文
              </a>
            </s-card-subtitle>
          </s-card>
          <v-btn block @click="checkProgress">
            查看我的进度
          </v-btn>
          <s-card class="tw-my-2">
            <v-container>
              <v-text-field
                v-model="form.codedBy"
                dense
                hide-details
                label="Coder"
              />
            </v-container>
          </s-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
// import { POSITION } from 'vue-toastification'
export default {
  data () {
    return {
      loading: true,
      record: {
        section: ''
      },
      form: {
        actualParticipated: 0,
        specificProjects: '',
        subsidyAmounts: '',
        locationMentioned: '',
        comment: '',
        codedBy: this.$route.params.name
      }
    }
  },
  async fetch () {
    try {
      this.record = await this.$api.bri.show('new/test/' + this.$route.params.name, {
        exclude: this.record?._id || ''
      })
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  },
  watch: {
    'form.actualParticipated': {
      handler (newVal) {
        if (newVal === 1 && this.form.locationMentioned.length < 1) {
          this.form.locationMentioned = this.record.locationMentioned || ''
        } else {
          this.form.locationMentioned = ''
        }
      }
    }
  },
  methods: {
    async submit () {
      // const name = this.record.stockName
      this.loading = true
      await this.$api.bri.update('test/' + this.record._id, {
        // ...this.record,
        ...this.form,
        specificProjects: this.form.specificProjects || '0',
        subsidyAmounts: this.form.subsidyAmounts || '0'
      })
      // this.$toast.success(`${name} 更新完成`, { position: POSITION.BOTTOM_RIGHT })
      this.form = {
        actualParticipated: 0,
        specificProjects: '',
        subsidyAmounts: '',
        locationMentioned: '',
        comment: '',
        codedBy: this.form.codedBy
      }
      this.$fetch()
    },
    isImportantSection (section) {
      if (typeof section !== 'string') { return false }
      const list = ['财务报告', '重要事项', '经营情况']
      for (const item of list) {
        if (section.includes(item)) { return true }
      }
      return false
    },
    checkProgress () {
      this.$toast.info('写完两百条页面会直接报错。加油！')
      // this.$api.bri.show(`coder/${this.form.codedBy}`).then((data) => {
      //   this.$toast.success(`${this.form.codedBy} 已完成 ${data} 条`)
      // })
      // this.$api.bri.show('coder/empty').then((data) => {
      //   this.$toast(`总共剩余 ${data} 条`)
      // })
    }
  }
}
</script>

<style lang="scss">
em {
  @apply tw-text-red-500 tw-font-bold tw-px-1;
  &.location {
    @apply tw-text-indigo-500;
  }
}
p {
  @apply tw-text-sm tw-font-serif;
}
</style>

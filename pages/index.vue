<template>
  <main class="tw-bg-indigo-500">
    <v-container class="extended right">
      <v-row>
        <v-col :cols="9">
          <v-container>
            <s-card class="tw-my-2">
              <v-container>
                <p class="tw-text-sm tw-text-gray-600" v-html="record.mentionPrevious" />
                <p :class="{'tw-text-red-500 tw-font-bold': isImportantSection(record.section)}">
                  {{ record.section }}
                </p>
                <p v-html="highlight(record.mention)" />
                <p class="tw-text-gray-600" v-html="record.mentionNext" />
              </v-container>
            </s-card>
          </v-container>
        </v-col>
        <v-col :cols="3">
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
                      :row="1"
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
      },
      form: {
        actualParticipated: 0,
        specificProjects: '',
        subsidyAmounts: '',
        locationMentioned: '',
        comment: '',
        codedBy: 'AY'
      }
    }
  },
  async fetch () {
    this.record = await this.$api.bri.show('new', {
      exclude: this.record?._id || ''
    })
    this.loading = false
  },
  mounted () {
    this.record.mention = this.highlight(this.record.mention)
    this.record.mentionPrevious = this.highlight(this.record.mentionPrevious)
    this.record.mentionNext = this.highlight(this.record.mentionNext)
  },
  methods: {
    highlight (text) {
      if (!text) { return '' }
      return text.replaceAll('一带一路', '<em>一带一路</em>')
    },
    async submit () {
      // const name = this.record.stockName
      this.loading = true
      await this.$api.bri.update(this.record._id, {
        ...this.record,
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
        codedBy: 'AY'
      }
      // this.$fetch()
    },
    isImportantSection (section) {
      const list = ['财务报告', '重要事项', '经营情况']
      for (const item of list) {
        if (section.includes(item)) { return true }
      }
      return false
    }
  }
}
</script>

<style lang="scss">
em {
  @apply tw-text-red-500;
}
p {
  @apply tw-text-sm tw-font-serif;
}
</style>

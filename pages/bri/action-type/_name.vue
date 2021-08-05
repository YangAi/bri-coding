<template>
  <main class="tw-bg-indigo-500 tw-min-h-screen">
    <v-container fluid>
      <v-row>
        <v-col :cols="12" :md="9">
          <s-card class="tw-my-2">
            <s-card-title>{{ record.title }}</s-card-title>
            <s-card-subtitle>{{ record.sourceYear }} · {{ record.industry }} · {{ record.actualControllerType }}</s-card-subtitle>
            <s-card-subtitle>
              <a :href="record.docLink || record.link" target="_blank">
                查看原文
              </a>
            </s-card-subtitle>
          </s-card>
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
          <s-card>
            <v-container class="tw-flex">
              <v-btn
                v-if="!form.locationMentioned && record.locationMentionedAuto"
                @click="form.locationMentioned = record.locationMentionedAuto"
              >
                填充地区数据
              </v-btn>
              <v-textarea
                v-model="form.locationMentioned"
                hide-details
                clearable
                :rows="1"
                label="参与地区"
              />
            </v-container>
            <v-container>
              <v-chip-group v-model="actionType" multiple column>
                <v-chip
                  v-for="item of actionsList"
                  :key="item"
                  :value="item"
                  filter
                  outlined
                  style="min-width: 148px"
                >
                  {{ item }}
                </v-chip>
                <v-divider class="tw-min-w-full tw-bg-transparent" />
                <v-chip
                  v-for="item of typesList"
                  :key="item"
                  :value="item"
                  filter
                  outlined
                  style="min-width: 148px"
                >
                  {{ item }}
                </v-chip>
              </v-chip-group>
              <p class="caption">
                * 左侧的数据最好一起检查下，统一下尺度
              </p>
            </v-container>
            <v-container>
              <v-btn
                v-if="!confirmS"
                :loading="loading"
                block
                outlined
                color="accent"
                @click="confirmS = true"
              >
                保存
              </v-btn>
              <v-btn v-else block color="accent" :loading="$fetchState.pending || loading" @click="submit(false);confirmS = false">
                确认提交
              </v-btn>
            </v-container>
          </s-card>
        </v-col>
        <v-col :cols="12" :md="3">
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
                  <v-textarea
                    v-model="form.specificProjects"
                    hide-details
                    :rows="2"
                    label="具体项目"
                  />
                </v-col>
                <v-col :cols="12">
                  <v-text-field
                    v-model="form.subsidyAmounts"
                    hide-details
                    label="补助金额"
                  />
                </v-col>
                <v-col :cols="12">
                  <p class="caption">
                    * 选择后会清空上方的所有数据
                  </p>
                  <v-btn
                    v-if="!confirm"
                    :loading="loading"
                    block
                    text
                    color="red"
                    @click="confirm = true"
                  >
                    公司未实际参与
                  </v-btn>
                  <v-btn
                    v-else
                    :loading="loading"
                    block
                    dark
                    color="red"
                    @click="submit(true); confirm = false"
                  >
                    确定提交
                  </v-btn>
                  <v-textarea
                    v-model="form.comment"
                    hide-details
                    :rows="1"
                    label="备注"
                  />
                  <v-checkbox
                    v-model="form.questionMark"
                    dense
                    label="不确定"
                    :true-value="1"
                    :false-value="0"
                  />
                </v-col>
              </v-row>
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
                v-model="form.typeCodedBy"
                dense
                hide-details
                label="Coder"
              />
            </v-container>
          </s-card>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      :loading="$fetchState.pending || loading"
      block
      fab
      dark
      color="blue"
      class="tw-fixed  tw-bottom-2 tw-left-2"
      @click="submit(false);"
    >
      <v-icon>mdi-check</v-icon>
    </v-btn>
    <v-btn
      :loading="loading"
      block
      fab
      dark
      color="red"
      class="tw-fixed  tw-bottom-2 tw-right-2"
      @click="submit(true);"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </main>
</template>

<script>
// import { POSITION } from 'vue-toastification'
export default {
  data () {
    return {
      timeout: undefined,
      loading: true,
      record: {
        section: ''
      },
      actionsList: [
        '营销/推广',
        '承包/参与项目',
        '海外分公司/办事处',
        '海外工厂/生产基地',
        '举办/参加活动',
        '产品销售/供应商',
        '成立新部门',
        '合作/战略合作',
        '科研',
        '投资 -- 合资',
        '投资 -- 并购',
        '投资',
        '文化/科技交流',
        '援助',
        '采购',
        '设计',
        '专业服务',
        '获奖',
        '资质认证/专利/商标',
        '政府补贴',
        '物流',
        '金融支持',
        '工业园区',
        '海外融资',
        '参与协会/机构',
        '人才引进',
        '国内分支机构',
        '特别分类',
        '地产'
      ],
      typesList: [
        '基础设施',
        '能源',
        '矿产',
        '交通',
        '软件和网络项目',
        '教育',
        '旅游',
        '生物医疗',
        '农业',
        '其他'
      ],
      actionType: [],
      confirmS: false,
      confirm: false,
      form: {
        actualParticipated: 0,
        specificProjects: '',
        subsidyAmounts: '',
        locationMentioned: '',
        comment: '',
        typeCodedBy: this.$route.params.name,
        questionMark: 0
      }
    }
  },
  async fetch () {
    try {
      this.record = await this.$api.briActionType.show('new', {
        exclude: this.record?._id || ''
      })
      this.actionType = this.actionType ? [] : this.record.actionType.split('、').filter(item => item !== '其他')
      this.form = {
        actualParticipated: this.record.actualParticipated,
        specificProjects: this.record.specificProjects,
        subsidyAmounts: this.record.subsidyAmounts,
        locationMentioned: this.record.locationMentionedAuto,
        comment: this.record.comment,
        typeCodedBy: this.$route.params.name,
        // questionMark: this.record.questionMark || 0
        questionMark: 0
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  },
  methods: {
    async submit (empty = false) {
      // const name = this.record.stockName
      this.loading = true
      if (empty === true) {
        this.actionType = []
        this.form = {
          actualParticipated: 0,
          specificProjects: '',
          subsidyAmounts: '',
          locationMentioned: '',
          comment: '',
          codedBy: this.form.codedBy,
          typeCodedBy: this.form.codedBy,
          questionMark: 0
        }
      }
      console.log(this.form)
      delete this.record.locationMentionedAuto
      await this.$api.briActionType.update(this.record._id, {
        ...this.record,
        ...this.form,
        actualParticipated: 1,
        specificProjects: this.form.specificProjects || '0',
        subsidyAmounts: this.form.subsidyAmounts || '0',
        actionType: this.actionType.filter(item => item.length > 0).join('、')
      })
      // this.$toast.success(`${name} 更新完成`, { position: POSITION.BOTTOM_RIGHT })
      this.form = {
        actualParticipated: 0,
        specificProjects: '',
        subsidyAmounts: '',
        locationMentioned: '',
        comment: '',
        typeCodedBy: this.$route.params.name
      }
      window.scrollTo(0, 0)
      this.$fetch()
      this.setTimeoutAlert()
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
      this.$api.briActionType.show(`coder/${this.form.typeCodedBy}`).then((data) => {
        this.$toast.success(`${this.form.typeCodedBy} 已完成 ${data} 条`)
      })
      this.$api.briActionType.show('coder/empty').then((data) => {
        this.$toast(`总共剩余 ${data} 条`)
      })
    },
    setTimeoutAlert () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$router.go(0)
        this.$toast('超时，请重新加载')
      }, 297 * 1000)
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

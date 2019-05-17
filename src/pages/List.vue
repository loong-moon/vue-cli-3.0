<template>
    <div class="hero-list">
        <h1>列表页</h1>
        <div class="mt20">
            <el-button type="success" @click="openAddHero">添加英雄</el-button>
        </div>

        <el-row class="mt30" :gutter="20">
            <el-col :span="2" v-for="item in heroList" :key="item.objectId">
                <div class="hero-item">
                    <div class="hero-img"></div>
                    <div class="hero-name">{{item.name}}</div>
                </div>
            </el-col>
        </el-row>

        <el-dialog
                title="添加英雄"
                :visible.sync="dialogVisible"
                width="600px">
            <el-form :model="model" label-width="90px" ref="templateForm">
                <el-form-item label="名字：" prop="name">
                    <el-input v-model="model.name"></el-input>
                </el-form-item>
                <el-form-item label="性别：" prop="sex">
                    <el-radio-group v-model="model.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="分类：" prop="class">
                    <el-select class="w100" v-model="model.class" placeholder="请选择">
                        <el-option
                                v-for="item in classOptions"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="技能：" prop="skill">
                    <el-input v-model="model.skill"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button type="primary" size="small" @click="addHero">确定</el-button>
                <el-button size="small" @click="dialogVisible = false">取消</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name: 'About',
        data () {
            return {
                dialogVisible: false,
                model: {
                    name: '',
                    sex: '',
                    class: '',
                    skill: '',
                },

                heroList: [],

                classOptions: [{
                    value: '战士',
                }, {
                    value: '法师',
                }, {
                    value: '射手',
                }, {
                    value: '坦克',
                }, {
                    value: '刺客',
                }]
            }
        },
        created () {
            this.getHeroList()
        },
        methods: {
            // 打开
            openAddHero () {
                this.dialogVisible = true
            },

            // 添加英雄
            async addHero () {
                const result = await this.$api.addHero(this.model)
                // console.log(result, '添加英雄')
                if (result.status === 201) {
                    this.dialogVisible = false
                }
            },

            // 获取列表
            async getHeroList () {
                const result = await this.$api.fetchHeroList()
                // console.log(result, '获取列表')
                if (result.status === 200) {
                    this.heroList = result.data.results
                }
            },
        }
    }
</script>

<style lang="scss">
.hero-list {
    width: 1200px;
    margin: 0 auto;
}
.hero-item {
    margin-bottom: 20px;
    .hero-img {
        height: 80px;
        background-color: $black;
    }
    .hero-name {
        text-align: center;
        margin-top: 10px;
    }
}
</style>

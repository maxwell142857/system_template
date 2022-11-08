<template>
    <div class="container">
        <el-tabs v-model="message">
            <el-tab-pane :label="`Model1`" name="first">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Introduction</span>
                                </div>
                            </template>
                            <span>
                                balabalabala
                            </span>
                        </el-card>
                    </el-col>
                    <el-col :span="10">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Performance</span>
                                </div>
                            </template>
                            CPU usage:
                            <el-progress :percentage="21.3" color="#42b983"></el-progress>
                            GPU usage:
                            <el-progress :percentage="15.1" color="#42b983"></el-progress>
                            Memory usage:
                            <el-progress :percentage="56.1" color="#f1e05a"></el-progress>
                        </el-card>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane :label="`Model2`" name="second">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Introduction</span>
                                </div>
                            </template>
                            <span>
                                balabalabala
                            </span>
                        </el-card>
                    </el-col>
                    <el-col :span="10">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Performance</span>
                                </div>
                            </template>
                            CPU usage:
                            <el-progress :percentage="21.3" color="#42b983"></el-progress>
                            GPU usage:
                            <el-progress :percentage="15.1" color="#42b983"></el-progress>
                            Memory usage:
                            <el-progress :percentage="56.1" color="#f1e05a"></el-progress>
                        </el-card>
                    </el-col>
                </el-row>

            </el-tab-pane>
            <el-tab-pane :label="`Model3`" name="third">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Introduction</span>
                                </div>
                            </template>
                            <span>
                                balabalabala
                            </span>
                        </el-card>
                    </el-col>
                    <el-col :span="10">
                        <el-card shadow="hover" class="mgb20" style="height: 200px">
                            <template #header>
                                <div class="clearfix">
                                    <span>Model Performance</span>
                                </div>
                            </template>
                            CPU usage:
                            <el-progress :percentage="21.3" color="#42b983"></el-progress>
                            GPU usage:
                            <el-progress :percentage="15.1" color="#42b983"></el-progress>
                            Memory usage:
                            <el-progress :percentage="56.1" color="#f1e05a"></el-progress>
                        </el-card>
                    </el-col>
                </el-row>

            </el-tab-pane>
        </el-tabs>
    </div>
    <div style="margin-top: 20px;">
        <el-card shadow="hover" class="mgb20" style="height: 260px">
            <div style="display: flex;flex-direction:row;justify-content: space-between;">
                <el-select placeholder="Model" class="handle-select mr10" style="width: 100px;">
                    <el-option key="1" label="Model"></el-option>
                    <el-option key="2" label="Mode2"></el-option>
                    <el-option key="3" label="Mode3"></el-option>
                    <el-option key="4" label="Mode4"></el-option>
                </el-select>
                <el-input placeholder="Threshold1" style="width: 100px;"></el-input>
                <el-input placeholder="Threshold2" style="width: 100px;"></el-input>
                <el-input placeholder="Threshold3" style="width: 100px;"></el-input>
            </div>
<div>
    <img src="../assets/img/risk.png" style="margin-left: 300px;">
</div>
        </el-card>
    </div>
</template>

<script setup lang="ts" name="tabs">
import { ref, reactive } from 'vue';

const message = ref('first');
const state = reactive({
    unread: [
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        },
        {
            date: '2018-04-19 21:00:00',
            title: '今晚12点整发大红包，先到先得'
        }
    ],
    read: [
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }
    ],
    recycle: [
        {
            date: '2018-04-19 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }
    ]
});

const handleRead = (index: number) => {
    const item = state.unread.splice(index, 1);
    state.read = item.concat(state.read);
};
const handleDel = (index: number) => {
    const item = state.read.splice(index, 1);
    state.recycle = item.concat(state.recycle);
};
const handleRestore = (index: number) => {
    const item = state.recycle.splice(index, 1);
    state.read = item.concat(state.read);
};
</script>

<style>
.message-title {
    cursor: pointer;
}

.handle-row {
    margin-top: 30px;
}
</style>

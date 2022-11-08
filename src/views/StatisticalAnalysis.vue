<template>
    <div>
        <el-card shadow="hover" class="mgb20" style="height: 450px" v-model="showIt">
            <el-button type="primary" :icon="Search" @click="change()">filter</el-button>
            <div v-show="showIt">
                <el-table :data="table1Data" border class="table" ref="multipleTable"
                    :header-cell-style="{ color: '#606266' }">
                    <el-table-column prop="name" label="Name" align="center" width="100"></el-table-column>
                    <el-table-column prop="misscnt" label="Missing Value Number" align="center" width="200"></el-table-column>
                    <el-table-column prop="missrate" label="Missing Rate" align="center" width="200"></el-table-column>
                    <el-table-column prop="psi" label="PSI" align="center" width="60"></el-table-column>
                    <el-table-column prop="woe" label="WOE" align="center" width="60"></el-table-column>
                    <el-table-column prop="iv" label="IV" align="center" width="60"></el-table-column>
                </el-table>
                <div class="pagination">
                    <el-pagination background layout="total, prev, pager, next" :current-page="index1" :page-size="50"
                        :total="1000" @current-change="handlePageChange1"></el-pagination>
                </div>
            </div>
            <div v-show="!showIt">
                <el-scrollbar style="width:100%">
                    <el-table :data="table1Data" border class="table" ref="multipleTable"
                        :header-cell-style="{ color: '#606266' }">
                        <el-table-column prop="name" label="Name" align="center" width="100"></el-table-column>
                        <el-table-column prop="misscnt" label="Missing Value Number" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="missrate" label="Missing Rate" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="psi" label="PSI" align="center" width="60"></el-table-column>
                        <el-table-column prop="woe" label="WOE" align="center" width="60"></el-table-column>
                        <el-table-column prop="iv" label="IV" align="center" width="60"></el-table-column>
                        <el-table-column prop="misscnt" label="Maximum" align="center" width="100"></el-table-column>
                        <el-table-column prop="missrate" label="Minimum" align="center" width="100"></el-table-column>
                        <el-table-column prop="psi" label="Mean" align="center" width="100"></el-table-column>
                        <el-table-column prop="woe" label="25%quantile" align="center" width="120"></el-table-column>
                        <el-table-column prop="iv" label="50%quantile" align="center" width="120"></el-table-column>
                        <el-table-column prop="iv" label="75%quantile" align="center" width="120"></el-table-column>
                        <el-table-column prop="iv" label="Mean in Default Case" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="iv" label="Mean in Normal Case" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="iv" label="Variance in Default Case" align="center" width="200">
                        </el-table-column>
                        <el-table-column prop="iv" label="Variance in Normal Case" align="center" width="200">
                        </el-table-column>
                    </el-table>
                </el-scrollbar>

                <div class="pagination">
                    <el-pagination background layout="total, prev, pager, next" :current-page="index1" :page-size="50"
                        :total="200" @current-change="handlePageChange1"></el-pagination>
                </div>
            </div>

        </el-card>


    </div>
</template>

<script setup lang="ts" name="StatisticalAnalysis">
import Schart from 'vue-schart';
import imgurl from '../assets/img/img.jpg';
import { Delete, Edit, Search, Plus } from '@element-plus/icons-vue';
import { getDataPreview } from '../api/index'
import { ref } from 'vue';
var showIt = ref(true)
var index1 = ref(1)
interface Table1Item {
    id: string;
    iv: string;
    misscnt: string;
    missrate: string;
    name: string;
    psi: string;
    woe: string;
}
const table1Data = ref<Table1Item[]>([]);
const get1 = () => {
    // getDataPreview().then(res => {
    //     table1Data.value = res.data.result
    // });

};
get1();
const change = () => {
    showIt.value = !showIt.value;
};
const handlePageChange1 = () => {
    index1.value = index1.value++
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
</style>

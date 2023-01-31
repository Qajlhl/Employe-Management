<template>
    <div class="container">
        <div class="content">
            <a-space>
                <a-form :model="form" layout="inline">
                    <a-form-item>
                        <a-space>
                            <!-- 按照关键字查找用户信息 -->
                            <a-button type="primary">
                                <template #icon>
                                    <icon-plus />
                                </template>
                                新增主菜单
                            </a-button>
                            <a-button type="primary" status="success">
                                <template #icon>
                                    <icon-plus />
                                </template>
                                新增子菜单
                            </a-button>
                        </a-space>
                    </a-form-item>
                </a-form>
            </a-space>

            <a-table :data="data">
                <template #columns>
                    <a-table-column title="#">
                        <template #cell="{ rowIndex }">
                            {{ rowIndex + 1 }}
                        </template>
                    </a-table-column>
                    <a-table-column title="菜单名" data-index="name"></a-table-column>
                    <a-table-column title="图标" data-index="icon"></a-table-column>
                    <a-table-column title="地址" data-index="url"></a-table-column>
                    <a-table-column title="操作" data-index="action">
                        <template #cell="record">
                            <a-space>
                                <a-button status="danger">
                                    <template #icon>
                                        <a-popconfirm content="是否确定删除" type="warning">
                                            <icon-delete />
                                        </a-popconfirm>
                                    </template>
                                </a-button>

                                <a-button status="warning">
                                    <template #icon>
                                        <icon-delete />
                                    </template>
                                </a-button>
                            </a-space>
                        </template>
                    </a-table-column>
                </template>
            </a-table>
        </div>
        <div class="form">

        </div>
    </div>
</template>
<script lang="ts" setup>
import { IconPlus, IconEdit, IconDelete } from '@arco-design/web-vue/es/icon';
import { computed, onMounted, reactive } from 'vue';
import menusStore from './store';
const menustore = menusStore();
interface Iform {
    username: string,
}
const form = reactive<Iform>({
    username: " ",
})
onMounted(() => {
    menustore.fetchData();
});
const data = computed(() => {
    return menustore.list;
});
</script>

<style lang="less" scoped>
.content {
    padding: 20px 0;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
}

// 样式穿透
:deep(.arco-form-item-content-flex) {
    justify-content: flex-end;
}
</style>
<template>
  <div class="container">
    <div class="content">
      <a-space>
        <a-button type="primary" @click="add">
          <template #icon>
            <icon-plus />
          </template>
          新增角色
        </a-button>
      </a-space>

      <a-table :data="data" :pagination="pagination" page-position="bottom" @page-change="onPageChange"
        @page-size-change="onPageSizeChange">
        <template #columns>
          <a-table-column title="#">
            <template #cell="{ rowIndex }">
              {{ rowIndex + 1 }}
            </template>
          </a-table-column>
          <a-table-column title="插入时间" data-index="insertTime">
            <template #cell="{ record }">
              {{ new Date(record.insertTime).toLocaleString() }}
            </template>
          </a-table-column>
          <a-table-column title="角色名" data-index="name"></a-table-column>
          <a-table-column title="操作" data-index="action">
            <template #cell="record">
              <a-space>
                <a-button status="danger">
                  <template #icon>
                    <a-popconfirm content="是否确定删除" type="warning" @ok="deleteRole(record)">
                      <icon-delete />
                    </a-popconfirm>
                  </template>
                </a-button>

                <a-button status="warning">
                  <template #icon>
                    <icon-edit @click="edit(record)" />
                  </template>
                </a-button>
              </a-space>
            </template>
          </a-table-column>
        </template>
      </a-table>
    </div>

    <div class="forms">
      <a-modal v-model:visible="visible" :footer="false" @cancel="handleCancel" :title="form.id ? '修改用户' : '新增用户'">
        <a-form :model="form" @submit="handleSubmit" :rules="rules">
          <a-form-item field="name" label="角色名">
            <a-input placeholder="请输入角色名..." v-model="form.name"></a-input>
          </a-form-item>

          <a-form-item>
            <a-button html-type="submit" type="primary">提交</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { IconPlus, IconDelete, IconEdit } from '@arco-design/web-vue/es/icon';
import { computed, onMounted, reactive, ref } from 'vue';
import { Message, PaginationProps, TableColumnData, TableData } from '@arco-design/web-vue';
import roleStore from './store';
import { FieldRule, ValidatedError } from '@arco-design/web-vue/es/form';
import { DeleteRole, InsertRole, UpdateRole } from '@/api/roless';
const rolestore = roleStore();
interface Irow {
  record: TableData;
  column: TableColumnData;
  rowIndex: number;
}
onMounted(() => {
  rolestore.fetchData();
})
const data = computed(() => {
  return rolestore.list;
});
const pagination = computed<PaginationProps>(() => {
  return {
    total: rolestore.page.totalElements,
    current: rolestore.page.pno,
    pageSize: rolestore.page.psize,
    pageSizeOptions: [10, 20, 30, 40],
    showTotal: true,
    showJumper: true,
    showPageSize: true,
  } as PaginationProps;
})
const page = computed(() => {
  return rolestore.page;
})
const onPageChange = (pno: number) => {
  rolestore.setPage({
    pageInfo: {
      ...page.value,
      pno
    }
  });
  //重新获取数据
  rolestore.fetchData();
};
const onPageSizeChange = (psize: number) => {
  rolestore.setPage({
    pageInfo: {
      ...page.value,
      psize,
      pno: 1
    }
  });
  rolestore.fetchData();
};
const visible = ref<boolean>(false);
const add = () => {
  visible.value = true;
};
const form = reactive<{
  name: string,
  id?: string | number
}>({
  name: '',
});
async function handleSubmit({
  values,
  errors
}: {
  values: Record<string, any>,
  errors: Record<string, ValidatedError> | undefined
}) {
  if (errors) {
    console.log(errors);
    return;
  }
  if (values.id) {
    //有id值 修改用户
    let { code, msg } = await UpdateRole(values as { name: string });
    if (code != 200) {
      Message.error(msg);
      return;
    }
    Message.success(msg);
  }
  else {
    let { code, msg } = await InsertRole(values as { name: string });
    if (code != 200) {
      Message.error(msg);
      return;
    }
    Message.success(msg);
  }
  //表单data重置
  rolestore.fetchData();
  //清空对话框
  handleCancel();
  //关闭对话框
  visible.value = false;
  
}
//删除角色
async function deleteRole(row: Irow) {
  if (row.record.id == '1') {
    Message.warning({
      content: '系统管理员不能删除!'
    })
    return;
  }
  else {
    console.log(row.record.id);
    let res = await DeleteRole(row.record.id);
    try {
      if (res.code == 200) {
        Message.success(res.msg);
        rolestore.fetchData();
        handleCancel();
      }
    } catch (errors) {
      console.log(errors);
    }

  }
}
//修改角色
async function edit(row: Irow) {
  if (row) {
    form.name = row.record.name;
    form.id = row.record.id;
    visible.value = true;
  }
}
const handleCancel = () => {
  visible.value = false;
  //重置表单数据
  form.name = '';
  form.id = undefined;
};

//表单验证规则
const rules: Record<string, FieldRule[]> = {
  name: [{
    required: true,
    message: "用户名必须输入"
  }]
}
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
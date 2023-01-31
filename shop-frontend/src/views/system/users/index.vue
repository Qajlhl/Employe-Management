<template>
    <div class="container">
        <div class="content">
            <a-space direction="vertical" fill>
                <a-form :model="form" layout="inline">
                    <a-form-item field="username">
                        <a-input v-model="form.username" placeholder="请输入..." />
                    </a-form-item>
                    <a-form-item>
                        <a-space>
                            <!-- 按照关键字查找用户信息 -->
                            <a-button type="primary" @click="onSearch">
                                <template #icon>
                                    <icon-search />
                                </template>
                                查询
                            </a-button>
                            <a-button type="primary" status="success" @click="Addone">
                                <template #icon>
                                    <icon-plus />
                                </template>
                                新增
                            </a-button>
                        </a-space>
                    </a-form-item>
                </a-form>

                <!-- 表格信息 -->
                <a-table :data="data" stripe :loading="loading" :pagination="pagination" page-position="bottom"
                    @page-change="onPageChange" @page-size-change="onPageSizeChange">
                    <template #columns>
                        <!-- 序号 -->
                        <a-table-column title="#">
                            <!-- cell 单元格 -->
                            <template #cell="{ rowIndex }">
                                {{ rowIndex + 1 }}
                            </template>
                        </a-table-column>

                        <!-- 用户名 -->
                        <a-table-column title="用户名" data-index="username"></a-table-column>

                        <!-- 头像 -->
                        <a-table-column title="头像">
                            <template #cell="{ record }">
                                <a-avatar>
                                    <img :src="record.face || DefaultAavatar" alt="avatar">
                                </a-avatar>
                            </template>
                        </a-table-column>

                        <a-table-column title="密码" data-index="password"></a-table-column>
                        <a-table-column title="昵称" data-index="nickname"></a-table-column>
                        <a-table-column title="部门" data-index="deptName">

                        </a-table-column>
                        <a-table-column title="角色" data-index="roleName">
                            <template #cell="{ record }">
                                <a-tag :color="record.roleId == 1 ? '#ff5722' : '#168cff'">
                                    {{ findRole(record.roleId) }}
                                </a-tag>
                            </template>
                        </a-table-column>
                        <a-table-column title="创建时间" data-index="insertTime">
                            <template #cell="{ record }">
                                {{ new Date(record.insertTime).toLocaleDateString() }}
                            </template>
                        </a-table-column>
                        <a-table-column title="操作" data-index="action">
                            <template #cell="{ record }">
                                <a-space>
                                    <!-- 删除操作 -->
                                    <a-button status="danger">
                                        <template #icon>
                                            <a-popconfirm content="是否确定删除" type="warning" @ok="onDelete(record.id)">
                                                <icon-delete />
                                            </a-popconfirm>
                                        </template>
                                    </a-button>

                                    <!-- 编辑操作 -->
                                    <a-button status="warning">
                                        <template #icon>
                                            <icon-edit @click="upDate(record)" />
                                        </template>
                                    </a-button>
                                </a-space>
                            </template>
                        </a-table-column>
                    </template>


                    <!-- 序号 -->
                    <!-- <template #Index = " { rowIndex } ">
                        {{ rowIndex +1 }}
                    </template> -->


                    <!-- 操作 -->
                    <!-- <template #action = "row">
                        <a-space>
                            删除操作
                            <a-button status="danger">
                                <template #icon>
                                    <icon-delete/>
                                </template>
                            </a-button>

                            编辑操作
                            <a-button status="warning" @click="upDate(row)">
                                <template #icon>
                                    <icon-edit/>
                                </template>
                            </a-button>
                        </a-space>
                    </template> -->

                </a-table>
            </a-space>
        </div>
        <div id="form">
            <a-modal v-model:visible="visible" :title="FORM.id ? '编辑用户' : '新增用户'" :footer="false" @cancel="handleCancel"
                ok-text="新增" cancel-text="取消" @before-open="getRoleId">
                <a-form :model="FORM" ref="modelForm" :rules="FormRules" @submit="okSubmit">
                    <!-- field 字段名称    label 显示在主屏幕上的字符-->
                    <a-form-item field="username" label="账号">
                        <a-input v-model="FORM.username" placeholder="请输入账号..." />
                    </a-form-item>
                    <a-form-item field="nickname" label="用户名">
                        <a-input v-model="FORM.nickname" placeholder="请输入用户名..." />
                    </a-form-item>
                    <a-form-item field="password" label="密码">
                        <a-input v-model="FORM.password" placeholder="请输入密码..." />
                    </a-form-item>
                    <a-form-item field="roleId" label="角色">
                        <a-select v-model="FORM.roleId">
                            <a-option v-for="items in roles" :key="items.id" :value="items.id"> {{ items.name }}
                            </a-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item field="deptId" label="部门">
                        <a-select v-model="FORM.deptId">
                            <a-option v-for="items in depts" :key="items.id" :value="items.id"> {{ items.name }}
                            </a-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="头像">
                        <a-upload list-type="picture-card" image-preview @success="onSuccess"
                            :custom-request="RequestByMe" :data="{ folder: 'face' }" name="file"
                            action="/api/v1/file/upload" accept="image/*" :limit="1" tip="头像上传"
                            :on-before-remove="onRemove" @exceed-limit="OverLimit"
                            :headers="{ 'Authorization': `Bearer ${token}` }" v-model:file-list="filelist"></a-upload>
                    </a-form-item>
                    <a-form-item>
                        <a-button html-type="submit" type="primary">新增</a-button>
                    </a-form-item>
                </a-form>
            </a-modal>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import userStore from './store';
import { TableData, TableColumnData, PaginationProps, Message, FileItem, RequestOption } from '@arco-design/web-vue';
import DefaultAavatar from '@/assets/logo.png';
import { computed } from 'vue';
import { AddUsers, deleteUserById, IUser, updateUser } from '@/api/users';
import { FieldRule, FormInstance, ValidatedError } from '@arco-design/web-vue/es/form';
import { getAllRoleId } from '@/api/roless';
import { getAllDepts } from '@/api/depts';
import { getToken } from '@/utils/auth';
import { IconSearch, IconPlus, IconDelete, IconEdit } from '@arco-design/web-vue/es/icon';

const token = getToken();
//接口
interface Iform {
    username: string;
}
interface Irow {
    record: TableData;
    column: TableColumnData;
    rowIndex: number;
}
const form = reactive<Iform>({
    username: " ",
});
// 定义表单数据对象
const FORM = reactive<{
    username: string,
    password: string,
    nickname: string,
    face: string,
    roleId: number | string,
    deptId: number | string,
    id?: string | number
}>({
    username: '',
    password: '',
    nickname: '',
    face: '',
    roleId: '',
    deptId: ''
});
const filelist = ref<FileItem[]>([]);
//定义数据列
// const columns = [
//     {
//         title: '#',
//         slotName: 'Index'//索引属性名
//     },
//     {
//         title: '用户名',
//         dataIndex: 'username'//索引属性名
//     },
//     {
//         title: '密码',
//         dataIndex: 'password'
//     },

//     {
//         title: '部门',
//         dataIndex: 'deptName'
//     },
//     {
//         title: '昵称',
//         dataIndex: 'nickname'//索引属性名
//     },
//     {
//         title: '创建时间',
//         dataIndex: 'insertTime'//索引属性名
//     },
//     {
//         title: '角色',
//         dataIndex: 'roleId'//索引属性名
//     },
//     {
//         title: '操作',
//         slotName: 'action'//索引属性名
//     },
// ];

//编辑事件
function upDate(row?: IUser) {
    visible.value = true;
    //编辑操作
    if (row) {
        //展示用户的信息
        FORM.id = row.id;
        FORM.username = row.username;
        FORM.nickname = row.nickname;
        FORM.password = row.password;
        FORM.roleId = row.roleId;
        FORM.deptId = row.deptId;
        FORM.face = row.face;

        if (row.face) {
            filelist.value.push({
                uid: Date.now() + '',
                url: row.face,
                name: row.face.slice(row.face.lastIndexOf('/') + 1),
            })
        }
    }
};

const userstore = userStore();
//获取分页数据
onMounted(async () => {
    await userstore.fetchRoles();
    userstore.fetchData(form.username);
});

const data = computed(() => {
    return userstore.list;
});


const loading = computed(() => {
    return userstore.loading;
});
//搜索
const onSearch = () => {
    userstore.fetchData(form.username);
};
//分页信息
const page = computed(() => {
    return userstore.page;
})
//分页管理
const pagination = computed<PaginationProps>(() => {
    return {
        total: userstore.page.totalElements,
        current: userstore.page.pno,
        pageSize: userstore.page.psize,
        pageSizeOptions: [10, 20, 30, 40],
        showTotal: true,
        showJumper: true,
        showPageSize: true,
    } as PaginationProps;
});
//页号发生变化
function onPageChange(pno: number) {
    userstore.setPage({
        pageInfo: {
            ...page.value,
            pno
        }
    });
    //重新获取数据
    userstore.fetchData(form.username);
};
//修改每页显示条数
const onPageSizeChange = (psize: number) => {
    userstore.setPage({
        pageInfo: {
            ...page.value,
            psize,
            pno: 1
        }
    })
};

async function onDelete(row: number | string) {
    // console.log(row.record.id);
    if (row === 1) {
        //超级管理员
        Message.warning("超级管理员无法删除");
        return;
    }
    try {
        let res = await deleteUserById(row);
        // console.log(res);
        //重新获取数据
        userstore.fetchData(form.username);
        Message.success(res.msg);
    } catch (error) {
        Message.error('删除失败!');
    }
};
// 点击新增按钮触发的事件
function Addone() {
    visible.value = true;
};
const visible = ref<boolean>(false);
const modelForm = ref<FormInstance | null>(null);

// 点击取消按钮触发的事件
const handleCancel = () => {
    visible.value = false;
    // 点击取消重置表单数据
    modelForm.value?.resetFields();
    filelist.value = [];
    FORM.id = undefined;
};
//定义角色值的响应式数据
interface IRole {
    id: number | string;
    name: string;
}
interface IDept {
    id: number | string;
    name: string;
}
const roles = ref<IRole[]>([]);
const depts = ref<IDept[]>([]);
//对话框打开之前获取所有角色信息
function getRoleId() {
    getAllRoleId().then((res) => {
        if (res.code == 200) {
            roles.value = res.data.list;
        }
        else return;
        //console.log(res);
    });
    getAllDepts().then((res) => {
        if (res.code == 200) {
            depts.value = res.data.list;
        }
        else return;
        //console.log(res);
    })
};

// 表单验证规则
const FormRules: Record<string, FieldRule[]> = {
    //对账号进行验证  字段名username作为FormRules的属性值
    username: [{
        required: true,
        message: '账号必须填写'
    }],
    password: [{
        required: true,
        message: '密码必须填写'
    }]
};
//用户点击提交时触发的事件
async function okSubmit({ values, errors }: { values: Record<string, any>; errors: Record<string, ValidatedError> | undefined }) {
    if (errors) {
        return;
    } else {
        if (!values.id) {
            //发送新增用户请求
            let res = await AddUsers(values as IUser);
            if (res.code == 200) {
                clear(res.msg);
            } else {
                Message.error("网络超时！请稍后再试");
            }
        }else{
            console.log(values);
            let {msg,code} = await updateUser(values as IUser);
            if(code == 200){
                clear(msg);
            }else {
                Message.error("网络超时！请稍后再试");
            }
        }
    }
};
const clear = (msg: string) => {
    //表单数据重置
    modelForm.value?.resetFields();
    //关闭对话框
    visible.value = false;
    //更新表格数据
    userstore.fetchData(form.username);
    //清空face值
    FORM.face = "";
    filelist.value = [];
    Message.success(msg);
}
//头像上传成功触发的事件
const onSuccess = (fileItem: FileItem) => {
    //从后台获取成功的头像给表单数据.face
    FORM.face = fileItem.response?.data?.url;
    //console.log(fileItem);
};
//自定义上传请求
const RequestByMe = (option: RequestOption) => {
    const { onProgress, onError, onSuccess, fileItem, name = 'file', headers = {}, action, data } = option
    const xhr = new XMLHttpRequest();
    if (xhr.upload) {
        xhr.upload.onprogress = function (event) {
            let percent = 0;
            if (event.total > 0) {
                // 0 ~ 1
                percent = event.loaded / event.total;
            }
            onProgress(percent, event);
        };
    }
    xhr.onerror = function error(e) {
        onError(e);
    };
    xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
            return onError(xhr.responseText);
        }
        onSuccess(JSON.parse(xhr.response));
    };

    const formData = new FormData(); //表单数据
    formData.append(name as string, fileItem.file as Blob);
    //附加的请求信息
    for (var key in data) {
        formData.append(key, (data as Record<string, string>)[key]);
    }
    xhr.open('post', action ?? '/api/v1/file/upload', true);
    //建立连接后 添加请求头
    xhr.setRequestHeader('Authorization', headers['Authorization']);
    xhr.send(formData);

    return {
        abort() {
            xhr.abort()
        }
    }

};
//删除头像前所触发的事件
const onRemove = (fileItem: FileItem): Promise<boolean> => {
    return Promise.resolve(true);
};
//上传文件超过limit所触发的限制
const OverLimit = () => {

};
const findRole = (row: number | string) => {
    let roles = userstore.role;
    for (var i = 0; i < roles.length; i++) {
        if (roles[i].id == row) {
            return roles[i].name;
        }
    }
    return '';
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
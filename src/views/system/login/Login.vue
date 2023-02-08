<template>
  <div class="view-account">
    <div class="view-account-header"></div>
    <div class="view-account-container">
      <div class="view-account-top">
        <div class="view-account-top-logo">
          <!-- <img :src="websiteConfig.loginImage" alt="" /> -->
        </div>
        <div class="view-account-top-desc">登 录</div>
      </div>
      <div class="view-account-form">
        <a-form ref="formRef" :model="formState" :rules="getFormRules">
          <a-form-item name="username">
            <a-input v-model:value="formState.username" placeholder="Username">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input-password
              v-model:value="formState.password"
              type="password"
              placeholder="Password"
            >
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" :loading="loading" @click="handleLogin"> 登 录 </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { message } from 'ant-design-vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import { useRoute, useRouter } from 'vue-router';
  import { reactive } from 'vue';
  interface FormState {
    username: string;
    password: string;
  }
  const formRef = ref();

  const formState = reactive({
    username: '',
    password: '',
  });
  const router = useRouter();
  const route = useRoute();
  const loading = ref(false);

  const getFormRules = {
    username: { required: true, message: '请输入用户名', trigger: 'blur' },
    password: { required: true, message: '请输入密码', trigger: 'blur' },
  };

  const handleLogin = () => {
    formRef.value
      .validate()
      .then(() => {
        message.success('登录成功');
        const toPath = decodeURIComponent((route.query?.redirect || '/') as string);
        if (route.name === 'Login') {
          router.replace('/');
        } else router.replace(toPath);
      })
      .catch((e: unknown) => {
        console.log('e', e);
      });
  };
</script>

<style lang="less" scoped>
  .view-account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    overflow: auto;

    &-container {
      //   flex: 1;
      padding: 32px;
      max-width: 600px;
      min-width: 500px;
      margin: 0 auto;
      background-color: #fff;
      box-shadow: 2px #515a6e;
      border-radius: 5px;
    }

    &-top {
      padding: 32px 0;
      text-align: center;

      &-desc {
        font-size: 24px;
        font-weight: 600;
      }
    }

    &-form {
      display: flex;
      justify-content: center;
      /deep/ .ant-form {
        width: 80%;
        .ant-btn-primary {
          margin: 20px 0;
          width: 100%;
        }
      }
    }

    &-other {
      width: 100%;
    }

    .default-color {
      color: #515a6e;

      .ant-checkbox-wrapper {
        color: #515a6e;
      }
    }
  }

  @media (min-width: 768px) {
    .view-account {
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 100%;
    }

    .page-account-container {
      padding: 32px 0 24px 0;
    }
  }
</style>

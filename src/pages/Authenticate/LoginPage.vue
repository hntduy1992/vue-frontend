<template>
  <v-app class="app-background">
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="elevation-12 login-card" rounded="lg">
              <v-card-text class="pa-8">
                <div class="text-center mb-6">
                  <h1 class="text-h5 font-weight-bold mb-2 text-primary">
                    HỆ THỐNG QUẢN TRỊ
                  </h1>
                </div>

                <v-form @submit.prevent="login" ref="loginForm">
                  <v-text-field
                      v-model="username"
                      label="Tên đăng nhập"
                      name="username"
                      prepend-inner-icon="mdi-account"
                      type="text"
                      variant="outlined"
                      density="comfortable"
                      required
                      :rules="[rules.required]"
                      class="mb-4"
                  ></v-text-field>

                  <v-text-field
                      v-model="password"
                      label="Mật khẩu"
                      name="password"
                      prepend-inner-icon="mdi-lock"
                      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="showPassword ? 'text' : 'password'"
                      @click:append-inner="showPassword = !showPassword"
                      variant="outlined"
                      density="comfortable"
                      required
                      :rules="[rules.required]"
                      class="mb-6"
                  ></v-text-field>

                  <v-btn
                      type="submit"
                      color="primary"
                      block
                      size="large"
                      class="font-weight-bold text-capitalize"
                      :loading="loading"
                      :disabled="loading"
                  >
                    Đăng nhập
                    <template v-slot:loader>
                      <v-progress-circular indeterminate size="24"></v-progress-circular>
                    </template>
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="bg-primary text-center d-flex flex-column" absolute>
      <div class="text-white text-caption">
        &copy; {{ new Date().getFullYear() }} UBND Phường Sa Đéc. All rights reserved.
      </div>
      <div class="text-white text-caption mt-1 font-weight-medium">
        "Chuyển đổi số - Vì một Sa Đéc hiện đại và phát triển bền vững"
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {AuthService} from "../../stores/AuthService.js"; // Nếu bạn dùng Vue Router

const username = ref('');
const password = ref('');
const showPassword = ref(false);
const loading = ref(false);
const loginForm = ref(null); // Ref tới v-form
const router = useRouter();
const authService = AuthService(); // Khởi tạo auth service

const rules = {
  required: value => !!value || 'Trường này không được bỏ trống.',
};

async function login() {
  // Validate form trước khi gửi
  const { valid } = await loginForm.value.validate();
  if (!valid) {
    return;
  }

  loading.value = true;
  try {
    // Gọi action login từ Pinia Store/Service
    await authService.login(username.value, password.value);

    // Lấy redirect path từ query nếu có, hoặc chuyển về Dashboard
    const redirectPath = router.currentRoute.value.query.redirect || { name: 'Dashboard' };
    await router.push(redirectPath);
    // Cần xử lý thông báo thành công nếu muốn (ví dụ: dùng Snackbar)
  } catch (error) {
    // Xử lý lỗi đăng nhập (hiển thị thông báo lỗi cho người dùng)
    console.error('Lỗi đăng nhập:', error);
    alert('Đăng nhập thất bại: ' + (error.message || 'Sai tên đăng nhập hoặc mật khẩu.'));
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.app-background {
  background-image: url("src/assets/images/backgound.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
.app-background:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0; /* Đảm bảo nó nằm trên background nhưng dưới nội dung */

  /* HIỆU ỨNG LÀM MỜ (BLUR) */
  backdrop-filter: blur(2px);

  /* HIỆU ỨNG MÀU TỐI (Tùy chọn, có thể kết hợp với Blur) */
  background-color: rgba(0, 0, 0, 0.2); /* Phủ màu đen trong suốt 20% */
}

.login-card {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05); /* Đổ bóng sâu hơn */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: rgba(255,255,255,0.8);
}

.login-card:hover {
  transform: translateY(-5px); /* Hiệu ứng nhấc nhẹ khi hover */
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 8px 15px rgba(0, 0, 0, 0.08);
}

/* Tùy chỉnh cho input fields */
.v-text-field .v-input__control {
  border-radius: 8px; /* Bo tròn input field */
}
</style>

<style scoped>

</style>
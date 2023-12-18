<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import MainLayout from "~/layouts/MainLayout.vue";
import showToast from "~/composables/vue3-toastify";

const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const isLoggedin = computed(() => !!user.value);
const newPassword = ref("");
const confirmPassword = ref("");

async function changePassword() {
  if (newPassword.value !== confirmPassword.value) {
    showToast("Yeni şifreler eşleşmiyor.", "danger");
    return;
  }

  try {
    const { error } = await client.auth.updateUser({
      password: newPassword.value,
    });
    if (error) throw error.message || error.data.message;
    showToast("Şifre başarıyla değiştirildi.", "success");
    logout();
    router.push("/login");
  } catch (error) {
    console.error(error);
    showToast("Şifre değiştirme sırasında bir hata oluştu.", "danger");
  }
}

async function logout() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error.message || error.data.message;
    showToast("Çıkış başarıyla gerçekleştirildi.", "success");
    router.push("/login");
  } catch (error) {
    console.error(error);
    showToast("Çıkış sırasında bir hata oluştu.", "danger");
  }
}
onMounted(() => {
  if (!isLoggedin.value) {
    router.push("/login");
  }
});
</script>

<template>
  <MainLayout>
    <div class="relative mt-[91px] w-full font-dosis">
      <img
        class="my-7 h-[90px] w-full object-cover lg:my-0 lg:h-[180px]"
        src="/settings.png"
        alt=""
      />
      <h1
        class="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center font-dosis text-6xl"
      >
        profile
      </h1>
    </div>
    <div
      v-if="isLoggedin"
      class="flex min-h-screen flex-col justify-center py-6 font-dosis sm:py-12"
    >
      <div class="relative -mt-64 py-3 sm:mx-auto sm:max-w-xl">
        <div
          class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-gray-600 to-gray-200 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"
        ></div>
        <div
          class="relative bg-gray-500 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <h1
            class="mb-2 mt-10 rounded-xl bg-white p-2 text-center text-xl font-light text-black"
          >
            Email: {{ user?.email }}
          </h1>
          <div class="py-6 text-center">
            <h1 class="text-3xl">Reset Password</h1>
          </div>

          <form @submit.prevent="changePassword" action="#" method="POST">
            <input
              id="new-password"
              v-model="newPassword"
              type="password"
              required
              placeholder="New Password"
              class="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />

            <input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              class="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />

            <div class="flex justify-between">
              <button
                type="submit"
                class="focus:shadow-outline mt-3 rounded bg-gray-700 px-4 py-2 font-bold text-white duration-300 hover:bg-gray-400 focus:outline-none"
              >
                Approve
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

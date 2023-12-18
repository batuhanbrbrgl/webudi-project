<script setup>
import { useSupabase } from "vue-3-supabase";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import MainLayout from "~/layouts/MainLayout.vue";

const client = useSupabaseClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);
const router = useRouter();

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/login");
    setTimeout(() => {
      successMsg.value = "Check your email for the confirmation link.";
    toast(successMsg.value, { autoClose: 3000, type: "success" });
    }, 3000);
   
   
  } catch (error) {
    errorMsg.value = error.message;
    console.error(error);
  }
}

</script>
<template>
  <MainLayout>
    <div
      class="flex min-h-screen flex-col justify-center py-6 font-dosis sm:py-12"
    >
      <div class="relative -mt-64 py-3 sm:mx-auto sm:max-w-xl">
        <div
          class="absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-gray-600 to-gray-200 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"
        ></div>
        <div
          class="relative bg-gray-500 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20"
        >
          <div class="pb-6 text-center">
            <h1 class="text-3xl">Register</h1>
          </div>

          <form @submit.prevent="signUp()" action="#" method="POST">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              placeholder="Email"
              class="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />

            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              placeholder="Password"
              class="focus:shadow-outline mb-4 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />

            <div class="flex justify-between">
              <button
                type="submit"
                class="focus:shadow-outline mt-3 rounded bg-gray-700 px-4 py-2 font-bold text-white duration-300 hover:bg-gray-400 focus:outline-none"
              >
                Sign in
              </button>
              <RouterLink to="/login">
                <button
                  class="focus:shadow-outline mt-3 rounded px-4 py-2 font-bold text-white duration-300 hover:text-gray-300 focus:outline-none"
                >
                  Log In
                </button>
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

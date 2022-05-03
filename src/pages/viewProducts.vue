<template>
  <div class="flex h-[100vh] w-full items-center justify-center">
    <div
      class="w-[75.8rem] h-[90vh] rounded-md bg-white p-6 px-8 overflow-y-auto"
    >
      <div class="relative overflow-x-auto sm:rounded-lg">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Data Deleted Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Deleted !!</span
          >
          <h1 class="text-4xl">Products</h1>
          <h4 class="my-2 text-sm font-light">See your added products</h4>
        </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Image</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Description</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
              v-for="product in products"
              :key="product.id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <img
                  :src="geturl(product.productImage)"
                  alt=""
                  class="w-16 h-16 bg-gray-900 object-cover object-center flex-shrink-0 rounded-sm mr-4"
                />
              </th>

              <td class="px-6 py-2 font-semibold">{{ product.productName }}</td>
              <td class="px-6 py-2 font-semibold">{{ product.category }}</td>
              <td class="px-6 py-2 font-semibold">₹{{ product.price }}</td>
              <td class="px-6 py-2 font-semibold">{{ product.description }}</td>
              <td class="px-6 py-7 flex gap-5 text-right items-center">
                <router-link
                  :to="`/dashboard/editproduct/${product.id}`"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 172 172"
                    style="fill: #000000"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#2563eb">
                        <path
                          d="M131.96744,14.33333c-1.83467,0 -3.66956,0.70211 -5.06706,2.09961l-14.33333,14.33333l-10.13411,10.13411l-80.93294,80.93294v28.66667h28.66667l105.40039,-105.40039c2.80217,-2.80217 2.80217,-7.33911 0,-10.13412l-18.53255,-18.53255c-1.3975,-1.3975 -3.23239,-2.09961 -5.06706,-2.09961zM131.96744,31.63411l8.39844,8.39844l-9.26628,9.26628l-8.39844,-8.39844zM112.56706,51.03451l8.39844,8.39844l-76.73372,76.73372h-8.39844v-8.39844z"
                        ></path>
                      </g>
                    </g></svg
                ></router-link>
                <a
                  @click="removeProduct(product.id)"
                  class="font-medium text-red-600 dark:red-blue-500 hover:underline cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 172 172"
                    style="fill: #000000"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style="mix-blend-mode: normal"
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#dc2626">
                        <path
                          d="M85.91042,14.25495c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172v2.86667h-31.53333c-1.53406,-0.02082 -3.01249,0.574 -4.10468,1.65146c-1.09219,1.07746 -1.70703,2.54767 -1.70704,4.08187h-8.52161c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h103.2c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-8.52161c-0.00001,-1.53421 -0.61486,-3.00442 -1.70704,-4.08187c-1.09219,-1.07746 -2.57061,-1.67228 -4.10468,-1.65146h-31.53333v-2.86667c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482zM34.4,51.6l10.27969,87.34375c0.67653,5.77347 5.56348,10.12292 11.37708,10.12292h59.88646c5.8136,0 10.69482,-4.34945 11.37708,-10.12292l10.27969,-87.34375z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getProducts, deleteProduct } from "../db/fireBase";
const defaultIMG = "https://dummyimage.com/98x98";

const products = getProducts();

const geturl = (productImage) => {
  return productImage != "" ? productImage : defaultIMG;
};
const isSuccess = ref(false);
const isError = ref(false);

async function removeProduct(id) {
  try {
    await deleteProduct(id);
    isSuccess.value = true;
    setTimeout(() => {
      isSuccess.value = false;
    }, 1500);
  } catch (err) {
    console.log(err);
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

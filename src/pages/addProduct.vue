<template>
  <form @submit.prevent="addProduct">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <span v-if="isSuccess" class="text-green-500 text-center text-sm"
            >Data Added Succesfully</span
          >
          <span v-if="isError" class="text-red-500 text-center text-sm"
            >Data Not Added !!</span
          >
          <h1 class="text-4xl">Add Product</h1>
          <h4 class="my-2 text-sm font-light">Add new product</h4>
        </div>
        <div>
          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Profile Image</label>
            <input
              type="file"
              name="name"
              id="name"
              placeholder="example"
              @change="selectedImage"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2 border-none -ml-2"
              required
            />
          </div>

          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Product name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="example"
              v-model="data.productName"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>

          <div class="my-0.5">
            <label for="adharID" class="ml-0.5 text-sm">Product Category</label>
            <select
              v-model="data.category"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
            >
              <option disabled value="">Please select category</option>
              <option>Lighting</option>
              <option>Furniture</option>
              <option>Modular Kitchens</option>
              <option>Wardrobe Designs</option>
              <option>Painting and Wallpaper</option>
              <option>Furnishings and Decor Accessories</option>
            </select>
          </div>

          <div class="my-3">
            <label for="price" class="ml-0.5 text-sm">Product Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="544..."
              v-model="data.price"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>

          <div class="my-3">
            <label for="description" class="ml-0.5 text-sm"
              >Product Description</label
            >
            <textarea
              type="text"
              name="description"
              id="description"
              rows="4"
              placeholder="abc description...."
              v-model="data.description"
              class="w-full rounded border-2 border-gray-300 indent-2"
              required
            ></textarea>
          </div>

          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white disabled:bg-violet-300"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { insertProduct, uploadProductImage } from "../db/fireBase";

const data = reactive({
  productImage: "",
  productName: "",
  category: "",
  price: "",
  description: "",
});
const isSuccess = ref(false);
const isError = ref(false);
const file = ref("");

function selectedImage(event) {
  file.value = event.target.files[0];
  console.log(file.value);
}

async function addProduct() {
  try {
    data.productImage = await uploadProductImage(file.value);
    await insertProduct(data);
  } catch (error) {
    isError.value = true;
    setTimeout(() => {
      isError.value = false;
    }, 1500);
    console.log(error);
  }
  isSuccess.value = true;
  setTimeout(() => {
    isSuccess.value = false;
    data.productImage = "";
    data.productName = "";
    data.category = "";
    data.price = "";
    data.description = "";
    file.value = "";
  }, 1500);
}
</script>

<template>
  <form action="" method="post">
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div class="w-[25rem] rounded-md bg-white p-6 px-8">
        <div class="py-6">
          <h1 class="text-4xl">Add Client</h1>
          <h4 class="my-2 text-sm font-light">Show your clients</h4>
        </div>
        <div>
          <div class="my-0.5">
            <div class="flex justify-center">
              <div class="mb-3 w-96">
                <label for="name" class="ml-0.5 text-sm">Client Logo</label>
                <input
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="formFile"
                />
              </div>
            </div>
          </div>

          <div class="my-0.5">
            <label for="name" class="ml-0.5 text-sm">Client Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="example"
              class="h-10 w-full rounded border-2 border-gray-300 indent-2"
              required
            />
          </div>

          <div class="mt-7 my-6">
            <button
              type="submit"
              class="w-full rounded bg-violet-600 py-2 text-white disabled:bg-violet-300"
            >
              Add Client
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

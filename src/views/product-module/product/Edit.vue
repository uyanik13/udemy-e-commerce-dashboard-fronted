<template>
  <div class="flex items-center mt-8 intro-y">
    <h2 class="mr-auto text-lg font-medium">Add Product</h2>
  </div>
  <div class="grid grid-cols-11 pb-20 mt-5 gap-x-6">
    <div class="col-span-11 intro-y 2xl:col-span-9">
      <!-- BEGIN: Uplaod Product -->
      <div class="p-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Upload Product
          </div>
          <div class="mt-5">
            <div class="flex items-center text-slate-500">
              <span><LightbulbIcon class="w-5 h-5 text-warning" /></span>
              <div class="ml-2">
                <span class="mr-1"
                  >Avoid selling counterfeit products / violating Intellectual
                  Property Rights, so that your products are not deleted.</span
                >
                <a
                  href="https://themeforest.net/item/E-commerce-jquery-tailwindcss-html-admin-template/26366820"
                  class="font-medium text-primary"
                  target="blank"
                  >Learn More</a
                >
              </div>
            </div>
            <div class="flex-col items-start mt-10 form-inline xl:flex-row">
              <div class="form-label w-full xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Photos</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    <div>
                      The image format is .jpg .jpeg .png and a minimum size of
                      300 x 300 pixels (For optimal images use a minimum size of
                      700 x 700 pixels).
                    </div>
                    <div class="mt-2">
                      Select product photos or drag and drop up to 5 photos at
                      once here. Include min. 3 attractive photos to make the
                      product more attractive to buyers.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="flex-1 w-full pt-4 mt-3 border-2 border-dashed rounded-md xl:mt-0 dark:border-darkmode-400"
              >
                <div class="flex">
                  <div
                    v-for="(data, index) in form.images"
                    :key="index"
                    class="flex px-4"
                  >
                    <div
                      v-if="form.images.length"
                      class="relative w-24 h-24 mb-5 mr-5 cursor-pointer image-fit zoom-in"
                    >
                      <img
                        class="rounded-md"
                        data-action="zoom"
                        :src="data.image_url"
                      />
                      <Tippy
                        tag="div"
                        content="Remove this image?"
                        @click="removeImage(index)"
                        class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                      >
                        <xIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                </div>
                <div
                  class="relative flex items-center px-4 pb-4 cursor-pointer"
                >
                  <ImageIcon class="w-4 h-4 mr-2" />
                  <span class="mr-1 text-primary">Upload a file</span> or drag
                  and drop
                  <input
                    type="file"
                    ref="updateImgInput"
                    @change="uploadImage"
                    class="absolute top-0 left-0 w-full h-full opacity-0"
                    multiple
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Uplaod Product -->
      <!-- BEGIN: Product Information -->
      <div class="p-5 mt-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Product Information
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Name</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    Include min. 40 characters to make it more attractive and
                    easy for buyers to find, consisting of product type, brand,
                    and information such as color, material, or type.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <input
                  id="product-name"
                  type="text"
                  class="form-control"
                  placeholder="Product name"
                  v-model="form.name"
                />
                <div class="text-right form-help">Maximum character 0/70</div>
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Category</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <v-select
                  label="name"
                  class="w-full bg-white"
                  placeholder="Select an category"
                  v-model="form.category_id"
                  :reduce="(option) => option.id"
                  :multiple="false"
                  :options="product_categories"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Information -->
      <!-- BEGIN: Product Detail -->
      <div class="p-5 mt-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Product Detail
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Description</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    <div>
                      Make sure the product description provides a detailed
                      explanation of your product so that it is easy to
                      understand and find your product.
                    </div>
                    <div class="mt-2">
                      It is recommended not to enter info on mobile numbers,
                      e-mails, etc. into the product description to protect your
                      personal data.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <ClassicEditor v-model="form.content" />
                <div class="text-right form-help">Maximum character 0/2000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Detail -->
      <!-- BEGIN: Product Variant -->
      <div class="p-5 mt-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Product Variant
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label sm:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Variant</div>
                  </div>
                  <div class="mt-2 text-xs leading-relaxed text-slate-500">
                    Add variants such as color, size, or more. Choose a maximum
                    of 2 variant types.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0 xl:text-right">
                <button @click="addNewOption" class="btn btn-primary w-44">
                  <PlusIcon class="w-4 h-4 mr-2" /> Add Variant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Variant -->
      <!-- BEGIN: Product Variant (Details) -->
      <div class="p-5 mt-5 intro-y box" v-if="form.product_variants.length">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Product Variant (Details)
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-2 mt-2 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <div
                  v-for="(item, index) in form.product_variants"
                  :key="index"
                  class="relative py-10 pl-5 pr-5 my-5 rounded-md xl:pr-10 bg-slate-50 dark:bg-transparent dark:border"
                >
                  <button
                    @click="removeOption(index)"
                    class="absolute bottom-0 right-0 my-4 mr-4"
                  >
                    <Trash2Icon class="w-5 h-5 text-danger" />
                  </button>
                  <div>
                    <div class="mt-5 form-inline first:mt-0">
                      <label class="form-label sm:w-20">Option</label>
                      <div class="flex items-center w-full mt-2">
                        <v-select
                          label="name"
                          class="w-full bg-white"
                          placeholder="Select an option"
                          v-model="form.product_variants[index].id"
                          :reduce="(option) => option.id"
                          :multiple="false"
                          :options="product_variants"
                        />
                      </div>
                    </div>
                    <div class="items-start mt-5 form-inline first:mt-0">
                      <label class="mt-2 form-label sm:w-20">Value</label>
                      <div class="flex-1">
                        <div class="items-center mt-5 xl:flex first:mt-0">
                          <div class="flex-1 w-full mt-3 xl:mt-0">
                            <div class="grid-cols-3 gap-2 sm:grid">
                              <input
                                type="text"
                                class="mt-2 form-control sm:mt-0"
                                placeholder="Value"
                                v-model="form.product_variants[index].value"
                              />
                              <div class="input-group">
                                <div class="input-group-text">#</div>
                                <input
                                  type="number"
                                  class="mt-2 form-control sm:mt-0"
                                  placeholder="Stock"
                                  v-model="form.product_variants[index].stock"
                                />
                              </div>

                              <div class="input-group">
                                <div class="input-group-text">$</div>
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="Price"
                                  v-model="form.product_variants[index].price"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-2 mt-2 xl:ml-64 xl:pl-10 first:mt-0 first:pt-0">
              <button
                @click="addNewOption"
                class="w-full py-3 border-dashed btn btn-outline-secondary"
              >
                <PlusIcon class="w-4 h-4 mr-2" /> Add New Variant
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Variant (Details) -->
      <!-- BEGIN: Product Management -->
      <div class="p-5 mt-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Product Management
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Status</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    If the status is active, your product can be searched for by
                    potential buyers.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <div class="form-check form-switch">
                  <input
                    id="product-status-active"
                    class="form-check-input"
                    type="checkbox"
                    v-model.number="form.status"
                    :checked="form.status"
                    true-value="1"
                    false-value="0"
                  />
                  <label class="form-check-label" for="product-status-active"
                    >Active</label
                  >
                </div>
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Price</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <input
                  id="product-stock"
                  type="number"
                  class="form-control"
                  placeholder="Product Price"
                  v-model="form.price"
                />
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Stock</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <input
                  id="product-stock"
                  type="number"
                  class="form-control"
                  placeholder="Input Product Stock"
                  v-model="form.stock"
                />
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">SKU (Stock Keeping Unit)</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    Use a unique SKU code if you want to mark your product.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <input
                  id="sku"
                  type="text"
                  class="form-control"
                  placeholder="Input SKU"
                  v-model="form.sku"
                />
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Discount</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <v-select
                  label="name"
                  class="w-full bg-white"
                  placeholder="Select a discount"
                  v-model="form.discount_id"
                  :reduce="(option) => option.id"
                  :multiple="false"
                  :options="discounts"
                >
                  <template v-slot:option="option">
                    {{ option.name }} - %{{ option.discount_percent }}
                  </template>
                </v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Product Management -->
      <!-- BEGIN: Weight & Shipping -->
      <div class="p-5 mt-5 intro-y box">
        <div
          class="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400"
        >
          <div
            class="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400"
          >
            <ChevronDownIcon class="w-4 h-4 mr-2" /> Weight & Shipping
          </div>
          <div class="mt-5">
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Weight</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    Enter the weight by weighing the product after it is
                    <span class="font-medium text-slate-600 dark:text-slate-300"
                      >packaged</span
                    >.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <div class="grid-cols-4 gap-2 sm:grid">
                  <select v-model="form.size.weight_type" class="form-select">
                    <option value="Gram (g)">Gram (g)</option>
                    <option value="Kilogram (kg)">Kilogram (kg)</option>
                  </select>
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="50"
                      v-model="form.size.weight"
                    />
                  </div>
                </div>
                <Alert
                  class="mt-5 alert-outline-warning alert-dismissible bg-warning/20 dark:bg-darkmode-400 dark:border-darkmode-400"
                  v-slot="{ dismiss }"
                  role="alert"
                >
                  <div class="flex items-center">
                    <span><AlertTriangleIcon class="w-6 h-6 mr-3" /></span>
                    <span class="text-slate-800 dark:text-slate-500"
                      >Pay close attention to the weight of the product so that
                      there is no difference in data with the shipping courier.
                      <a class="font-medium text-primary" href=""
                        >Learn More</a
                      ></span
                    >
                    <button
                      type="button"
                      class="btn-close dark:text-white"
                      @click="dismiss"
                      aria-label="Close"
                    >
                      <XIcon class="w-4 h-4" />
                    </button>
                  </div>
                </Alert>
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Product Size</div>
                    <div
                      class="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md"
                    >
                      Required
                    </div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    Enter the product size after packing to calculate the volume
                    weight.
                    <a class="font-medium text-primary" href=""
                      >Learn Volume Weight</a
                    >
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <div class="grid-cols-3 gap-2 sm:grid">
                  <div class="input-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Width"
                      v-model="form.size.width"
                    />
                    <div class="input-group-text">cm</div>
                  </div>
                  <div class="mt-2 input-group sm:mt-0">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Height"
                      v-model="form.size.height"
                    />
                    <div class="input-group-text">cm</div>
                  </div>
                  <div class="mt-2 input-group sm:mt-0">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Length"
                      v-model="form.size.length"
                    />
                    <div class="input-group-text">cm</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex-col items-start pt-5 mt-5 form-inline xl:flex-row first:mt-0 first:pt-0"
            >
              <div class="form-label xl:w-64 xl:!mr-10">
                <div class="text-left">
                  <div class="flex items-center">
                    <div class="font-medium">Shipping Service</div>
                  </div>
                  <div class="mt-3 text-xs leading-relaxed text-slate-500">
                    Configure shipping services according to your product type.
                  </div>
                </div>
              </div>
              <div class="flex-1 w-full mt-3 xl:mt-0">
                <div class="flex flex-col sm:flex-row">
                  <div class="flex items-center w-full mt-2">
                    <v-select
                      label="name"
                      class="w-full bg-white"
                      v-model="form.shipping_id"
                      placeholder="Select an shipping"
                      :reduce="(option) => option.id"
                      :multiple="false"
                      :options="shippings"
                    />
                  </div>
                </div>
                <div class="mt-3 text-xs leading-relaxed text-slate-500">
                  The delivery service for this product will be the same as in
                  the
                  <a class="font-medium text-primary" href=""
                    >Shipping Settings.</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Weight & Shipping -->
      <div class="flex flex-col justify-end gap-2 mt-5 md:flex-row">
        <button
          type="button"
          class="w-full py-3 btn border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
        >
          Cancel
        </button>
        <button
          @click="save"
          type="button"
          class="w-full py-3 btn btn-primary md:w-52"
        >
          Save
        </button>
      </div>
    </div>
    <div class="hidden col-span-2 intro-y 2xl:block">
      <div class="sticky top-0 pt-10">
        <ul
          class="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]"
        >
          <li
            class="pl-5 mb-4 font-medium border-l-2 border-primary dark:border-primary text-primary"
          >
            <a href="">Upload Product</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Product Information</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Product Detail</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Product Variant</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Product Variant (Details)</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Product Management</a>
          </li>
          <li
            class="pl-5 mb-4 border-l-2 border-transparent dark:border-transparent"
          >
            <a href="">Weight & Shipping</a>
          </li>
        </ul>
        <div
          class="relative p-5 mt-10 border rounded-md bg-warning/20 dark:bg-darkmode-600 border-warning dark:border-0"
        >
          <LightbulbIcon
            class="absolute top-0 right-0 w-12 h-12 mt-5 mr-3 text-warning/80"
          />
          <h2 class="text-lg font-medium">Tips</h2>
          <div class="mt-5 font-medium">Price</div>
          <div
            class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500"
          >
            <div>
              The image format is .jpg .jpeg .png and a minimum size of 300 x
              300 pixels (For optimal images use a minimum size of 700 x 700
              pixels).
            </div>
            <div class="mt-2">
              Select product photos or drag and drop up to 5 photos at once
              here. Include min. 3 attractive photos to make the product more
              attractive to buyers.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import vSelect from "vue-select";                                           
import "vue-select/dist/vue-select.css";
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  images: [],
  name: "",
  category_id: null,
  content: "",
  product_variants: [
    {
      id: null,
      value: null,
      stock: null,
      price: null,
    },
  ],
  status: 1,
  stock: 10,
  sku: null,
  price: null,
  discount_id: null,
  size: {
    weight_type: null,
    weight: null,
    width: null,
    height: null,
    length: null,
  },
  shipping_id: null,
});

const deletedImages = ref([])

const product_variants = ref([]);
const shippings = ref([]);
const product_categories = ref([]);
const discounts = ref([]);

const save = async () => {
  
};


//Get Variants From API
const getVariants = () => {
 
};

const getDiscounts = () => {
  
};

//Get Product Categories From API
const getProductCategories = () => {
 
};

const getShippings = () => {
  
};

const addNewOption = () => {
  form.value.product_variants.push({});
};
const removeOption = (index) => {
  form.value.product_variants.splice(index, 1);
};

const uploadImage = (input) => {
 
};

const removeImage = (index) => {
  
};


</script>

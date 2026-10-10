<template>
  <div class="container-fluid bg-dark py-3">
    <div class="row">
      <div class="col-12 col-lg-6">
        <div class="p-5 mt-5">
          <h1 style="font-size: 50px" class="text-primary fw-bold">
            Welcome to products
          </h1>
          <p class="text-white">
            There are many products here. Please enjoy shoping. <br />
            We also has a quality products. We will discount 40% for customers
            who buy laptop here.
          </p>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="p-4">
          <img
            class="img-fluid rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFbMi0ege68zuq1n1LbIn-reoz6SW2FuS6hwESySXbA&s=10"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container">
      <!-- <button class="btn btn-light ms-2">All</button> -->
      <RouterLink to="/product/dell" class="btn btn-light ms-2">Dell</RouterLink>
      <RouterLink to="/product/asus" class="btn btn-light ms-2">Asus</RouterLink>
      <RouterLink to="/product/msi" class="btn btn-light ms-2">MSI</RouterLink>
    </div>
  </div>


    <RouterView></RouterView>

</template>

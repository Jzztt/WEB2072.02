<template>
  <div>
    <h1>List Rendering</h1>
    <ul>
      <li v-for="value in arr">{{ value }}</li>
    </ul>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.category }}</td>
          <td>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const arr = reactive([1, 2, 3, 4, 5])

const products = ref([
  {
    id: 1,
    name: 'Samsung Galaxy S21',
    price: 799,
    description: 'Latest Samsung flagship smartphone with advanced features.',
    category: 'smartphone',
  },
  {
    id: 2,
    name: 'Apple iPhone 13',
    price: 999,
    description: 'Newest iPhone model with improved performance and camera.',
    category: 'smartphone',
  },
  {
    id: 3,
    name: 'Laptop MSI Modern 14',
    price: 699,
    description: 'Lightweight laptop with powerful performance for everyday tasks.',
    category: 'laptop',
  },
])
</script>

<style scoped></style>

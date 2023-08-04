import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/products/ProductsView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import ProductsByCategoryView from '../views/products/ProductsByCategoryView.vue'
import ProductDetailView from '../views/products/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ErrorView from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
      // props: (route) => ({ cart: route.params.cart })
    },
    {
      // path: '/categories/:phone_number',
      path: '/exams/:phone_number',
      component: CategoriesView,
      // Agregamos esta propiedad para que el parámetro phone_number se agregue a la URL
      // cuando se llama a esta ruta
      // props: (route) => ({ phone_number: route.query.phone_number }),

      children: [
        {
          path: ':category', 
          name: 'categories',
          component: ProductsByCategoryView,
        },
        // {
        //   path: ':category/:id', 
        //   name: 'product-detail',
        //   component: ProductDetailView,
        // },
      ]
    },
    {
      path: '/category/:id', 
      name: 'product-detail',
      component: ProductDetailView,
    },

    {
      path: '/404',
      name: '404',
      component: ErrorView
    },
 

  ]
})

export default router

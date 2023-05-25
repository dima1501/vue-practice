import { createRouter, createWebHistory } from 'vue-router';
import UserForm from '../components/UserForm.vue';
import PreviewPage from '../components/PreviewPage.vue';

const routes = [
  { path: '/vue-test-alef', component: UserForm },
  { path: '/vue-test-alef/preview', component: PreviewPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
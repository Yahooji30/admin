import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from "/src/pages/Login.vue";
import Forgot from "/src/pages/Forgot.vue";
import Change from "/src/pages/change.vue";
import Profile from "/src/pages/profile.vue";
import Contact from "/src/pages/contact.vue";
import AddBranch from "/src/pages/addbranch.vue";
import AddTeamMember from "/src/pages/addmember.vue";
import AddClient from "/src/pages/addclient.vue";
import Home from "/src/pages/home.vue";
import Branches from "/src/pages/viewBranches.vue";
import EditBranch from "/src/pages/editBranch.vue";
import EditMembers from "../pages/editMembers.vue";
import Members from "../pages/viewMembers.vue";
import Messages from "../pages/messages.vue";
import Gallery from "../pages/gallery.vue";
import kitchen from "../pages/kitchen.vue";
import Furniture from "../pages/furniture.vue";
import Lighting from "../pages/lighting.vue";
import Wadrobe from "../pages/wadrobe.vue";
import FDAccessories from "../pages/fdaccessories.vue";
import Wall from "../pages/wall.vue";
const routes = [
  {
    path: "/",
    name: Home,
    component: Home,
  },
  {
    path: "/gallery",
    name: Gallery,
    component: Gallery,
  },
  {
    path: "/dashboard",
    name: Dashboard,
    component: Dashboard,
    children: [
      {
        path: "/dashboard/change",
        name: Change,
        component: Change,
      },
      {
        path: "/dashboard/profile",
        name: Profile,
        component: Profile,
      },
      {
        path: "/dashboard/contact",
        name: Contact,
        component: Contact,
      },
      {
        path: "/dashboard/addbranch",
        name: AddBranch,
        component: AddBranch,
      },
      {
        path: "/dashboard",
        name: AddTeamMember,
        component: AddTeamMember,
      },
      {
        path: "/dashboard/addclient",
        name: AddClient,
        component: AddClient,
      },
      {
        path: "/dashboard/branches",
        name: Branches,
        component: Branches,
      },
      {
        path: "/dashboard/editbranch/:id",
        name: EditBranch,
        component: EditBranch,
      },
      {
        path: "/dashboard/editmember/:id",
        name: EditMembers,
        component: EditMembers,
      },
      {
        path: "/dashboard/members",
        name: Members,
        component: Members,
      },
      {
        path: "/dashboard/messages",
        name: Messages,
        component: Messages,
      },
    ],
  },
  {
    path: "/login",
    name: Login,
    component: Login,
  },
  {
    path: "/forgot",
    name: Forgot,
    component: Forgot,
  },
  {
    path: "/kitchen",
    name: kitchen,
    component: kitchen,
  },
  {
    path: "/furniture",
    name: Furniture,
    component: Furniture,
  },
  {
    path: "/fdaccessories",
    name: FDAccessories,
    component: FDAccessories,
  },
  {
    path: "/lighting",
    name: Lighting,
    component: Lighting,
  },
  {
    path: "/wall",
    name: Wall,
    component: Wall,
  },
  {
    path: "/wadrobe",
    name: Wadrobe,
    component: Wadrobe,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

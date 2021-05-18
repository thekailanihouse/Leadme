<template>
  <div class="navbar" :class="{'navbar--hidden': !showNavbar}">
    <nav>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                alt="Workflow logo"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex">
                <div class="ml-10">
                  <NuxtLink to="/">Home</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div v-if="isAuthenticated">
              <div @click="toggle" class="relative">
                <button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  <span>{{loggedInUser.username}}</span>
                  <svg :class="[isOpen ? 'rotate-0':'rotate-180']" fill="currentColor" viewBox="0 0 20 20"  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div :class="[isOpen ? 'block' : 'hidden']" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                  <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                    <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Profile</a>
                    <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="logout">Log out</a>
                  </div>
                </div>
              </div>    
          </div>
          <div v-if="!isAuthenticated">
            <div class="hidden md:block" v-if="this.$route.path !== '/login' && this.$route.path !== '/register'">
              <div class="flex mt-5">
                <div class="mt-5 mr-8 h-16">
                <NuxtLink to="/login" class="shadow-md font-medium py-2 px-4 text-indigo-100
                cursor-pointer bg-indigo-600 hover:bg-indigo-500 rounded text-nd text-center w-48">Login/Register
                </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
            <div class="px-2 pt-2 pb-3 sm:px-3">
                <NuxtLink class="block px-3 py-2 text-base font-medium text-black" to="/">Home</NuxtLink>
            </div>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
    },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      isOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll',this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    onScroll(){
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrollPosition < 0){
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    async logout(){
      await this.$auth.logout()
    }
  }
};
</script>
<style>
.navbar {
  height: 65px;
  width: 100vw;
  background: hsl(0, 0%, 100%);
  position: fixed;
  box-shadow: 0 2px 15px rgba(206, 206, 206, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
</style>
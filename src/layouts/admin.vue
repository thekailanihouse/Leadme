<template>
<main class="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
        <AdminSidebar/>
        <div class="flex flex-col w-full md:space-y-4">
            <AdminNavbar/>
            <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
                    Good afternoom, {{loggedInUser.username}}
                </h1>
                <h2 class="text-md text-gray-400">
                    Here&#x27;s what&#x27;s happening with your ambassador account today.
                </h2>
                <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                    <div class="w-full w-12">
                        <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                                <div class="flex items-center justify-between px-4 py-6 space-x-4">
                                    <div class="flex items-center">
                                        <Nuxt/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import {mapGetters} from "vuex";
export default {
computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
    },
}
</script>

<style>

</style>
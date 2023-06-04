<template lang="">
    <div>
        <account-sign-up-form @submit="onSubmit"></account-sign-up-form>
    </div>
</template>

<script>
import AccountSignUpForm from "@/components/account/AccountSignUpForm.vue"
export default {
    components: {
        AccountSignUpForm
    },
    methods: {
        onSubmit (payload) {
        }
    }
}
</script>

<style lang="">
    
</style>
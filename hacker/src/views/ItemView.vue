<template>
    <div class="user_profile">
        <div>
            <span>by  </span>
            <strong><router-link :to="`/user/${askItem.user}`">{{ askItem.user }}</router-link></strong>
            <b>- {{ askItem.time_ago }}</b>
        </div>
        <h2>{{ askItem.title }}</h2><br/>
        <div v-html="`${askItem.content}`"></div>
        <br/><hr/><br/>

        <ul class="comment">
            <li v-for="comment in askItem.comments">
                <i class="fas fa-arrow-right">{{ comment.user }}</i>
                <div v-html="`${comment.content}`"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        askItem() {
            return this.$store.state.item;
        }
    },
    created() {
        this.$store.dispatch('FETCH_ITEM', this.$route.query.id)
    }

}
</script>

<style>

</style>
<template>
    <div class="chat">
        <div class="chat__users">123</div>
        <div class="chat__dialog">
            <div class="chat__title">Пользователь - {{user.name}} в комнате {{user.room}}</div>
            <div class="chat__wrapper">
                <div id="messages" class="dialog__messages">
                    <div class="messages__message" :data-id="message.id" v-for="message in messages">
                        <div class="message__author">{{message.name}}</div>
                        <div>{{message.text}}</div>
                    </div>
                </div>
            </div>
            <form action="#" class="chat__form">
                <input v-model="message" class="form__field" type="text">
                <button class="form__btn" @click="send" type="button">Отправить</button>
            </form>
            <button type="button" @click="exit">Left chat</button>
        </div>
    </div>
</template>

<script>
export default {
    head() {return {title: `Room ${this.user.room}`}},
    middleware: ['chat'],
    computed: {
        user() {return this.$store.getters['getUser']},
        messages() {return this.$store.getters['getMessages']}
    },
    data() {
        return {
            users: [],
            message: ''
        }
    },
    methods: {
        exit() {
            this.$router.push('/')
            this.$store.commit('removeUser')
        },
        send() {
            this.$socket.emit('message', {
                id: this.user.id,
                name: this.user.name,
                text: this.message
            }, data => {
                if (data.loaded) {
                    const messages = document.getElementsByClassName('messages__message')
                    for (let i = 0; i <= messages.length - 1; i++)
                        if (messages[i].getAttribute('data-id') === this.user.id)
                            messages[i].classList.add('owner')
                }
            })
            this.message = ''
        }
    }
}
</script>

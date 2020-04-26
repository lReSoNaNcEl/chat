<template>
    <form action="#">
        <input v-model="name" type="text" placeholder="Ваше имя">
        <input v-model="room" type="text" placeholder="Номер комнаты">
        <button @click="enterToChat" type="button">Войти</button>
    </form>
</template>

<script>
    export default {
        head: {
          title: 'Welcome to Online Chat'
        },
        data() {
            return {
                name: '',
                room: ''
            }
        },
        sockets: {
            connect() {
                console.log('Client was connected')
            }
        },
        methods: {
            enterToChat() {
                if (this.name !== '' && this.room !== '') {
                    const user = {
                        name: this.name,
                        room: this.room
                    }

                    this.$socket.emit('joinUser', user, data => {
                        user.id = data.id
                        this.$store.commit('saveUser', user)
                        this.$router.push('/chat')
                    })
                }
            }
        }
    }
</script>

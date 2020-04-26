<template>
    <div>
        <form action="#">
            <input type="text" v-model="message">
            <button type="button" @click="toMessage">Отправить сообщение</button>
        </form>
    </div>
</template>

<script>


export default {
    data() {
        return {
            message: ''
        }
    },
    sockets: {
        connect() {
            console.log('Client was connected')
        }
    },
    methods: {
        toMessage() {
            const payload = {
                message: this.message,
                time: new Date().toTimeString().substr(0, 5)
            }

            this.$socket.emit('message', payload)

            console.log(payload)
        }
    }
}
</script>

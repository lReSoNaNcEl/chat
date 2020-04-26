export const state = () => ({
    user: {},
    messages: [],
})


export const mutations = {
    saveUser(state, payload) {
        state.user = payload
    },
    removeUser(state) {
        state.user = {}
        state.messages = []
    },
    SOCKET_addMessage(state, message) {
        state.messages.push(message)
    }
}
export const getters = {
    getUser: state => state.user,
    getMessages: state => state.messages
}

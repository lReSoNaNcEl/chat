export const state = () => ({

})

export const actions = {
  SOCKET_saveMessage(ctx, payload) {
    console.log('Сервер получил Ваше сообщение:', payload)
  }
}

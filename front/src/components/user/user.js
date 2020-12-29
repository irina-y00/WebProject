export default {
    name: null,
    email: null,
    accessToken: null,
    isAuth() {
        return localStorage.getItem('user_id') !== null;

    },
    logout() {
        localStorage.clear()

    },
    getUserId(){
        return JSON.parse(localStorage.getItem('user_id'))
    },
    getAccessToken(){
        return JSON.parse(localStorage.getItem('access_token'))
    },
    setAccessToken(){
        localStorage.setItem('access_token', JSON.stringify(access_token))
    },
    setUserId(){
        localStorage.setItem('user_id', JSON.stringify(user_id))
    },
    load() {
        let data = localStorage.getItem('user')
        if (data !== null && data !== '') {
            data = JSON.parse(data)
            this.name = data.name
            this.email = data.email
            this.accessToken = data.accessToken
        }
    }
}
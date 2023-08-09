import axios from 'axios'

export const BASE_URL = '/api/'

// 기본 axios
export const instance = axios.create({ baseURL: BASE_URL })

instance.interceptors.request.use(
  config => {
    console.log(config)    
    return config
  },
  error => {
      console.log(error)
      return alert(`${error.response.data.description}`)
  }
)

instance.interceptors.response.use(
  response => {
    // 토큰 여부
    if (response.data.token) {
      window.location.href = '/'
      sessionStorage.setItem('user', response.data.token)
      alert('로그인에 성공했습니다.')
    } else if (!response.data.token) {
      alert('회원가입에 성공하셨습니다. 로그인을 해주세요!')
      window.location.href = '/login'
    } 
    console.log(response)
    return response
  },
  error => {
    console.log(error) 
    return alert(`${error.response.data.description}`)
  }
)


// 헤더에 토큰 있는 axios
export const logintoken = sessionStorage.getItem('user')

export const instanceHeader = axios.create({ 
  baseURL: BASE_URL,
  headers: { 
    Authorization: `Bearer ${logintoken}`,
  },
},)

instanceHeader.interceptors.request.use(
  config => { 
      return config
  },
  error => {
      console.log(error)
      return alert(`${error.response.data.description}`)
  }
)

instanceHeader.interceptors.response.use(
   (response) => {
    // 첫 로그인인지 판단 -> 첫 로그인이면 세부정보등록으로 이동
    if (response.data.profileImage === null && response.data.streetNameAddress === '') {
      window.location.href = '/signup/detail'
    }
    if(response.headers.location) {
      window.location.href = `${response.headers.location}`
    }
    console.log(response.headers.location)
    return response.data
  },
  error => {
    console.log(error) 
    return error
  }
)

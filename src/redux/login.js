//登入成功
const LOG_SUCCESS = 'LOG_SUCCESS'
//帐号或密码错误
const LOG_ERR = 'LOG_ERR'
//注销登录
const LOG_OUT = 'LOG_OUT'

function loginSuccess(data) {
    return {
        type: LOG_SUCCESS,
        payload: data
    }
}

function loginErr(data) {
    return {
        type: LOG_ERR,
        payload: data
    }
}

//注销 同步
function log_out (){
    return {
        type: LOG_OUT,
        payload: []

    }
}


export function log_in (phone,code){
    return dispatch=>{
        fetch(`http://dj:3000/api/consumer?phone=${phone}&code=${code}`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then((res) => {
            return res.json();
        }).then((res) => {
            dispatch(loginSuccess(res))
        }).catch((error) =>{
            dispatch(loginErr('网络请求失败'))
        })
    }
}

let defaultState = {
    loading: false,
    payload: {},
};

export default function currentUser(state = defaultState , action = {}) {
    switch(action.type){
        case LOG_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload, loading: true});
        case LOG_ERR:
            return Object.assign({}, ...state, {payload: action.payload, loading: false});
        case LOG_OUT:
            return Object.assign({}, ...state, {payload: action.payload, loading: false});
        default :
            return defaultState;
    }
}


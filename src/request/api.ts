import service from "../request/index";

interface LoginData {
    username: string,
    password: string
}

// 登录
export function login(data: LoginData) {
    return service({
        url: "/login",
        method: "post",
        data
    })
}

// 商品列表接口
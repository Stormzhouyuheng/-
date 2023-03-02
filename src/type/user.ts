export interface ListInt {
    id: number,
    nickName: string,
    role: RoleInt[],
    userName: string
}

interface RoleInt {
    role: number,
    roleNme: string
}

interface SelectData {
    role: number,
    nickName: string
}

interface RoleListInt {
    authority: number[]
    roleId: number
    roleName: string
}

interface ActiveInt {
    id: number,
    nickName: string,
    role: number[],
    userName: string
}

export class InitData {
    selectData: SelectData = {
        nickName: '',
        role: 0
    }
    list: ListInt[] = []
    roleList: RoleListInt[] = []
    isShow = false
    active: ActiveInt = { // 当前选中的对象
        id: 0,
        nickName: "",
        role: [],
        userName: ""
    }
}
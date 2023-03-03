export interface ListInt {
    name: string
    roleId: number
    roleList?: ListInt[] // 表示可选
    viewRole?: string // 表示可选
}

export class InitData {
    id: number
    authority: number[]
    constructor(id: number, authority: number[]) {
        this.id = id
        this.authority = authority
    }
    list: ListInt[] = []
    treeRef: any
}
import { faker } from "@faker-js/faker"

export interface User {
    id: number,
    name: string
}


export const users = Array(1000).fill(0).map((_, newId) => ({
    id: newId,
    name: faker.person.fullName(),
}))


export const fetchUsers = async (debouncedSearch: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return users.filter(user => {
        return user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    })
}


export interface ITodo {
    text: string,
    is_favorite: boolean
}


export const fakeData = {
    data: [
        {
            text: 'Купить бананы',
            is_favorite: false
        },
        {
            text: 'Купить людей',
            is_favorite: true
        },
        {
            text: 'Пошутить про бананы',
            is_favorite: false
        },
    ]
}
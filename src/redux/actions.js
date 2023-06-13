import * as type from './typeActions'

export const addProduct = (id, title, price,image, quantity=1) => {
    return {type:type.ADD_PRODUCT, payload: {id, title, price, image ,quantity}}
}

export const removeProduct = (id) => {
    return {type:type.REMOVE_PRODUCT, payload: id}
}

export const emptyCart = () => {
    return {type:type.EMPTY_CART}
}

export const incrementQnt = (id) => {
    return {type:type.INCREMENT_QNT, payload: id}
}

export const decrementQnt = (id) => {
    return {type:type.DECREMENT_QNT, payload: id}
}
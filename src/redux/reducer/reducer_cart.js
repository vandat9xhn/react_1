import { reduxConstFashion } from "../_redux_const/ReduxConst";

// 
const initialState = {
    fashion_actions: [
        // {
        //     shop_model,
        //     product_user,
        //     status,
        //     products: [
        //         {
        //             product_model,
        //             quantity,
        //         }
        //     ]
        // }
    ],
    count_fashion_action: 0,
    is_fetch: false,
};

// 
const reducer_cart = (state = initialState, action) => {
    const {fashion_actions, count_fashion_action} = state

    switch (action.type) {
        //
        // case reduxConstFashion.GET_CART:
        //     const new_fashion_actions = action.payload
        //     const new_count = new_fashion_actions.length ? new_fashion_actions.reduce((a, b) => a + b.products.length) : 0
        //     // 
        //     return { fashion_actions: new_fashion_actions, count_fashion_action: new_count, is_fetch: true };

        // //
        // case reduxConstFashion.ADD_CART_ALREADY_PRODUCT:
        //     const {fashion_action_ix, product_ix, new_count} = action.payload
        //     const product_action = fashion_actions[fashion_action_ix].products[product_ix]
        //     product_action.quantity = new_count
        //     // 
        //     return state
        // //
        // case reduxConstFashion.ADD_CART_ALREADY_SHOP:
        //     const {fashion_action_ix, product_item, new_count} = action.payload
        //     const {products} = fashion_actions[fashion_action_ix]
        //     products.push({product: product_item, quantity: new_count})
        //     // 
        //     return {...state, count_fashion_action: count_fashion_action + 1}
        // //
        // case reduxConstFashion.ADD_CART_NEW_SHOP:
        //     const {new_fashion_action} = action.payload
        //     // 
        //     return {fashion_actions: [...fashion_actions, new_fashion_action], count_fashion_action: count_fashion_action + 1, is_fetch: true}
        
        // //
        // case reduxConstFashion.DELETE_PRODUCTS_CART:
        //     const {fashion_action_ixs, del_count} = action.payload
        //     // 
        //     fashion_action_ixs.forEach(item => {
        //         const {fashion_action_ix, product_ixs} = item
        //         const fashion_action = fashion_actions[fashion_action_ix]
        //         // 
        //         product_ixs.forEach(product_ix => {
        //             fashion_action.splice(product_ix)
        //         });
        //     });
        //     // 
        //     return {...state, count_fashion_action: count_fashion_action - del_count}

        //
        default:
            return state;
    }
};

export default reducer_cart;

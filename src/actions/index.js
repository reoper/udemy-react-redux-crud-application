/**
 * Action
 * 
 * ここにはtypeとactionを定義する
 * またtypeはユニークでなければならない
 */

// 以下にActionCreatorを定義していく

// typeは他でも使用するのでここで定数として定義しておくのがスタンダード
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


// export const increment = () => {
//     return {
//         type: 'INCRIMENT'
//     }    
// }
// 上は下と等価
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})


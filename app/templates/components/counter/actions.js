/* actions.js */
const actions = store => ( {
    increment: state => ( {
        count: state.count + 1,
        text: "up"
    } ),
    decrement: state => ( {
        count: state.count - 1,
        text: "down"
    } )
} );

export default actions;
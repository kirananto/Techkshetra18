export default {
    PUSH_EVENT (state, event) {
        state.events.push(event)
    },
    PUSH_WORKSHOP (state, workshop) {
        state.workshops.push(workshop)
    }
}

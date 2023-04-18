export const selectTechincalEvents = (state) => {
    let events = state.custom.eventList;
    console.log(events)
    return events.filter((event) => event.eventType === "Technical")
}

export const selectCulturalEvents = (state) => {
    let events = state.custom.eventList;
    return events.filter((event) => event.eventType === "Cultural")
}
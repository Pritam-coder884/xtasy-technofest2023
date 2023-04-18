export const selectTechincalEvents = (state) => {
    let events = state.custom.eventList;
    return events.filter((event) => event.eventType === "Technical")
}

export const selectCulturalEvents = (state) => {
    let events = state.custom.eventList;
    return events.filter((event) => event.eventType === "Cultural")
}

export const selectFunEvents = (state) => {
    let events = state.custom.eventList;
    return events.filter((event) => event.eventType === "Fun")
}

export const selectWorkshopEvents = (state) => {
    let events = state.custom.eventList;
    return events.filter((event) => event.eventType === "Workshop")
}


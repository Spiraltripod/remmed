export function setMedicaciones(state, payload){
    state.medicaciones = payload
}

export function setMedicamento(state, payload){
    state.medicamento = payload
}

export function eliminarMedicamento(state, id){
    state.medicamento = state.medicamento.filter(doc => {
        return doc.id != id
    })
}
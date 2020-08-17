import { db, auth, firebase } from '@/firebase'
import router from '@/router'

export function getMedicaciones({commit}){
    const user = firebase.auth().currentUser
    const medicaciones = []
 
    db.collection(user.email).get()
        .then(snapshot => {
            snapshot.forEach( doc => {
                let medicamento = doc.data()
                medicamento.id = doc.id
 
                medicaciones.push(medicamento)
            })
        })
    commit('setMedicaciones', medicaciones)
}

export function getMedicamento({commit}, id){
    const user = firebase.auth().currentUser
 
    db.collection(user.email).doc(id).get()
        .then(doc => {
            let medicamento = doc.data()
            medicamento.id = doc.id
 
            commit('setMedicamento', medicamento)
    })
}

export function agregarMedicacion({dispatch}, medicamento){
    const user = firebase.auth().currentUser
 
    db.collection(user.email).add({
        titulo: medicamento.titulo,
        pastilla: medicamento.pastilla,
        cantidad: medicamento.cantidad,
        instrucciones: medicamento.instrucciones,
        start: medicamento.start,
        end: medicamento.end,
        hora: medicamento.hora,
        terminado: medicamento.terminado,
    })
    .then(() => {
        router.push({name:'inicio'})
    })
    dispatch('getMedicaciones')
}

export function editarMedicacion({commit}, medicamento){
    const user = firebase.auth().currentUser
 
    db.collection(user.email).doc(medicamento.id).update({
        titulo: medicamento.titulo,
        pastilla: medicamento.pastilla,
        cantidad: medicamento.cantidad,
        instrucciones: medicamento.instrucciones,
        start: medicamento.start,
        end: medicamento.end,
        hora: medicamento.hora,
        terminado: medicamento.terminado,
    })
    .then(() => {
        router.push({name:'inicio'})
    })
}

export function eliminarMedicacion({commit, dispatch}, payload){
    const user = firebase.auth().currentUser
 
    db.collection(user.email).doc(payload.id).delete()
    .then(() => {
        console.log('Medicamento fue eliminado')
        dispatch('getMedicaciones')
        router.push({name: 'inicio'})
    })
    .catch( err => {
        console.log(err);
    })
    commit('eliminarTarea', payload.id)
}
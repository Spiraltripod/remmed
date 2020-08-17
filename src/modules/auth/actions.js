
import { auth, db } from '@/firebase'
import router from '@/router'

export function crearUsuario({commit}, payload){
        auth.createUserWithEmailAndPassword(payload.email, payload.pass)
        .then( res => {
            commit('setUsuario', {email: res.user.email, uid: res.user.uid})
 
        db.collection(res.user.email).add({
            nombre: 'Medicacion de Prueba'
        })
        .then(() => {
            router.push({name: 'inicio'})
        })
    })
}

export function ingresoUsuario({commit}, payload){
    auth.signInWithEmailAndPassword(payload.email, payload.pass)
    .then( res => {
        commit('setUsuario', {email: res.user.email, uid: res.user.uid})
        router.push({name: 'inicio'})
    })
    .catch( err => {
        console.log(err)
        commit('setError', err.code)
    })
}

export function detectarUsuario({commit}, payload) {
    if(payload != null){
        commit('setUsuario', {email:payload.email, uid:payload.uid})
    }else {
        commit('setUsuario', payload)
    }
}

export function cerrarSesion({commit}){
    auth.signOut()
    .then(() => {
        commit('setUsuario', null)
        router.push({name: 'login'})
    })
    .catch( err => {
        console.log(err)
    })
}
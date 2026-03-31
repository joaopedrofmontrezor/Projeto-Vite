import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth'
  import { auth } from './firebase'
  
  export const loginWithEmail = async (email, password) => {
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password)
      console.log('Login realizado')
      return credential
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const registerWithEmail = async (email, password) => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
      console.log('Cadastro realizado')
      return credential
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const logout = async () => {
    try {
      await signOut(auth)
      console.log('Logout realizado')
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  export const observeAuthState = (onChange) =>
    onAuthStateChanged(auth, onChange)
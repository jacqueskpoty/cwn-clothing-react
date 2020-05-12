import {takeLatest,call,put,all} from 'redux-saga/effects';
import { userActionTypes }  from './User.Types';
import { googleProvider,auth,createUserProfileDocument,getCurrentUser } from '../../Firebase/Firebase.Utils';
import { signInFailed, signInSuccess, logoutSuccess, logoutFailed, signupSuccess, signupFailed } from './User.Action';

//sign in saga used by other authentication sagas
function*  signIn(user,additionalData){
    try {
        const userRef = yield call(createUserProfileDocument,user,additionalData);
        const userSnapShopt = yield userRef.get();

        yield put(signInSuccess({id: userSnapShopt.id,...userSnapShopt.data()}))

    } catch (error) {
       yield put(signInFailed(error));
    }
}

//sign in with googgle saga
export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.LOGIN_WITH_GOOGLE_START,signInWithGoogle);
}

export function* signInWithGoogle(){
    try {

        const { user } = yield auth.signInWithPopup(googleProvider);
        yield call(signIn,user);

    } catch (error) {
       yield put(signInFailed(error));
    }
}

//sign in with email saga
export function* onEmailPasswordSignInStart(){
    yield takeLatest(userActionTypes.LOGIN_WITH_EMAIL_PASSWORD_START,emailPasswordSignIn);
}

export function* emailPasswordSignIn({payload:{email,password}}){
    try {

        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield call(signIn,user);

    } catch (error) {
       yield put(signInFailed(error));
    }
}

//Checking session Saga
export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* isUserAuthenticated(){
     try {
         const authUser = yield getCurrentUser();
         if(!authUser){
             return;
         }
         yield call(signIn,authUser);
     } catch (error) {
         yield put(signInFailed(error));
     }
}

//log out saga
export function* onLogOut(){
    yield takeLatest(userActionTypes.LOGOUT_START,logOut);
}

export function* logOut(){
    try {
        yield auth.signOut();
        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFailed(error));
    }
}

//Sign uo saga
export function* onSignUp(){
    yield takeLatest(userActionTypes.SIGNUP_START, signUp);
}

export function* signUp({payload:{displayName,email,password}}){

     try {
            const {user} = yield auth.createUserWithEmailAndPassword(email,password);         

            yield put(signupSuccess(user,{displayName}));
            
        } catch (error) {
            yield put(signupFailed(error));
        }
}

//Sign in after sign up
export function* onsignUpSuccess(){
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp );
}

export function* signInAfterSignUp({payload:{user,additionalData}})
{
    yield call(signIn,user,additionalData);
}

//combining all sagas
export function* userSaga(){
    yield all([ call(onGoogleSignInStart),
                call(onEmailPasswordSignInStart),
                call(onCheckUserSession),
                call(onLogOut),
                call(onSignUp),
                call(onsignUpSuccess)
            ]);
}
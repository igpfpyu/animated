import { createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';

const logger= store => next => action =>{
    let result=next(action);
    return result;
};
const createStoreWithMiddleware=applyMiddleware( thunk, logger )(createStore);

export default configureStore=(initialState)=>{
    let store=createStoreWithMiddleware(RootReducer, initialState);
    if(module.hot){
        module.hot.accept(()=>{
            const nextRootReducer=RootReducer.default;
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}

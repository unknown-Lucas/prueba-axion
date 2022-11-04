import * as fromReducer from './filter.reducer'
import { onSearch } from '../actions/filter.actionts'

describe('filter reducer', () => {
    describe('unknownAction', () => {
        it('should return the default state', () => {
            const { initialState } = fromReducer;
            const action = { type: 'unknown' };
            const state = fromReducer.filterReducer(initialState, action);
            expect(state).toEqual(initialState);
        })
    })
    describe('onSearch', () => {
        it('should replace the state value',() => {
            const { initialState } = fromReducer;
            const newState = 'test'
            const action = onSearch({ value:newState })
            const state = fromReducer.filterReducer(initialState,action)
            expect(state).toEqual(newState)
        })
    })
})
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react'

export const useFetching = (request, selector) => {
    const dispatch = useDispatch();
    const {status, ...state} = useSelector(selector);

    useEffect(() => {
       if (status === false) {
           dispatch(request);
       }
    }, [dispatch, status])

    return {status, ...state}
}
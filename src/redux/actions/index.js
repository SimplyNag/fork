import { PERSONAL_FORM, PROFESSIONAL_FORM } from './actionType';

const newAction = (actionType, state) => ({ type: actionType, state });
console.log(newAction);

export default newAction;

// import {IconRemove} from "../icons/icon-remove";
import css from './button.module.scss'

// const IconRemove => 
export const Button = (props) => {
    return (
        <div className={`${props.className} ${ css.button}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

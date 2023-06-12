import css from './card.module.scss';
import {useParams, useNavigate} from 'react-router-dom'
import {Button} from "../../shared/buttons/button";
import {IconRemove} from "../../shared/icons/icon-remove";
import {useTasks} from "../../../hooks/tasks/use-tasks";
import {useEffect, useState} from "react";
// import {IconConfirm} from "../../shared/icons/icon-confirm";
// import {IconConfirm} from "../../shared/icons/icon-confirm";


export const Card = () => {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();
    
    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId, getTaskById])

    const navigateBack = () => navigate(-1);

    return (
        <div className={css.card}>
            {task &&
            <div  className={css.body}>
                <textarea className={css.name}
                          value={task.name}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  name: e.target.value
                              })}
                />
   <textarea className={css.description}
                          onChange={(e) =>
                              setTask({
                                  ...task,
                                  description: e.target.value
                              })}
                          value={task.description}
                />
            </div>
            }
                  <Button className={css['.button-close']} onClick={navigateBack}>
                <IconRemove/>
            </Button>
            <div className={css.footer}>
                <button onClick={() => {
                    updateTask(task);
                    navigateBack();
                }}>Save Card</button>
            </div>
        </div>
    )
}

// let minus = document.querySelectorAll('.button-close');
// minus.forEach((elem)=>{
//   elem.addEventListener('click',removeParent);
// });
// function removeParent(){
//     let revDiv = this.parentElement;
//     revDiv.remove();
// }
// // eslint-disable-next-line no-undef
// $(document).navigateBack(function(){
//     // eslint-disable-next-line no-undef
//     $('body').on('click', '.button-close', function(){
//       // eslint-disable-next-line no-undef
//       $(this).hide();
//     });
//   });

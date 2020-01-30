import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    // onLabelClick = () => {
    //     this.setState(( {done} ) => {
    //         return{
    //             done: !done
    //         }
    //     })
    //     // console.log( this.props.label )
    // };
    //
    // onBtnImpClick = () => {
    //     this.setState(( {important} ) => {
    //         return{
    //             important: !important
    //         };
    //     })
    // };

    render() {

        const { label, onDelete, onToggleImportant, onToggleDone, done, important } = this.props;
        let classNames = 'li_order';

        if(done){
        classNames += ' done';
        }

        if(important){
        classNames += ' important';
        }

        return (
                <span className={classNames}>
                <span className="li_order_item"
                onClick={onToggleDone } > {label} </span>
                <button className="btn_order_del"
                onClick = { onDelete }> <i className="fas fa-trash-alt"></i></button>
                <button className="btn_order_imp"
                onClick={ onToggleImportant }><i className="fas fa-exclamation"></i> </button>
                </span>
        )
    };
}
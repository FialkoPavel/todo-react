import React, { Component } from "react";

import './app.css';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDOList from "../todo-list/todo-list";
import TodoButton from "../todo-button/todo-button";


 export default class App extends Component {
     maxId = 100;

    state = {
        todoDate : [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Create new App')
        ],
        temp: '',
        filter: '' //All Active Done
    };

    createTodoItem(label){
        return{
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
     // toggleProperty(arr, id, property){
     //     const idx = arr.findIndex((el) => el.id === id);
     //     const oldItem = arr[idx];
     //     const newItem = {...oldItem, [property]: !oldItem[property]};
     //     return [...oldItem.slice(0, idx),
     //         newItem,
     //         ...oldItem.slice(idx+1)];
     // }

     onToggleDone = (id) => {
         this.setState(({todoDate}) => {
             const idx = todoDate.findIndex((el) => el.id === id);
             const oldItem = todoDate[idx];
             const newItem = {...oldItem, done: !oldItem.done};
             const newArray = [...todoDate.slice(0, idx),
                 newItem,
                 ...todoDate.slice(idx+1)];
             return{
                 todoDate: newArray
             }
         })
     };

     onToggleImportant = (id) => {
       this.setState(({todoDate}) => {
           const idx = todoDate.findIndex((el) => el.id === id);
           const oldItem = todoDate[idx];
           const newItem = {...oldItem, important: !oldItem.important};
           const newArray = [...todoDate.slice(0, idx),
                            newItem,
                            ...todoDate.slice(idx+1)];
           return{
               todoDate: newArray
           }
       })
    };

     addItem = (text) => {
        let newItem = this.createTodoItem(text);
        this.setState(({todoDate}) => {
           let newArray = [...todoDate, newItem];
           return{
               todoDate: newArray
           }
        })
     };

    deleteItem = ( id ) => {
       this.setState(( {todoDate} ) => {
           const idx = todoDate.findIndex((el) => el.id === id);
           const result = [...todoDate.slice(0, idx), ...todoDate.slice(idx+1)];
           console.log(result);
           return {
               todoDate: result
           }
       })
    };

    search(items, temp){
        if (temp.length === 0){
            return items;
        }
        return items.filter(item => {
        return item.label
            .toLowerCase()
            .indexOf(temp.toLowerCase()) > -1})
    }

    filter(items, filter){
        switch (filter) {
            case 'All':
                return items;
            case  'Active':
                return items.filter((item) => !item.done);
            case 'Done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

     onSearchChange = (temp) => {
       this.setState({temp});
     };
     onFilterChange = (filter) => {
         this.setState({filter});
     };


     render() {
        const {todoDate, temp, filter} = this.state;
        const onVisibleTodo = this.filter(this.search(todoDate, temp), filter);

        const doneCount = todoDate.filter((el) => el.done).length;
        const todoCount = todoDate.length - doneCount;

          return (
                  <div className="todoAll">
                    <AppHeader todo={todoCount} done={doneCount}/>
                    <div className="inpBtn">
                      <SearchPanel
                      onSearchChange = {this.onSearchChange}/>
                      <ItemStatusFilter
                          filter={filter}
                      onFilterChange = {this.onFilterChange}/>
                   </div>
                   <ToDOList
                    onDelete={ this.deleteItem }
                    todos={onVisibleTodo}
                    onToggleImportant = { this.onToggleImportant }
                    onToggleDone = { this.onToggleDone }/>
                   <TodoButton
                    onItemAdded={this.addItem}
                   />
                  </div>
          )
    }
 }
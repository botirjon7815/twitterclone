import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import PoststatusFilter from "../PostStatusFilter"
import PostList from "../PostList"
import PostAddForm from "../PostAddForm"
import  "./App.css"

import React from "react"

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : [

                {label: 'Going to learn React JS', important: false, like:false, id:1},
                {label: 'That is go good', important: false, like:false, id:2},
                {label: 'I need a break', important: false, like:false, id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.AddItem = this.AddItem.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)

        this.maxId = 4
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0, index)
            const after = data.slice(index + 1)

            const newArr = [...before , ...after]

            return {
                data: newArr
            }
        })
    }

    AddItem(body){
        const newItem = {
            label:body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return{
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const oldItem = data[index]

            const newItem = {...oldItem, important: !oldItem.important}

            const newArr = [...data.slice(0, index) , newItem , ...data.slice(index + 1) ]

            return {
                data: newArr
            }
        })
    }

    

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const oldItem = data[index]

            const newItem = {...oldItem, like: !oldItem.like}

            const newArr = [...data.slice(0, index) , newItem , ...data.slice(index + 1) ]

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term){
        if(term.length === 0){
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like)

        }else{
            return items
        }
    }

    onFilterSelect(filter){
    this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state
        const Liked = data.filter(item => item.like).length
        const AllPosts = data.length

        const visiblePosts = this.filterPost(this.searchPost(data , term), filter)



        return (
            <div className="app">
            <AppHeader Liked={Liked} AllPosts={AllPosts} />
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                <PoststatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
            </div>
            <PostList
            posts={visiblePosts} 
            onDelete={this.deleteItem}  
            onToggleImportant={this.onToggleImportant}
            onToggleLiked={this.onToggleLiked}
            
            />
            <PostAddForm onAdd={this.AddItem} />
            </div>
        );
    }

}

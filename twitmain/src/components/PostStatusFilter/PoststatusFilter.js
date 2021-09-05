
import React from "react";

export default class PoststatusFilter extends React.Component {

    constructor(props){
        super(props)
        this.buttons = [
            {name: 'all' , label: 'All' },
            {name: 'like', label: 'Liked'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return(
                <button 
                key={name} 
                type="button" 
                onClick={() => this.props.onFilterSelect(name)}
                className={`btn ${clazz}`}>
                    {label}
                </button>
            )
        })
        return (
            
            <div className="btn-group">
            {buttons}
            </div>
        
        );
    }
}
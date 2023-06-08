import React from 'react'

export default class ClassChild extends React.Component {
    render(){
        return(
            <h4>Hi! {this.props.name} from Class Component </h4>
        )
    }
  
}


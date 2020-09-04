import React, { Component } from 'react'

export default class ListKinh extends Component {

       

    renderKinh = () =>{
        return this.props.mangKinh.map((Item,index)=>{
            return <button onClick={()=>{   
             this.props.changeGlass(Item)
            }} key={index} className="d-inline"><img className="kinh" style={{width:150,height:50}} src={Item.url}/></button>
            
        })
    }

    render() {
        return (
            <div className="ListGlasses">
                {this.renderKinh()}
                
                
            </div>
        )
    }
}

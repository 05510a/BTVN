import React, { Component } from 'react'

import './Style.scss';
import ListKinh from './ListKinh';
export default class BaiTapThuKinh extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './img/glassesImage/v2.png', desc: 'Light Kame square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './img/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './img/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './img/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './img/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './img/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './img/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './img/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       ];

       state ={
               Kinh:{ id: 1, price: 30, name: 'GUCCI G8850U', url: './img/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
       }
       
       changeGlass = (Item) =>{
            this.setState({
                Kinh: Item
                
            })
    }

    render() {
        return (
            <div className="appGlasses" >
              <div className="Cover-background">
                <div className="header">
                    <h3>TRY GLASSES APP ONLINE</h3>
                    
                </div>
                <div className="row container">
                        <div className="ImgGlasses col-6">
                            <img style={{width:300,height:250}} src="./img/glassesImage/model.jpg"/>
                            <div className="Glasses__detail">
                                <h3>{this.state.Kinh.name}</h3>
                                <p>{this.state.Kinh.desc} </p>
                                
                            </div>
                            <img className="glass" src={this.state.Kinh.url}></img>
                            
                        </div>
                        <div className="ImgBase col-6">
                        <img style={{width:300,height:250}} src="./img/glassesImage/model.jpg"></img>   
                        </div>
                    </div>
                    <div className=" container">
                        <ListKinh mangKinh={this.arrProduct} changeGlass={this.changeGlass}/>
                    </div>
            </div>
            </div>
        )
    }
}

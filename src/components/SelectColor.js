import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors=['red','orange','yellow','green','blue','indigo','purple'];

class SelectColor extends Component{
    static contextType=ColorContext;
    handleSetColor=color=>{
        this.context.actions.setColor(color);
    }
    handleSetSubColor=subcolor=>{
        this.context.actions.setSubcolor(subcolor);
    }
    render(){
        return(
            <div>
                <h2>Choose The Color</h2>
                <div style={{displayu:'flex'}}>
                    {colors.map(color=>(
                        <div key={color} style={{
                            background:color,
                            width:'24px',
                            height:'24px',
                            cursor:'pointer'
                        }} onClick={()=>{this.handleSetColor(color)}} 
                        onContextMenu={event=>{
                            event.preventDefault();
                            this.handleSetSubColor(color);
                        }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default SelectColor;
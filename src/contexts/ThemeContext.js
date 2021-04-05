import React from "react"

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{
    state={
        isDarkTheme:true,
        dark:{bg:"black",txt:"white",hover:"rgba(231,76,60,0.8)"},
        light:{bg:"white",txt:"black",hover:"rgba(254,209,54,0.8)"},
    }
    changeTheme=()=>{
        this.setState({
            isDarkTheme:!this.state.isDarkTheme
        })
    }
    render(){
        return (
            <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;
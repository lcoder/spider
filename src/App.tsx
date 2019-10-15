import React , { useState , useCallback } from 'react'
import './App.css'
import spider from "./spider"

const defaultTxt = `var a = 2;`

const App: React.FC = () => {
    const [ text , setText ] = useState(defaultTxt);
    const go2Transform = useCallback( () => {
            spider( text )
        } , [ text ] )
    const changeText = useCallback( ( event: React.SyntheticEvent ) => {
            const value = (event.target as HTMLInputElement).value
            setText( value )
        } , [] )
    return (
        <div className="App">
        请输入合法的JavaScript语句：<br/>
        <textarea
            value={ text }
            onChange={ changeText }
            rows={10}
            cols={110}
            spellCheck={false}
        /><br/>
        <button onClick={ go2Transform }>转换</button>
        </div>
    )
}

export default App

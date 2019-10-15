import React , { useState , useCallback, useEffect } from 'react'
import './App.css'
import spider from "./spider"

const defaultTxt = `var a = 1;`

const App: React.FC = () => {
    const [ text , setText ] = useState(defaultTxt);
    const [ tokenStr , setTokenStr ] = useState( '' )
    const go2Transform = useCallback( () => {
            const tokens = spider( text )
            setTokenStr( JSON.stringify( tokens , null , 4 ) )
        } , [ text ] )
    const changeText = useCallback( ( event: React.SyntheticEvent ) => {
            const value = (event.target as HTMLInputElement).value
            setText( value )
        } , [] )
    useEffect( () => {
        go2Transform()
    } , [ go2Transform ] )
    return (
        <div className="App">
            <div>
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
            <div>
                <pre>
                    { tokenStr }
                </pre>
            </div>
        </div>
    )
}

export default App

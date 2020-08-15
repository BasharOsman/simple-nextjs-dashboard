import React, { Component } from 'react'
import globalStyle from 'styles/global'
export default class MyApp extends Component {

    render() {
        const {  Component, pageProps }=this.props
        return (
            <>
                <Component {...pageProps} />
            <style jsx global>{globalStyle}</style>
            </>
            )
    }
}

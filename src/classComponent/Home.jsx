import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            isOk: true
        }
    }

    componentDidMount (){
        fetch('https://www.nodemy.vn/api/bootcamp-1-s')
        .then(data => data.json())
        .then(data => {
            console.log(15, data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate (prevProps, prevState){
        if(prevState.count !== this.state.count){
            fetch('https://www.nodemy.vn/api/bootcamp-1-s')
            .then(data => data.json())
            .then(data => {
                if(this.state.count >  data.length){
                    alert('khong du hang ton kho')
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    down = () => {
        this.setState({count : this.state.count + 1 })
    }

    render () {
        return (
            <div>
                <h1>Day la trang Home {this.props.data.user} / {this.props.data.email}</h1>
                <p>{this.state.count}</p>
                <button onClick={this.down}>down</button>
            </div>
        )
    }
}

export default Home
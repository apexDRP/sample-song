import React, {Component} from 'react';
import '../web_resources/css/style.css';

//inline style for submitSong component
const submitBox = {
        fontSize: '1vw',
        fontFamily: 'poppins',
        width: '35vw',
        height: 'auto',
        padding: '1vw',
        margin: '2vw',
        boxSizing: 'border-box',
        border: '0.18vw solid #ff0000',
        borderRadius: '1.3vw',
    }

class SubmitSongs extends Component {
    constructor(props) {
        super(props);

        //initializes the class properties
        this.state = {
            title: '',
            artist: '',
            genre: ''
        }

        //passing class context to each method.
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    /*
    this triggers when user type inputs in inputs fields
    this store input fields values to class property values
    */
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /*
    this triggers when user click the submit button
    form data will be send in http body as JSON object
    fetch method post the song information to API
    */
    submitHandler(event) {
        event.preventDefault(); //prevent refresh of input values
        fetch('http://localhost:3000/songs', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            console.log(response);
            alert('Song Inserted Successfully');
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return <div style={submitBox}>
            <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td><input type="text" name="title" value={this.state.title}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Artist</td>
                        <td><input type="text" name="artist" value={this.state.artist}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td><input type="text" name="genre" value={this.state.genre}
                                   onChange={this.changeHandler} className='textBox' autoComplete='off' required/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='button'>Submit</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    }
}

export default SubmitSongs;
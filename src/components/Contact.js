import React,{Component} from 'react';

export class Contact extends Component {

    render(){
        return(
            <div className="mt-5 d-flex justify-content-center">
                {/* <h3>Welcome to Contact us page</h3> */}
                <label>Name</label>
                <input type="text"/><br />
                <label>Email</label>
                <input type="text"/><br />
                <label>Subject</label><br />
                <textarea></textarea>
                <input type="submit" value="contact us"/>

            
            </div>
        )

    }
}

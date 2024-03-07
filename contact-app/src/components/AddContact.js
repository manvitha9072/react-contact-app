// import React from "react";

// //class component
// class AddContact extends React.Component {
//     state = {
//         name:"",
//         email:"",
//     }
//     add = (e) => {
//         e.preventDefault();
//         if(this.state.name==="" || this.state.email==="") {
//             alert("All this fields are mandatory");
//             return;
//         }
//         console.log("rerg")
//         this.props.AddContactHandler(this.state);
//         const s = JSON.parse(localStorage.getItem("contacts"))
//         s.push(this.state)
//         localStorage.setItem("contacts", JSON.stringify(s))
//         this.setState ({name:"", email:""});

//         console.log(this.state);
//     }
//     render(){
//         return (
//             <div className="ui main">
//                 <h2> Add Contact</h2>
//                 <form className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}></input>
//                         <label>Email</label>
//                         <input type="text" name="email" placeholder="eMail" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}></input>
//                         <div>
//                             <button className="ui button blue">Add</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }
// export default AddContact;
import React from "react";
import { Link } from "react-router-dom";
import {withHistory} from "react-router-dom";
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        isContactAdded: false,
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields are mandatory");
            return;
        }

        this.props.AddContactHandler(this.state);

        // Update local storage
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(this.state);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        this.setState({ name: "", email: "", isContactAdded: true });
    };

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        <div>
                            <button className="ui button blue">Add</button>
                        </div>
                    </div>
                </form>

                {/* if (isContactAdded) {
                    return (
                        <div>
                            <p>Contact added successfully!</p>
                        </div>
                    );
                } */}

                {this.state.isContactAdded && (
                    <div>
                        <p>Contact added successfully!</p>
                        <Link to="/">
                            <button className="ui button blue" onClick={() => { this.setState({ isContactAdded: false }); }}>
                                View Contacts
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default AddContact;

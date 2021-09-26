import React, {useState} from 'react';

export default function LoginForm({history}) {

    const [formData, setFormData] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    // userName = formData;
    history.push(`/collection/user/${formData}`)
}

const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
};

return (
    <div className="container">
        <div className="login_container">
        <form className="form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData}
                onChange={handleChange}
                placeholder="Enter a BGG username"
                />
            <button className="login_btn btn">Submit</button>
        </form>
        </div>

    </div>

)
}


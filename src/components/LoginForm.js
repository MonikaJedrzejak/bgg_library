import React, {useState} from 'react';

export default function LoginForm() {
    const [userName,setUserName] = useState(null);
    const [formData, setFormData] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(formData);
    console.log(userName);
}

const handleChange = (e) => {
    e.preventDefault();
    setFormData(e.target.value);
};

return (
    <div className="container">
        <div className="login_container">
        <form className="form">
            <input
                type="text"
                name="username"
                value={formData}
                onChange={handleChange}
                placeholder="Enter a BGG username"
                />
            <button className="login_btn btn" onClick={handleSubmit}>Submit</button>
        </form>
        </div>

    </div>

)
}


//     return (
//         <div>
//             {!userName ? (
//             <form>
//                     <input
//                         type="text"
//                         name="username"
//                         value={formData}
//                         onChange={handleChange}
//                         placeholder="Enter a BGG username"
//                     />
//                     <button onClick={handleSubmit}>Submit</button>
//                 </form>
//                  ) : (
//                      <div>
//                          Hello {userName}
//                          <GameList userProps={userName}/>
//                      </div>
//                     )}
//         </div>
//     )
// }
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Collection from './Collection.js';

export default function LoginForm({userName, history}) {
    // const [userName,setUserName] = useState(null);
    const [formData, setFormData] = useState("");
    // console.log(user);

const handleSubmit = (e) => {
    e.preventDefault();
    userName = formData;
    history.push(`/collection/user/${formData}`)
    // setUserName(formData);
    // console.log(user);
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
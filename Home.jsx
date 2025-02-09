// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// function Home() {
//     const [roomCode,setRoomCode]=useState("");

//     const navigate=useNavigate();

//     const handleFormSubmit=(event)=>{
//         event.preventDefault();
//         navigate(`/room/${roomCode}`);
//     };
//   return (
//      <>
//      <div className="homepage">
//         <form onSubmit={handleFormSubmit} className="form">
//             <div>
//                 <label>Enter Room Code</label>
//                 </div>
//                 <div>
//                 <input value={roomCode} onChange={(e)=>setRoomCode(e.target.ariaValueMax)} 
//                 type="text" name="roomCode" 
//                 required placeholder="Enter Your RoomCode"/>
//             </div>
//             <button type="submit">Enter Room</button>
//         </form>

//      </div>
//      </>
//   );
// }

// export default Home;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [roomCode, setRoomCode] = useState("");

    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <div className="homepage">
            <div className="container">
                <h1>Welcome To MeetUp</h1>
                <form onSubmit={handleFormSubmit} className="form">
                    <div className="input-group">
                        <label><b>Join Video Meeting</b></label>
                      
                        <input 
                            value={roomCode} 
                            onChange={(e) => setRoomCode(e.target.value)} 
                            type="text" 
                            name="roomCode" 
                            required 
                            placeholder="Enter Your Room Code"
                            className="room-input"
                        />
                    </div>
                    <button type="submit" className="enter-btn">Enter Room</button>
                </form>
            </div>
        </div>
    );
}

export default Home;

import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneIphone, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to= "/newUser" >
            
                <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://i.pinimg.com/originals/11/7e/93/117e9371c1a30a8de6fe51ac861cf247.jpg" 
                    alt="" className="userShowImg" 
                    />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Homero Simpson</span>
                    <span className="userShowUserTittle">Software Engineer</span>
                    
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Acount Details</span>
                    <div className="userShowInfo">
                       <PermIdentity className="userShowIcon"/>
                       <span className="UserShowInfoTitle">Homero Simpson</span>
                    </div>
                    <div className="userShowInfo">
                       <CalendarToday className="userShowIcon"/>
                       <span className="UserShowInfoTitle">21.04.1995</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                       <PhoneIphone className="userShowIcon"/>
                       <span className="UserShowInfoTitle">+595 971 699 228</span>
                    </div>
                    <div className="userShowInfo">
                       <MailOutline className="userShowIcon"/>
                       <span className="UserShowInfoTitle">HomeroSimpson@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                       <LocationSearching className="userShowIcon"/>
                       <span className="UserShowInfoTitle">New York / USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" 
                            placeholder="Homerosimpson" 
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" 
                            placeholder="Homero Simpson" 
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" 
                            placeholder="Homerosimpson@gmail.com" 
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" 
                            placeholder="+595 971 699 228" 
                            className="userUpdateInput"
                            />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" 
                            placeholder="New York | USA" 
                            className="userUpdateInput"
                            />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://i.pinimg.com/originals/11/7e/93/117e9371c1a30a8de6fe51ac861cf247.jpg" 
                            alt="" />
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon" /></label>
                            <input type="file" id="file" style={{display: "none"}}/>

                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                    

                </form>
            </div>
        </div>

    </div>
  )
}

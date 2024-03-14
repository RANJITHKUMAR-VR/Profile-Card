import React from 'react';
function User(props){
  return(
    <div className='card-container'>
      <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
      <img src="https://picsum.photos/380/200" alt="profile"/>
      <h3>{props.name}</h3>
      <h3>{props.place}</h3>
      <p>{props.description}</p>
      <div className='button'>
        <button className='primary'>message</button>
        <button className='primary outline'>Following</button>
      </div>
      <div className='skills'>
        <h6>Skills</h6>
        <ul>
        {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}</ul>
      </div>
    </div>
  );
}
const UserCard=()=>{
  return(
    <>
    <User name="James" place="America" description="frontend Developer" skills={["HTML","CSS","JS","ReactJs","NodeJs","Frontend Developer"]} online={false}/>
      <User name="James" place="America" description="frontend Developer" skills={["HTML","CSS","JS","ReactJs","NodeJs","Frontend Developer"]} online={true}/>
    </>
  );
};

export default UserCard;
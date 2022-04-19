import React, { useState } from 'react';

export const AddHouse = () => {

  const [house, setHouse] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    image: ""
  })

  const changeName = (e) => {
    setHouse({...house, name: e.target.value})
  }
  const changeOwner = (e) => {
    setHouse({...house, ownerName: e.target.value})
  }
  const changeAddress = (e) => {
    setHouse({...house, address: e.target.value})
  }
  const changeArea = (e) => {
    setHouse({...house, areaCode: e.target.value})
  }
  const changeRent = (e) => {
    setHouse({...house, rent: e.target.value})
  }
  const changeImg = (e) => {
    setHouse({...house, image: e.target.value})
  }
  const submit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={submit}>
        <label>name</label>
        <input type="text" className="name" value={house.name} required onChange={changeName} />
        <br />
        <label>ownerName</label>
        <input value={house.ownerName} type="text" className="ownerName" required onChange={changeOwner} />
        <br />
        <label>address</label>
        <input value={house.address} type="text" className="address" required onChange={changeAddress} />
        <br />
        <label>areaCode</label>
        <input value={house.areaCode} type="text" className="areaCode" required onChange={changeArea} />
        <br />
        <label>rent</label>
        <input value={house.rent} type="text" className="rent" required onChange={changeRent} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input value={house.image} type="text" className="image" required onChange={changeImg} />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

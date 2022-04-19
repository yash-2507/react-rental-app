import "./Rentals.css";
import React, { useState } from "react"
import "./Rentals.css";

export const Rentals = () => {
  let data = [{"id":1,"name":"Shaylynn Winton","ownerName":"Burch Lopez","address":"141 Nelson Parkway","areaCode":43901,"rent":10541,"preferredTenants":"Married","image":null},
  {"id":2,"name":"Virginia Schulze","ownerName":"Titos Mattussevich","address":"21715 Lotheville Junction","areaCode":56232,"rent":17433,"preferredTenants":"Bachelors","image":null},
  {"id":3,"name":"Rosco Pedrollo","ownerName":"Rebbecca Pilipyak","address":"2677 Fair Oaks Parkway","areaCode":70003,"rent":3144,"preferredTenants":"Married","image":null},
  {"id":4,"name":"Tiffani Nisard","ownerName":"Daryl Pascoe","address":"8 6th Plaza","areaCode":67297,"rent":15817,"preferredTenants":"Married","image":null},
  {"id":5,"name":"Esmeralda Hassell","ownerName":"Jyoti Hammant","address":"3157 Oak Alley","areaCode":88859,"rent":7907,"preferredTenants":"Married","image":null},
  {"id":6,"name":"Milka Cutler","ownerName":"Aleda Gergolet","address":"523 International Place","areaCode":86749,"rent":13615,"preferredTenants":"Bachelors","image":null},
  {"id":7,"name":"Avrit Vedenichev","ownerName":"Marya Yabsley","address":"75 Columbus Parkway","areaCode":76771,"rent":7369,"preferredTenants":"Married","image":null},
  {"id":8,"name":"Thurstan Hegdonne","ownerName":"Gavra Livingston","address":"824 Del Mar Avenue","areaCode":87846,"rent":3692,"preferredTenants":"Married","image":null},
  {"id":9,"name":"Kristoforo Hughs","ownerName":"Sorcha Linde","address":"968 Declaration Center","areaCode":89748,"rent":5546,"preferredTenants":"Bachelors","image":null},
  {"id":10,"name":"Salvador Orrice","ownerName":"Rosa Culshaw","address":"931 Lake View Junction","areaCode":79471,"rent":13823,"preferredTenants":"Married","image":null},
  {"id":11,"name":"Merissa Alf","ownerName":"Faber Cavell","address":"5047 Lawn Circle","areaCode":47386,"rent":15596,"preferredTenants":"Bachelors","image":null},
  {"id":12,"name":"Rhody Frowde","ownerName":"Clemmie Le Brum","address":"8608 Kropf Way","areaCode":67524,"rent":16652,"preferredTenants":"Bachelors","image":null},
  {"id":13,"name":"Shirleen Lathee","ownerName":"Augustina Ferrarese","address":"805 Scott Road","areaCode":22946,"rent":12712,"preferredTenants":"Married","image":null},
  {"id":14,"name":"Adelheid Cordell","ownerName":"Maribel McNutt","address":"10 Bunker Hill Parkway","areaCode":70124,"rent":16167,"preferredTenants":"Bachelors","image":null},
  {"id":15,"name":"Kinsley Spieck","ownerName":"Dave Morales","address":"081 Jackson Drive","areaCode":57973,"rent":18281,"preferredTenants":"Married","image":null},
  {"id":16,"name":"Woodman Jays","ownerName":"Osbourn Chittenden","address":"7 Miller Drive","areaCode":22551,"rent":12524,"preferredTenants":"Bachelors","image":null},
  {"id":17,"name":"Alano Gulc","ownerName":"Shay Caughey","address":"653 Sunnyside Park","areaCode":19876,"rent":19865,"preferredTenants":"Married","image":null},
  {"id":18,"name":"Marcos Antoniazzi","ownerName":"Asher Chell","address":"23 Canary Circle","areaCode":58722,"rent":14313,"preferredTenants":"Married","image":null},
  {"id":19,"name":"Creight Knight","ownerName":"Charlton Iveson","address":"96 Swallow Court","areaCode":58000,"rent":5904,"preferredTenants":"Married","image":null},
  {"id":20,"name":"Gilemette Cassar","ownerName":"Gretel Radloff","address":"4260 Rusk Pass","areaCode":40289,"rent":9078,"preferredTenants":"Married","image":null},
  {"id":21,"name":"Miranda Edmund","ownerName":"Lisle Duff","address":"8991 Petterle Parkway","areaCode":30233,"rent":6605,"preferredTenants":"Bachelors","image":null},
  {"id":22,"name":"Nye Offill","ownerName":"Merell Jecks","address":"54929 Ronald Regan Hill","areaCode":17928,"rent":13640,"preferredTenants":"Married","image":null},
  {"id":23,"name":"Ilario Gadsden","ownerName":"Truman Greenman","address":"59520 Mariners Cove Lane","areaCode":54146,"rent":7582,"preferredTenants":"Bachelors","image":null},
  {"id":24,"name":"Cecilius Steeden","ownerName":"Jenica Ugo","address":"97376 Pennsylvania Drive","areaCode":52236,"rent":15269,"preferredTenants":"Married","image":null},
  {"id":25,"name":"Arlee Echallier","ownerName":"Karia Handman","address":"873 Longview Terrace","areaCode":78535,"rent":2650,"preferredTenants":"Married","image":null},
  {"id":26,"name":"Jamil Blondin","ownerName":"Alberik Sweedland","address":"796 Clemons Plaza","areaCode":37013,"rent":19728,"preferredTenants":"Bachelors","image":null},
  {"id":27,"name":"Liana Pasticznyk","ownerName":"Ernaline Dhillon","address":"0327 Mosinee Crossing","areaCode":37685,"rent":4873,"preferredTenants":"Married","image":null},
  {"id":28,"name":"Jamie Giovanetti","ownerName":"Glen Agent","address":"83430 Amoth Park","areaCode":46452,"rent":16036,"preferredTenants":"Married","image":null},
  {"id":29,"name":"Isacco Maytom","ownerName":"Stacee Marchington","address":"4534 Veith Way","areaCode":24385,"rent":13331,"preferredTenants":"Bachelors","image":null},
  {"id":30,"name":"Gilbert Ceely","ownerName":"Felice Daniel","address":"62184 Arapahoe Center","areaCode":69200,"rent":9219,"preferredTenants":"Married","image":null},
  {"id":31,"name":"Johnathon Attac","ownerName":"Rodd Shinefield","address":"86802 Crownhardt Center","areaCode":75372,"rent":13119,"preferredTenants":"Married","image":null},
  {"id":32,"name":"Leisha Linnett","ownerName":"Enrique Neale","address":"92 Sunbrook Hill","areaCode":13304,"rent":12673,"preferredTenants":"Bachelors","image":null},
  {"id":33,"name":"Avrit Graffham","ownerName":"Nevsa Yeandel","address":"47600 Bluejay Terrace","areaCode":56081,"rent":10117,"preferredTenants":"Married","image":null},
  {"id":34,"name":"Margaux Polon","ownerName":"Kincaid Strahan","address":"6688 Duke Road","areaCode":83042,"rent":9031,"preferredTenants":"Bachelors","image":null},
  {"id":35,"name":"Sloane McNamara","ownerName":"Julianne Hanham","address":"47 Vera Avenue","areaCode":19246,"rent":12564,"preferredTenants":"Bachelors","image":null},
  {"id":36,"name":"Sigismund Martinot","ownerName":"Consuela Olyfat","address":"18246 Westerfield Park","areaCode":44870,"rent":8632,"preferredTenants":"Married","image":null},
  {"id":37,"name":"Laurel Kamena","ownerName":"Ingelbert Oxenford","address":"97268 Del Mar Way","areaCode":52318,"rent":18827,"preferredTenants":"Married","image":null},
  {"id":38,"name":"Ali Chapple","ownerName":"Wylie Wills","address":"357 Fairview Way","areaCode":19637,"rent":11024,"preferredTenants":"Bachelors","image":null},
  {"id":39,"name":"Lauree Curtain","ownerName":"Cissy MacKibbon","address":"251 Toban Terrace","areaCode":47121,"rent":19938,"preferredTenants":"Married","image":null},
  {"id":40,"name":"Sean Scullion","ownerName":"Grady Liddicoat","address":"4009 Chive Park","areaCode":87642,"rent":3477,"preferredTenants":"Married","image":null},
  {"id":41,"name":"Odilia McDunlevy","ownerName":"Micky Rapsey","address":"90 Mockingbird Crossing","areaCode":50685,"rent":14998,"preferredTenants":"Bachelors","image":null},
  {"id":42,"name":"Eolanda Hafner","ownerName":"Lucho Whitten","address":"91873 Cody Hill","areaCode":79453,"rent":5047,"preferredTenants":"Married","image":null},
  {"id":43,"name":"Janeen Jarret","ownerName":"Alyosha Leckie","address":"847 Roxbury Point","areaCode":12941,"rent":18287,"preferredTenants":"Married","image":null},
  {"id":44,"name":"Cleo Scaysbrook","ownerName":"Cherlyn Duffett","address":"45 Lindbergh Court","areaCode":86271,"rent":19455,"preferredTenants":"Married","image":null},
  {"id":45,"name":"Carly Demangel","ownerName":"Kimmi Kemp","address":"61004 Algoma Center","areaCode":32418,"rent":14098,"preferredTenants":"Bachelors","image":null},
  {"id":46,"name":"Caron Matthieson","ownerName":"Norby Piccard","address":"38 Michigan Parkway","areaCode":62955,"rent":16712,"preferredTenants":"Married","image":null},
  {"id":47,"name":"Kerby Rignold","ownerName":"Lynda Baudry","address":"02 Birchwood Parkway","areaCode":72410,"rent":19267,"preferredTenants":"Married","image":null},
  {"id":48,"name":"Chancey Schonfeld","ownerName":"Shandra Labell","address":"66 Superior Lane","areaCode":28957,"rent":11639,"preferredTenants":"Married","image":null},
  {"id":49,"name":"Ludwig Worman","ownerName":"Gibbie Ivashin","address":"74 Birchwood Center","areaCode":64219,"rent":8746,"preferredTenants":"Married","image":null},
  {"id":50,"name":"Aubrey Maleby","ownerName":"Katya Misson","address":"7750 Main Parkway","areaCode":83672,"rent":15210,"preferredTenants":"Married","image":null}]

  const [original, setOriginal] = useState(data)
  // console.log(data[1])
  const rentLowHigh = () => {
    // setOriginal([])
    original.sort((a,b) => {
      return a.rent-b.rent
    })
    // console.log(original)
    let copy = [...original]
    setOriginal(copy)

    // console.log(original)
  }
  const rentHighLow = () => {
    original.sort((a,b) => {
      return b.rent-a.rent
    })
    // console.log(original)
    let copy = [...original]
    setOriginal(copy)
  }
  const areaLowHigh = () => {
    original.sort((a,b) => {
      return a.areaCode-b.areaCode
    })
    let copy = [...original]
    setOriginal(copy)
  }
  const areaHighLow = () => {
    original.sort((a,b) => {
      return b.areaCode-a.areaCode
    })
    let copy = [...original]
    setOriginal(copy)
  }
  const sordID = () => {
    original.sort((a,b) => {
      return a.id-b.id
    })
    let copy = [...original]
    setOriginal(copy)
  }
  const [input, setInput] = useState('')
  const changeSearch = (e) => {
    setInput(e.target.value)
    // let copy = []
    let copy = original.filter((elem) => {
      if(elem.address.toLowerCase().includes(input)) {
        return elem
      }
    })
    // console.log(copy)
    setOriginal(copy)
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sordID}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={rentLowHigh}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={rentHighLow}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={areaLowHigh}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={areaHighLow}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        value={input}
        onChange={changeSearch}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent (Rs.)</th>
            <th>Available For</th>
            <th className="table-image">Image</th>
          </tr>
        </thead>
        <tbody>
          {original.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.preferredTenants}
                </td>
                <td className="houseImage">
                  <img src={"https://rapidapi.com/blog/wp-content/uploads/2018/10/architecture-1836070_640.jpg"} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

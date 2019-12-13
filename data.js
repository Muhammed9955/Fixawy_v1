import { callbackify } from 'util';

const Price = {
    
        district:"mandara" 
       
  
}

const cairo = [
  "El Shrouk",
"Fifth Settlement",
"Madenti",
"El Rehab",
"100 of Ramdan",
"Badr City",
"New Heliopolis Cit",
"El Zamalek",
"El Maadi",
">El Mokkatm",
"El Mohandsen",
"El Shekh Zayed",
"El Dokki",
"Giza Square",
"El Haram",
"Giza Square",
"El Haram",
"Fissal",
"Shobra",
"Obour",
"El Matareya",
"6th October",
"Helwan",
"Ain Shams",
"DownTown",
"Al-Manyal",
"Al-Agouza",
"other",
]

// "El Shrouk",
// "Fifth Settlement",
// "Madenti",
// "El Rehab",
// "100 of Ramdan",
// "Badr City",
// "New Heliopolis Cit",
// "El Zamalek",
// "El Maadi",
// ">El Mokkatm",
// "El Mohandsen",
// "El Shekh Zayed",
// "El Dokki",
// "Giza Square",
// "El Haram",
// "Giza Square",
// "El Haram",
// "Fissal",
// "Shobra",
// "Obour",
// "El Matareya",
// "6th October",
// "Helwan",
// "Ain Shams",
// "DownTown",
// "Al-Manyal",
// "Al-Agouza",
// "other",


//Cairo
<div className="form-group">
  <select name="district" value={district} onChange={e => onChange(e)}>
    <option value="El Shrouk">El Shrouk</option>
    <option value="1st Settlment">1st Settlment</option>
    <option value="Fifth Settlement">Fifth Settlement</option>
    <option value="Madenti">Madenti</option>
    <option value="El Rehab">El Rehab</option>
    <option value="100 of Ramdan">100 of Ramdan</option>
    <option value="Badr City">Badr City</option>
    <option value="New Heliopolis City">New Heliopolis City</option>
    <option value="El Zamalek">El Zamalek</option>
    <option value="Helipolis">Helipolis</option>
    <option value="El Maadi">El Maadi</option>
    <option value="El Mokkatm">El Mokkatm</option>
    <option value="El Mohandsen">El Mohandsen</option>
    <option value="El Shekh Zayed">El Shekh Zayed</option>
    <option value="El Dokki">El Dokki</option>
    <option value="Giza Square">Giza Square</option>
    <option value="El Haram">El Haram</option>
    <option value="Giza Square">Giza Square</option>
    <option value="El Haram">El Haram</option>
    <option value="Fissal">Fissal</option>
    <option value="Shobra">Shobra</option>
    <option value="Obour">Obour</option>
    <option value="El Matareya">El Matareya</option>
    <option value="6th October">6th October</option>
    <option value="Helwan">Helwan</option>
    <option value="Ain Shams">Ain Shams</option>
    <option value="DownTown">DownTown</option>
    <option value="Al-Manyal">Al-Manyal</option>
    <option value="Al-Agouza">Al-Agouza</option>
    <option value="other">other</option>
  </select>
</div>


const alex = [
 " Moharm Bek",
"Abou Qeer",
"El Hadara",
"El Amreya",
"El Asafra",
"l AzaretaBahari",
"Bahari",
"Burg El Arab",
"El Qabary",
"Fleming",
"Janklees",
"Gleem",
"Kafr Abdou",
"Louran",
"El Mandara",
"Miani",
"San Stefano",
"Sidi Gaber",
"El Shatbi",
"Sporting",
"Victoria",
"Smouha",
"Stanly",
"Wabor El Maya",
"El Hanovi",
"El Bitash"] ;

// Moharm Bek,
// Abou Qeer,
// El Hadara,
// El Amreya,
// El Asafra
// l AzaretaBahari,
// Bahari,
// Burg El Arab,
// El Qabary,
// Fleming,
// Janklees,
// Gleem,
// Kafr Abdou,
// Louran,
// El Mandara,
// Miani,
// San Stefano,
// Sidi Gaber,
// El Shatbi,
// Sporting,
// Victoria,
// Smouha,
// Stanly,
// Wabor El Maya,
// El Hanovi,
// El Bitash,

// Alexandira
<div className="form-group">
  <select name="district" value={district} onChange={e => onChange(e)}>
    <option value="Moharm Bek">Moharm Bek</option>
    <option value="Abou Qeer">Abou Qeer</option>
    <option value="El Hadara">El Hadara</option>
    <option value="El Amreya">El Amreya</option>
    <option value="El Asafra">El Asafra</option>
    <option value="El AzaretaBahari">El AzaretaBahari</option>
    <option value="Bahari">Bahari</option>
    <option value="Burg El Arab">Burg El Arab</option>
    <option value="El Qabary">El Qabary</option>
    <option value="Fleming">Fleming</option>
    <option value="Janklees">Janklees</option>
    <option value="Gleem">Gleem</option>
    <option value="Kafr Abdou">Kafr Abdou</option>
    <option value="Louran">Louran</option>
    <option value="El Mandara">El Mandara</option>
    <option value="Miani">Miani</option>
    <option value="San Stefano">San Stefano</option>
    <option value="Sidi Gaber">Sidi Gaber</option>
    <option value="El Shatbi">El Shatbi</option>
    <option value="Sporting">Sporting</option>
    <option value="Victoria">Victoria</option>
    <option value="Smouha">Smouha</option>
    <option value="Stanly ">Stanly </option>
    <option value="Wabor El Maya">Wabor El Maya</option>
    <option value="El Hanovil">El Hanovil</option>
    <option value="El Bitash">El Bitash</option>
    <option value="other">other</option>
  </select>
</div>;

//JobTitle
<div className="form">
  <select name="status" value={jobtitle} onChange={e => onChange(e)}>
    <option value="Electrican">Electrican</option>
    <option value="Plumber">Plumber</option>
    <option value="Painting Works ">Painting Works </option>
    <option value="Tiling Works">Tiling Works</option>
    <option value="Plaster Works">Plaster Works</option>
    <option value="Carpenter">Carpenter</option>
    <option value="Air Conditioning Techbician">
      Air Conditioning Techbician
    </option>
    <option value="Refrigerators Techbician">Refrigerators Techbician</option>
    <option value="Washing Machines Techbician">
      Washing Machines Techbician
    </option>
    <option value="Gypusm Board">Gypusm Board</option>
    <option value="Satellite Techbician">Satellite Tech</option>
    <option value="Solar Cells">Solar Cells</option>
    <option value="Marble and Granite">Marble and Granite</option>
    <option value="Parquet Floors">Parquet Floors</option>
    <option value="other">other</option>
  </select>
</div>;

//city
<select name="status" value={area} onChange={e => onChange(e)}>
  <option value="Cairo">Cairo</option>
  <option value="Alexadria">Alexadria</option>
</select>;



{
  jobTitle:"Electrian"
  city:"alex"
  district:"Mandara"
}

/**
 * Filter array items based on search criteria (query)
 */

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const search = [ {
  jobTitle:"Electrian",
  city:"cairo",
  district:"Mandara"
},
{
  jobTitle:"Electrian",
  city:"alex",
  district:"Mandara"
},
{
  jobTitle:"Plumber",
  city:"cairo",
  district:"Mandara"
},
{
  jobTitle:"Plumber",
  city:"cairo",
  district:"Maddi"
},
];

//functions
const filterItems = (arr, query) => {
  return arr.filter(item => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
};
const  isObj= (obj) => {
  return obj !== undefined && isNaN(obj);
}

let invalidEntries = 0;
//Search Function 
let invalidEntries = 0;
const Search = (item) => {
  if ( (item.jobTitle !== 0  && typeof item.jobTitle !=="undefined" && item.jobTitle=="Plumber") &&
  (item.city  !== 0  && typeof item.city  !=="undefined" && item.city =="cairo") &&
 ( item.district !== 0  && typeof item.district !=="undefined" && item.district =="Maddi" )
  ) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

let filtredArray = search.filter(Search);
//=====================================================
console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(search, 'an'));

const  job = ["Electrican",
"Plumber",
"Painting Works",
"Tiling Works",
"Plaster Works",
"Carpenter",
" Air Conditioning Techbician",
"Refrigerators Techbician",
"Washing Machines Techbician",
"Gypusm Board",
"Satellite Tech",
"Solar Cells",
"Marble and Granite",
"Parquet Floors",
"other"]

// "Electrican",
// "Plumber",
// "Painting Works",
// "Tiling Works",
// "Plaster Works",
// "Carpenter",
// " Air Conditioning Techbician",
// "Refrigerators Techbician",
// "Washing Machines Techbician",
// "Gypusm Board",
// "Satellite Tech",
// "Solar Cells",
// "Marble and Granite",
// "Parquet Floors",
// "other",
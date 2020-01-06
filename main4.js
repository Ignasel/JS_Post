class postCode {

   searchCode(){
       button.addEventListener("click", () => {
           event.preventDefault();
           console.log(city.value, street.value, houseNr.value);


       async function getData(street, houseNr, city ){
           let url = 'https://api.postit.lt/?term='+street+''+houseNr+','+city+'&key=postit.lt-examplekey';
           let response = await fetch(url);
           return await response.json();
       }

       async function showData() {
           const data = await getData(street.value, houseNr.value, city.value);
           const postCode = data['data'][0]['post_code'];
           console.log(postCode)
           field.innerHTML = postCode
       }
       showData();
   });
   }

}

let search = new postCode();

const city = document.querySelector("#city");
const houseNr = document.querySelector("#houseNr");
const street = document.querySelector("#street");
const button = document.querySelector("button");
const field = document.querySelector("#postCode")

search.searchCode();

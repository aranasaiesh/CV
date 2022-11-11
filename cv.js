
async function getInfo () {
    const response = await fetch('./cv.json'); 
    console.log(response);
    const json = await response.json();
    console.log(json); 

    json.employments.forEach(element => {

        const listItem = `<li>
        <h3>${element.company}</h3>
        <i>${element.date}</i>
        <p>${element.title}</p>
        <p>${element.text}</p>
        </li>`;
        document.getElementById("employmentList").innerHTML += listItem;
});



}

getInfo(); 












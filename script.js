const loadData = async() =>  {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php');
    const data = await response.json();
    console.log(data);
    const div=document.querySelector('#latest-books')

     data.forEach(element => {
        const li= document.createElement("li")
     li.innerHTML= element.title
     div.appendChild (li)
    });
   
}

loadData()
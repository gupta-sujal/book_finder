// let list=document.querySelectorAll(".list li .name");
// Array.from(list).forEach(function(item)
// {
// item.textContent+="helli";
// });
// listofbooks.innerHTML+=' <li> <span class="name">Name of the Wind</span> <span class="delete">delete</span> </li>';
// // booklist.innerHTML+='<p> hello </p>';

// // const btns=document.querySelectorAll(".list .delete");
// // Array.from(btns).forEach(function(item)
// // {
//     //     item.addEventListener("click",function(e)
//     //     {
//         //         const li=e.target.parentElement;
//         //        li.parentNode.removeChild(li);
//         //     });
        
//         // });
        const listofbooks=document.querySelector(".list ul");

listofbooks.addEventListener("click",function(e)
{
if(e.target.className=='delete')
{
    const li=e.target.parentElement;
   listofbooks.removeChild(li);
}
});

const addbook=document.forms['addbook'];
addbook.addEventListener("submit",function(e)
{
    e.preventDefault();
    const value=addbook.querySelector('input[type="text"]').value;
    const li=document.createElement('li');
    const bookname=document.createElement('span');
    const delbook=document.createElement('span');
    bookname.textContent=value;
    delbook.textContent='delete';
    bookname.className="name";
    delbook.className="delete";
    li.appendChild(bookname);li.appendChild(delbook);
    listofbooks.appendChild(li);
    const addbox=document.querySelector("#addbook input");
    addbox.textContent='';
    // addbook.querySelector('input[type="text"]').textContent=' ';
});

const hide=document.querySelector("#hide");
hide.addEventListener("change",function(e)
{
if(hide.checked)
{
    listofbooks.style.display='none';
}
else
{
    listofbooks.style.display='initial';
}
});
function clearInput()
{
    document.getElementById("input").reset();
}

const search=document.forms['searchbook'].querySelector("input");
search.addEventListener("keyup",function(e)
{

    const term= e.target.value.toLowerCase();
    const books=listofbooks.getElementsByTagName("li");
    Array.from(books).forEach(function(book)
    {
        const title=book.firstElementChild.textContent;
        if(title.toLowerCase().includes(term))
        {
            book.style.display='block';
        }
        else
        {
            book.style.display='none';
        }

    });
});

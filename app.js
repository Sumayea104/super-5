const cartArray = [];

function display(cartItem)
{
    // console.log(cartItem);
    const tableBody = document.getElementById("players");
    tableBody.innerHTML = "";

    for(let i = 0; i < cartItem.length; i++)
    {
        // console.log(cartArray[i].playerName);
        const name = cartArray[i].playerName

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr)
    }
    
    
}

function addToCart(element)
{
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[1])

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName)

    const obj = {
        playerName: playerName
    }

    cartArray.push(obj); 

    // console.log(cartArray);

    // console.log(cartArray.length);

    document.getElementById('total-Added').innerText = cartArray.length;

    display(cartArray);
}



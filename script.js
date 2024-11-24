// Dropdown Menu

const DropdownDots = document.getElementById('dropdownMenuIconHorizontalButton')
const DropdownMenu = document.getElementById('dropdownDotsHorizontal')

DropdownDots.addEventListener("click", ()=>{
  if (DropdownMenu.classList.contains('hidden')) {
    DropdownMenu.classList.remove('hidden')
  } else {
    DropdownMenu.classList.add('hidden')
  }
})



// Table data 
const apiUrl = "https://jsonplaceholder.typicode.com/users";


async function fetchTableData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
console.log(data);

    const tableBody = document.getElementById("TableBody");
    tableBody.innerHTML = ""; 
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.classList.add("border-b", "hover:bg-gray-800", "bg-gray-700");

      row.innerHTML = `
         <td class="px-4 py-2">${item.username}</td>
         <td class="px-4 py-2">${item.name}</td>
         <td class="px-4 py-2">${item.phone}</td>
         <td class="px-4 py-2">${item.address.zipcode}</td>
         <td class="px-4 py-2">${item.email}</td>
       `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
}

fetchTableData();

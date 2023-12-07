const csvUrl = "https://raw.githubusercontent.com/ThangLC304/ThangLC304.github.io/main/Common/WeddingGuestList%20-%20InviteData.csv"; // Replace with the URL to your hosted CSV file

fetch(csvUrl)
.then(response => response.text())
.then(data => console.log(data));
// .then(csvText => {
//     const rows = csvText.split('\n');
//     for (let i = 1; i < rows.length; i++) { // Skip header row
//     const cells = rows[i].split(',');
//     if (cells[3] === guestId) { // Column D (Invite_ID) matches guestId
//         document.getElementById('invitation_text').innerText = cells[2]; // Column C (Invitation_Text)
//         break;
//     }
//     }
// })
// .catch(error => console.error('Error fetching CSV:', error));


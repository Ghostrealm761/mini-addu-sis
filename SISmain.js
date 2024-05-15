let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
	// Sidebar open when you click on the search iocn
	sidebar.classList.toggle("open");
	menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
	if (sidebar.classList.contains("open")) {
		closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
	} else {
		closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
	}
}

// function submitGrade() {
//     // Get input values
//     var code = document.getElementById("gradeCode").value;
//     var studentName = document.getElementById("studentName").value;
//     var prelim = document.getElementById("prelim").value;
//     var midterm = document.getElementById("midterm").value;
//     var prefinal = document.getElementById("prefinal").value;
//     var final = document.getElementById("final").value;

//     // Create new row for the grades table
//     var table = document.getElementById("gradesTable").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow();
//     newRow.innerHTML = `<td>${code}</td><td>${studentName}</td><td>${prelim}</td><td>${midterm}</td><td>${prefinal}</td><td>${final}</td>`;
//   }

//   // Function to update slots occupied
// function updateSlots(courseCode) {
//     var slotsInput = document.getElementById(courseCode + "-slots");
//     var slotsOccupied = document.getElementById(courseCode + "-occupied").textContent;
//     var newOccupied = parseInt(slotsOccupied) + 1;
//     document.getElementById(courseCode + "-occupied").textContent = newOccupied;
//     slotsInput.textContent = parseInt(slotsInput.textContent) - 1;

const courses = [
	{
		subjNo: "ASF 4204",
		descriptionTitle: "Seniors' Integration Program",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "2.0",
		creditTo: "",
	},
	{
		subjNo: "(26-7109)",
		descriptionTitle: "",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		subjNo: "CS 4253",
		descriptionTitle: "Social Issues and Professional Practice",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "2.0",
		creditTo: "",
	},
	{
		subjNo: "(4-321)",
		descriptionTitle: "",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		subjNo: "CS 4256",
		descriptionTitle: "CS Elective 4",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "2.0",
		creditTo: "",
	},
	{
		subjNo: "(4-312)",
		descriptionTitle: "",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		subjNo: "CS 4257",
		descriptionTitle: "Architecture and Organization",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "2.0",
		creditTo: "",
	},
	{
		subjNo: "(4-319)",
		descriptionTitle: "",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		subjNo: "IT 4258",
		descriptionTitle: "Information Assurance and Security 1",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "2.0",
		creditTo: "",
	},
	{
		subjNo: "(4-320)",
		descriptionTitle: "",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		subjNo: "",
		descriptionTitle:
			"Quality Point Index(QPI) or Weighted Percentage Average(W.P.A.) =",
		prelim: "",
		midterm: "",
		preFinal: "",
		final: "",
		units: "",
		creditTo: "",
	},
	{
		code: 75652,
		courseN: "BS-IT",
		year: 4,
		name: "Pusta, Tisha Ryle",
		division: "IT",
		section: "BSIT 2B",
		rgcno: 12345678,
		academicperiod: "2nd Semester, 2021-2022",
		statu: "regular",
		qpi: 3,
	},
];

// Populate student information
const studentInfoDiv = document.querySelector(".input-container");
const studentInfo = document.createElement("div");
studentInfo.classList.add("student-info");
studentInfo.innerHTML = `
    <fieldset><label>Code:</label> ${courses[11].code}</fieldset>
    <fieldset><label>Course:</label> ${courses[11].courseN}</fieldset>
    <fieldset><label>Year:</label>${courses[11].year}</fieldset>

    <!--Column 2-->
    <fieldset><label>Student Name:</label>${courses[11].name}</fieldset>
    <fieldset><label>Division:</label>${courses[11].division}</fieldset>
    <fieldset><label>Section:</label>${courses[11].section}</fieldset>

    <!--Column 3-->
    <fieldset><label>RGC No:</label>${courses[11].rgcno}</fieldset>
    <fieldset><label>Academic Period:</label>${courses[11].academicperiod}</fieldset>
    <fieldset><label>Status:</label>${courses[11].statu}</fieldset>

    <!--Column 4-->
    <fieldset><label>Annual QPI:</label>${courses[11].qpi}</fieldset>
`;
studentInfoDiv.appendChild(studentInfo);

const courseDataTable = document.getElementById("tbody");
for (let course of courses.slice(0, 11)) {
	const newRow = courseDataTable.insertRow();
	newRow.innerHTML = `
        <td>${course.subjNo}</td>
        <td>${course.descriptionTitle}</td>
        <td>${course.prelim}</td>
        <td>${course.midterm}</td>
        <td>${course.preFinal}</td>
        <td>${course.final}</td>
        <td>${course.units}</td>
        <td>${course.creditTo}</td>
    `;
}

const students = [];

    function sortByScore(arr) {
      return arr.sort((a, b) => b.score - a.score);
    }

    function updateTable() {
      const tableBody = document.querySelector("#studentsTable tbody");
      tableBody.innerHTML = '';

      const sortedStudents = sortByScore(students);

      sortedStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${student.score}</td>`;
        tableBody.appendChild(row);
      });
    }

    document.getElementById("studentForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const score = parseInt(document.getElementById("score").value);

      students.push({ name, score });
      document.getElementById("name").value = '';
      document.getElementById("score").value = '';
      updateTable();
    });
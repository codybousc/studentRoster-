studentRoster.controller('StudentsController', function StudentsController($scope) {
  $scope.students = [
    {name: "Tbone Willis"},
    {name: "Tbone Walker"}
  ];
  $scope.addStudent = function() {
    $scope.students.push({name: $scope.studentName});
    $scope.studentName = null; //clears input box
  };
  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1);
  };
});

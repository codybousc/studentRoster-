studentRoster.controller('StudentsController', function StudentsController($scope, StudentsFactory) {
  $scope.students = StudentFactory.students;
  $scope.StudentsFactory = StudentsFactory; 

});

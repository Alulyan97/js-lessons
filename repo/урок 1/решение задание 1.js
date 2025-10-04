const tasksList = [
  { taskId: 1, taskName: 'Разработка UI', departmentId: 1, employeeId: 101, timeSpent: 10 },
  { taskId: 2, taskName: 'Написание тестов', departmentId: 1, employeeId: 102, timeSpent: 12 },
  { taskId: 3, taskName: 'Ревью кода', departmentId: 1, employeeId: 101, timeSpent: 5 },
  { taskId: 4, taskName: 'Подготовка документации', departmentId: 2, employeeId: 201, timeSpent: 8 },
  { taskId: 5, taskName: 'Встреча с клиентом', departmentId: 2, employeeId: 202, timeSpent: 2 },
  { taskId: 6, taskName: 'Уточнение требований', departmentId: 1, employeeId: 102, timeSpent: 1 },
  { taskId: 7, taskName: 'Оформление счетов', departmentId: 3, employeeId: 301, timeSpent: 3},
  { taskId: 8, taskName: 'Покупка канцтоваров', departmentId: 3, employeeId: 301, timeSpent: 4 },
   { taskId: 9, taskName: 'Рекламная кампания', departmentId: 4, employeeId: 401, timeSpent: 18 },
];
const employeesList = [
  { employeeId: 101, employeeName: 'Alice', departmentId: 1 },
  { employeeId: 102, employeeName: 'Bob', departmentId: 1 },
  { employeeId: 201, employeeName: 'Charlie', departmentId: 2 },
  { employeeId: 202, employeeName: 'Diana', departmentId: 2 },
  { employeeId: 301, employeeName: 'Eva', departmentId: 3 },
   { employeeId: 401, employeeName: 'Frank', departmentId: 4 },
];
 const departmentsList = [
  { departmentId: 1, departmentName: 'Development' },
  { departmentId: 2, departmentName: 'Marketing' },
  { departmentId: 3, departmentName: 'Accounting' },
  { departmentId: 4, departmentName: 'Sales' },
];
const departmentIdList = [1,2,3,4];

let organization = {};

departmentIdList.forEach(id => organization[id] = {});

departmentsList.forEach(dep => {
    organization[dep.departmentId] = {
        departmentName: dep.departmentName,
        employees: []
    }
});
for (const emplId of employeesList) {
    if (organization[emplId.departmentId]) {
        organization[emplId.departmentId].employees.push({
            employeeId: emplId.employeeId,
            employeeName: emplId.employeeName,
            tasks: []
        })
    }
};
for (const task of tasksList) {
  const department = organization[task.departmentId];
  if (department) {
    for (const employee of department.employees) {
      if (employee.employeeId === task.employeeId) {
        employee.tasks.push({
          taskId: task.taskId,
          taskName: task.taskName,
          timeSpent: task.timeSpent
        });
      }
    }
  }
};
const result = {};
for (const dep in organization) {
    const department = organization[dep];
    let totalTimeSpentByDepartment = 0;
    
    for (const employee of department.employees) {
        for (const task of employee.tasks) {
            totalTimeSpentByDepartment += task.timeSpent;
        }
    }
    result[dep] = totalTimeSpentByDepartment;
};

console.log(JSON.stringify(organization, null, 2));
console.log(JSON.stringify(result, null, 2));
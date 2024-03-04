export default function createIteratorObject(report) {
  let allemployees = [];
  for (const item of Object.values(report.allemployees)) {
    allemployees = [
      ...allemployees,
      ...item,
    ];
  }
  return allemployees;
}

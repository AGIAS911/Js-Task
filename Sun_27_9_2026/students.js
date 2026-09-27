export const studentsList = [
    { name: "Anas", grades: [90, 85, 95] },
    { name: "Sara", grades: [70, 75, 80] },
    { name: "Omar", grades: [40, 50, 45] }
];

export function getPassStatus(average) {
    return average >= 50 ? "Pass ✅" : "Fail ❌";
}
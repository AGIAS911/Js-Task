export default function calculateAverage(gradesArray) {
    if (gradesArray.length === 0) return 0;
    const sum = gradesArray.reduce((total, grade) => total + grade, 0);
    return (sum / gradesArray.length).toFixed(2);
}
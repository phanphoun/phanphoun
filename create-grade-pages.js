const fs = require('fs');
const path = require('path');

// Grade data with titles and descriptions
const grades = [
    { number: 7, title: 'គណិតវិទ្យាមូលដ្ឋាន', description: 'ចំណេះគណិតវិទ្យាមូលដ្ឋានសម្រាប់ថ្នាក់ទី៧' },
    { number: 8, title: 'អាល់ហ្សេប្រា និងធរណីមាត្រមូលដ្ឋាន', description: 'អាល់ហ្សេប្រា និងធរណីមាត្រមូលដ្ឋានសម្រាប់ថ្នាក់ទី៨' },
    { number: 9, title: 'សមីការ និងអនុគមន៍', description: 'សមីការ និងអនុគមន៍សម្រាប់ថ្នាក់ទី៩' },
    { number: 10, title: 'អនុគមន៍ និងធរណីមាត្រ', description: 'អនុគមន៍ និងធរណីមាត្រសម្រាប់ថ្នាក់ទី១០' },
    { number: 11, title: 'គណិតវិទ្យាកម្រិតខ្ពស់', description: 'គណិតវិទ្យាកម្រិតខ្ពស់សម្រាប់ថ្នាក់ទី១១' },
    { number: 12, title: 'ត្រៀមប្រឡងបាក់ឌុប', description: 'ការត្រៀមប្រឡងបាក់ឌុបសម្រាប់ថ្នាក់ទី១២' }
];

// Read the template
const templatePath = path.join(__dirname, 'grades', 'grade-template.html');
let template = fs.readFileSync(templatePath, 'utf8');

// Create grade pages
grades.forEach(grade => {
    // Replace placeholders in the template
    let pageContent = template
        .replace(/\[GRADE\]/g, grade.number)
        .replace('គណិតវិទ្យា ថ្នាក់ទី [GRADE]', `គណិតវិទ្យា - ${grade.title}`)
        .replace('រៀនគណិតវិទ្យាយ៉ាងស្រួល និងមានប្រសិទ្ធភាព', grade.description);
    
    // Write the grade page
    const outputPath = path.join(__dirname, 'grades', `grade${grade.number}.html`);
    fs.writeFileSync(outputPath, pageContent, 'utf8');
    
    console.log(`Created grade ${grade.number} page: ${outputPath}`);
});

console.log('All grade pages have been created successfully!');

// ===== GRADE PAGE SCRIPT (Optimized) =====

// Cache DOM elements and state
const gradeState = {
    currentGrade: null,
    currentChapter: null,
    progress: {}
};

// Main initialization
function initGradePage() {
    // Get grade number from URL or title
    gradeState.currentGrade = getGradeNumber();
    
    if (gradeState.currentGrade) {
        updateGradeContent(gradeState.currentGrade);
        loadGradeContent(gradeState.currentGrade);
    }
    
    // Initialize all components
    [
        initTabs,
        initChapterNavigation,
        initExercises,
        initPractice,
        updateProgress
    ].forEach(fn => {
        try { fn(); } catch (e) { console.warn('Failed to initialize:', fn.name, e); }
    });
}

// Get grade number from URL or page title
function getGradeNumber() {
    // Check URL first (e.g., grade7.html)
    const urlMatch = window.location.pathname.match(/grade(\d+)\.html$/);
    if (urlMatch?.[1]) return parseInt(urlMatch[1]);
    
    // Fallback to page title
    const titleMatch = document.title.match(/ថ្នាក់ទី\s*(\d+)/);
    return titleMatch?.[1] ? parseInt(titleMatch[1]) : 7; // Default to grade 7
}

// Update page content with grade number
function updateGradeContent(gradeNumber) {
    const elements = document.querySelectorAll('[data-grade-number]');
    elements.forEach(el => {
        el.textContent = gradeNumber;
    });
}

// Load grade-specific content
function loadGradeContent(gradeNumber) {
    // This would be expanded with actual content loading logic
    console.log(`Loading content for grade ${gradeNumber}`);
}

// Tab functionality
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
}

// Chapter navigation
function initChapterNavigation() {
    const chapters = document.querySelectorAll('.chapter');
    
    chapters.forEach(chapter => {
        chapter.addEventListener('click', () => {
            const chapterId = chapter.getAttribute('data-chapter');
            if (chapterId) {
                loadChapter(chapterId);
                gradeState.currentChapter = chapterId;
                
                // Update active state
                chapters.forEach(c => c.classList.remove('active'));
                chapter.classList.add('active');
            }
        });
    });
}

// Load chapter content (simplified)
async function loadChapter(chapterId) {
    try {
        // Show loading state
        const contentArea = document.querySelector('.chapter-content');
        if (contentArea) {
            contentArea.innerHTML = '<div class="loading">កំពុងផ្ទុកមាតិកា...</div>';
            
            // Simulate API call
            // const response = await fetch(`/api/chapters/${gradeState.currentGrade}/${chapterId}`);
            // const data = await response.json();
            
            // Update UI with chapter content
            setTimeout(() => {
                contentArea.innerHTML = `
                    <h3>មាតិកាជំពូក ${chapterId}</h3>
                    <p>មាតិកាសម្រាប់ថ្នាក់ទី ${gradeState.currentGrade} ជំពូក ${chapterId} នឹងបង្ហាញនៅទីនេះ។</p>
                `;
            }, 500);
            
        }
    } catch (error) {
        console.error('Failed to load chapter:', error);
    }
}

// Initialize exercises
function initExercises() {
    const exerciseButtons = document.querySelectorAll('.exercise-btn');
    
    exerciseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const exerciseId = btn.getAttribute('data-exercise');
            if (exerciseId) {
                // Handle exercise button click
                console.log('Exercise clicked:', exerciseId);
            }
        });
    });
}

// Initialize practice section
function initPractice() {
    const practiceForm = document.querySelector('.practice-form');
    if (practiceForm) {
        practiceForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle practice submission
            console.log('Practice submitted');
        });
    }
}

// Update progress
function updateProgress() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress') || '0';
        bar.style.width = `${progress}%`;
        bar.setAttribute('aria-valuenow', progress);
    });
}

// Initialize the grade page when DOM is loaded
if (document.querySelector('.grade-page')) {
    document.addEventListener('DOMContentLoaded', initGradePage);
}

// Update the page content with the grade number
function updateGradeContent(gradeNumber) {
    // Update page title
    document.title = document.title.replace('[GRADE]', gradeNumber);
    
    // Update grade number in headings
    const gradeNumberElements = document.querySelectorAll('.grade-number');
    gradeNumberElements.forEach(el => {
        el.textContent = gradeNumber;
    });
    
    // Update grade title
    const gradeTitle = document.querySelector('.grade-title h1');
    if (gradeTitle) {
        gradeTitle.textContent = `គណិតវិទ្យា ថ្នាក់ទី ${gradeNumber}`;
    }
}

// Initialize tab functionality
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize chapter navigation
function initChapterNavigation() {
    const chapterList = document.querySelector('.chapter-list');
    
    if (!chapterList) return;
    
    // Sample chapters - in a real app, this would come from a database
    const chapters = [
        { id: 1, title: 'លេខពិត និងសមីការ', completed: true },
        { id: 2, title: 'អនុគមន៍', completed: true },
        { id: 3, title: 'ធរណីមាត្រ', completed: false },
        { id: 4, title: 'ស្ថិតិ', completed: false },
        { id: 5, title: 'ប្រូបាប', completed: false },
    ];
    
    // Populate chapter list
    chapters.forEach(chapter => {
        const li = document.createElement('li');
        li.className = 'chapter-item';
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'chapter-link' + (chapter.completed ? ' completed' : '');
        link.setAttribute('data-chapter', chapter.id);
        link.innerHTML = `
            <span class="chapter-title">${chapter.title}</span>
            ${chapter.completed ? '<i class="fas fa-check-circle"></i>' : ''}
        `;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadChapter(chapter.id);
            
            // Update active state
            document.querySelectorAll('.chapter-link').forEach(link => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
        
        li.appendChild(link);
        chapterList.appendChild(li);
    });
    
    // Load the first chapter by default
    if (chapters.length > 0) {
        loadChapter(chapters[0].id);
        const firstLink = document.querySelector('.chapter-link');
        if (firstLink) firstLink.classList.add('active');
    }
}

// Load chapter content
function loadChapter(chapterId) {
    // In a real app, this would fetch content from a server
    const lessonContent = document.querySelector('#lessons .lesson-content');
    const exerciseContent = document.querySelector('.exercise-list');
    const practiceContent = document.querySelector('.practice-content');
    
    if (!lessonContent || !exerciseContent || !practiceContent) return;
    
    // Sample content - in a real app, this would come from a database
    const chapterContent = {
        1: {
            lesson: `
                <h3>លេខពិត និងសមីការ</h3>
                <p>ក្នុងមេរៀននេះ យើងនឹងសិក្សាអំពីលេខពិត និងវិធីដោះស្រាយសមីការ។</p>
                
                <h4>១.១ លេខពិត</h4>
                <p>លេខពិតរួមមានលេខគត់ លេខប្រភាគ និងលេខអសនិទាន។</p>
                
                <div class="note-box">
                    <div class="note-title"><i class="fas fa-lightbulb"></i> ចំណាំ</div>
                    <p>លេខអសនិទានគឺជាលេខដែលមិនអាចសរសេរជាប្រភាគសាមញ្ញបានទេ ដូចជា π (pi) និង √2។</p>
                </div>
                
                <h4>១.២ សមីការដឺក្រេទី១</h4>
                <p>សមីការដឺក្រេទី១មានទម្រង់ទូទៅជា: <span class="math-formula">ax + b = 0</span></p>
                <p>ដើម្បីដោះស្រាយសមីការ យើងត្រូវរកតម្លៃនៃ x ។</p>
                
                <div class="example">
                    <h5>ឧទាហរណ៍៖</h5>
                    <p>ដោះស្រាយសមីការ: 2x + 3 = 7</p>
                    <p><strong>ចម្លើយ៖</strong></p>
                    <p>2x + 3 = 7</p>
                    <p>2x = 7 - 3</p>
                    <p>2x = 4</p>
                    <p>x = 4/2</p>
                    <p>x = 2</p>
                </div>
            `,
            exercises: [
                {
                    question: 'តើតម្លៃនៃ x ក្នុងសមីការ 3x - 5 = 10 គឺជាអ្វី?',
                    options: ['3', '5', '7', '15'],
                    answer: 1, // Index of the correct answer (0-based)
                    explanation: '3x - 5 = 10 → 3x = 15 → x = 5'
                },
                {
                    question: 'តើចម្លើយណាខាងក្រោមជាលេខអសនិទាន?',
                    options: ['1/2', '0.75', '√3', '2.5'],
                    answer: 2,
                    explanation: '√3 គឺជាលេខអសនិទានព្រោះវាមិនអាចសរសេរជាប្រភាគសាមញ្ញបានទេ។'
                }
            ],
            practice: `
                <h3>អនុវត្តន៍</h3>
                <p>សូមដោះស្រាយលំហាត់ខាងក្រោម៖</p>
                
                <div class="practice-item">
                    <p class="practice-question">១. ដោះស្រាយសមីការ: 4x + 7 = 23</p>
                    <input type="text" class="practice-answer" placeholder="សរសេរចម្លើយរបស់អ្នកនៅទីនេះ...">
                    <button class="btn btn-primary btn-check-practice">ពិនិត្យចម្លើយ</button>
                    <div class="practice-feedback"></div>
                </div>
                
                <div class="practice-item">
                    <p class="practice-question">២. ដោះស្រាយសមីការ: 2(x - 3) = 10</p>
                    <input type="text" class="practice-answer" placeholder="សរសេរចម្លើយរបស់អ្នកនៅទីនេះ...">
                    <button class="btn btn-primary btn-check-practice">ពិនិត្យចម្លើយ</button>
                    <div class="practice-feedback"></div>
                </div>
            `
        },
        // Add more chapters as needed
    };
    
    // Update lesson content
    if (chapterContent[chapterId]) {
        lessonContent.innerHTML = chapterContent[chapterId].lesson || '<p>មិនមានមាតិកាសម្រាប់មេរៀននេះទេ។</p>';
        
        // Update exercises
        if (chapterContent[chapterId].exercises && chapterContent[chapterId].exercises.length > 0) {
            let exercisesHtml = '<div class="exercise-list">';
            
            chapterContent[chapterId].exercises.forEach((exercise, index) => {
                exercisesHtml += `
                    <div class="exercise-item" data-exercise="${index}">
                        <div class="exercise-question">${index + 1}. ${exercise.question}</div>
                        <div class="exercise-options">
                            ${exercise.options.map((option, i) => `
                                <div class="option-item">
                                    <input type="radio" id="ex${chapterId}-${index}-${i}" name="ex${chapterId}-${index}" value="${i}">
                                    <label for="ex${chapterId}-${index}-${i}">${option}</label>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-check-answer" data-exercise="${index}">ពិនិត្យចម្លើយ</button>
                        <div class="answer-feedback" id="feedback-${chapterId}-${index}"></div>
                    </div>
                `;
            });
            
            exercisesHtml += '</div>';
            exerciseContent.innerHTML = exercisesHtml;
        } else {
            exerciseContent.innerHTML = '<p>មិនមានលំហាត់សម្រាប់មេរៀននេះទេ។</p>';
        }
        
        // Update practice section
        practiceContent.innerHTML = chapterContent[chapterId].practice || '<p>មិនមានអនុវត្តន៍សម្រាប់មេរៀននេះទេ។</p>';
        
        // Re-initialize exercise event listeners
        initExercises();
        
        // Update progress
        updateProgress();
    } else {
        lessonContent.innerHTML = '<p>មិនមានមាតិកាសម្រាប់មេរៀននេះទេ។</p>';
        exerciseContent.innerHTML = '<p>មិនមានលំហាត់សម្រាប់មេរៀននេះទេ។</p>';
        practiceContent.innerHTML = '<p>មិនមានអនុវត្តន៍សម្រាប់មេរៀននេះទេ។</p>';
    }
}

// Initialize exercises
function initExercises() {
    // Add event listeners to check answer buttons
    document.querySelectorAll('.btn-check-answer').forEach(button => {
        button.addEventListener('click', function() {
            const exerciseIndex = this.getAttribute('data-exercise');
            const exerciseItem = this.closest('.exercise-item');
            const selectedOption = exerciseItem.querySelector('input[type="radio"]:checked');
            const feedback = exerciseItem.querySelector('.answer-feedback');
            
            if (!selectedOption) {
                feedback.textContent = 'សូមជ្រើសរើសចម្លើយមួយ!';
                feedback.className = 'answer-feedback';
                feedback.style.display = 'block';
                return;
            }
            
            // In a real app, we would check the answer against the correct one
            // For this example, we'll assume the first option is always correct
            const isCorrect = selectedOption.value === '0'; // Simplified for example
            
            if (isCorrect) {
                feedback.textContent = 'អបអរសាទរ! ចម្លើយរបស់អ្នកត្រឹមត្រូវ។';
                feedback.className = 'answer-feedback correct';
                exerciseItem.classList.add('completed');
            } else {
                feedback.textContent = 'ចម្លើយមិនត្រឹមត្រូវទេ។ សូមព្យាយាមម្តងទៀត!';
                feedback.className = 'answer-feedback incorrect';
            }
            
            feedback.style.display = 'block';
            
            // Update progress
            updateProgress();
        });
    });
}

// Initialize practice section
function initPractice() {
    // Add event listeners to practice check buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-check-practice')) {
            const practiceItem = e.target.closest('.practice-item');
            const answerInput = practiceItem.querySelector('.practice-answer');
            const feedback = practiceItem.querySelector('.practice-feedback');
            
            if (!answerInput.value.trim()) {
                feedback.textContent = 'សូមបញ្ចូលចម្លើយរបស់អ្នក។';
                feedback.className = 'practice-feedback';
                feedback.style.display = 'block';
                return;
            }
            
            // In a real app, we would validate the answer properly
            // For this example, we'll just show a success message
            feedback.textContent = 'ល្អណាស់! អ្នកបានដោះស្រាយបញ្ហានេះដោយជោគជ័យ។';
            feedback.className = 'practice-feedback correct';
            feedback.style.display = 'block';
            practiceItem.classList.add('completed');
            
            // Update progress
            updateProgress();
        }
    });
}

// Update progress
function updateProgress() {
    const totalItems = document.querySelectorAll('.exercise-item, .practice-item').length;
    const completedItems = document.querySelectorAll('.exercise-item.completed, .practice-item.completed').length;
    const progress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${progress}% បានបញ្ចប់`;
    }
}

// Load grade-specific content
function loadGradeContent(gradeNumber) {
    // In a real app, this would fetch content from a server based on the grade
    console.log(`Loading content for grade ${gradeNumber}`);
    
    // Add grade-specific content here if needed
    switch(gradeNumber) {
        case 7:
            // Grade 7 specific content
            break;
        case 8:
            // Grade 8 specific content
            break;
        // Add more cases as needed
    }
}

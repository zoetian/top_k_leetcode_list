function extractTopKLeetCodeQuestions(k = 200) {
    const questionElements = document.querySelectorAll('a[href^="/problems/"][id]');
    
    const questions = Array.from(questionElements).map(el => {
        const titleElement = el.querySelector('.ellipsis.line-clamp-1');
        const title = titleElement ? titleElement.textContent.trim() : 'Unknown Title';
        return title;
    });
    
    const topK = questions.slice(0, k);
    
    console.log(`Top ${k} LeetCode Questions for Facebook:`);
    topK.forEach((q, index) => {
        console.log(`${index + 1} - ${q}`);
    });
    
    const formattedResults = topK.map((q, index) => `${index + 1} - ${q}`).join('\n');
    
    const textArea = document.createElement('textarea');
    textArea.value = formattedResults;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    console.log(`Results for top ${k} questions copied to clipboard!`);
    
    return formattedResults;
}

function getCompletedQuestionCount(k = 200) {
    const questionElements = document.querySelectorAll('a[href^="/problems/"][id]');
    const topK = Array.from(questionElements).slice(0, k);
    const completedCount = topK.filter(el => el.querySelector('svg[data-icon="check"]') !== null).length;
    console.log(`Completed questions: ${completedCount} out of ${k}`);
    return completedCount;
}

function getUncompletedQuestions(k = 200) {
    const questionElements = document.querySelectorAll('a[href^="/problems/"][id]');
    const topK = Array.from(questionElements).slice(0, k);
    
    const uncompletedQuestions = topK.filter(el => !el.querySelector('svg[data-icon="check"]'))
        .map(el => {
            const titleElement = el.querySelector('.ellipsis.line-clamp-1');
            return titleElement ? titleElement.textContent.trim() : 'Unknown Title';
        });
    
    console.log(`Uncompleted Questions (out of top ${k}):`);
    uncompletedQuestions.forEach((q, index) => {
        console.log(`${index + 1} - ${q}`);
    });
    
    const formattedResults = uncompletedQuestions.map((q, index) => `${index + 1} - ${q}`).join('\n');
    
    const textArea = document.createElement('textarea');
    textArea.value = formattedResults;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    console.log(`Uncompleted questions (out of top ${k}) copied to clipboard!`);
    
    return formattedResults;
}

// Usage examples:
// extractTopKLeetCodeQuestions(150);
// getCompletedQuestionCount(150);
// getUncompletedQuestions(150);

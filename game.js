const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Which one below is the correct name of the IASB amendments to IAS 12 in January 2016?',
        choice1: 'Recognition of Deferred Tax Liabilities for Unrealized Gains',
        choice2: 'Recognition of Deferred Tax Assets for Unrealized Losses',
        choice3: 'Recognition of Deferred Tax Assets for Unrealized Gains',
        choice4: 'Recognition of Deferred Tax Liabilities for Unrealized Losses',
        answer: 2,
    },
        {
        question: 'What methods can differ from what is stated under the tax legislation?',
        choice1: 'GAAP Methods',
        choice2: 'Cash Methods Income/Deduction',
        choice3: 'Accrual Methods Income/Deduction',
        choice4: 'Provincial legislation',
        answer: 1,
    },
    {
        question:
            "The taxes payable approach is an option when under IFRS",
        choice1: "False - ASPE",
        choice2: "True - IFRS",
        choice3: " ",
        choice4: " ",
        answer: 1,
    },
    {
        question: "The taxes payable approach is a method of accounting under which an enterprise reports ____?",
        choice1: "Their taxes payable to differ the accrual",
        choice2: "Their taxes payable to equal the accrual",
        choice3: "An income tax expense to differ taxes payable",
        choice4: "An income tax expense to equal taxes payable",
        answer: 4,
    },
    {
        question: "“Income Before Taxes” or “Accounting Profit” are terms used for the Financial Reporting called?",
        choice1: "Accounting Income",
        choice2: "Income for financial reporting purpose",
        choice3: "Taxable accounting",
        choice4: "Taxable income",
        answer: 1,
    },
    {
        question: "What is the term used to indicate the amount to which income tax is determined",
        choice1: "Accounting Income",
        choice2: "Income for financial reporting purpose",
        choice3: "Taxable accounting",
        choice4: "Taxable income",
        answer: 4,
    },
    {
        question: "What are some major reasons why accounting income differs from taxable income?",
        choice1: "Revenues/gains are taxable after/before they are recognized in accounting income, Expenses/losses are deductible before/after they are recognized for accounting income, and Permanent differences.",
        choice2: "Revenues/gains are never taxable after/before they are recognized in accounting income, Expenses/losses are deductible before/after they are recognized for accounting income, and lasting similarities.",
        choice3: "Revenues/gains are taxable after/before they are recognized in accounting income, Expenses/losses are deductible before/after they are recognized for accounting income, and Lasting similarities.",
        choice4: "Revenues/gains are taxable after/before they are recognized in accounting income, Expenses/losses are included before/after they are recognized for accounting income, and Lasting differences",
        answer: 1,
    },
    {
        question: "What are two methods to calculate income tax expense, and which accounting standards do they apply too?",
        choice1: "Tax variety expense (IFRS), Deferred tax expense (ASPE)",
        choice2: "Taxes Payable method (ASPE), temporary difference approach (IFRS/ASPE)",
        choice3: "Taxes Payable method (IFRS), temporary difference approach (ASPE) ",
        choice4: "Taxes Payable method (IFRS/APSE), temporary difference approach (ASPE)",
        answer: 2,
    },
    {
        question: "The ______ and _____ are accumulated tax effects that are from reversible differences that affect income tax current and in the future.",
        choice1: "Tax base and tax basis",
        choice2: "Deferred tax expense and Deferred tax asset",
        choice3: "Accounting income and Taxable income",
        choice4: "Deferred accounting expense and Deferred accounting asset",
        answer: 2,
    },
    {
        question: "This represents an increase to the tax payable in future years which is derived from the taxable temporary difference.",
        choice1: "Future taxable amount",
        choice2: "Deferred/future tax liability",
        choice3: "Deferred/future tax asset",
        choice4: "Income tax benefit",
        answer: 2,
    },
    {
        question: "This represents a decrease to the tax payable in future years which is derived from the deductible temporary difference.",
        choice1: "Future taxable amount",
        choice2: "Deferred/future tax liability",
        choice3: "Deferred/future tax asset",
        choice4: "Income tax benefit",
        answer: 3,
    },
    {
        question: "Which terminology used is correct?",
        choice1: "IFRS - Taxable profix (tax loss); ASPE - Taxable income (taxable loss)",
        choice2: "IFRS - Deferred income tax; ASPE - Deferred tax",
        choice3: "IFRS - Tax benefit; ASPE - Tax income",
        choice4: "IFRS - Probable; ASPE - Highly",
        answer: 1,
    },//End Paige 12 questions
    {
        question: "The temporary difference approach is also known as:",
        choice1: "Future income taxes method",
        choice2: "Taxes payable method",
        choice3: "Tax payable approach",
        choice4: "Asset-liability method",
        answer: 4,
    },
    {
        question: "Investors should be cautious about improved net income figure by a favourable tax benefit because (choice the best answer)",
        choice1: "The tax benefit does not relate to operation",
        choice2: "The tax benefit is not received in the current year",
        choice3: "The amount of the tax benefit is determined under management’s judgement",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "The information below should be disclosed if a company is reporting under ASPE and following future income taxes method, except:",
        choice1: "The amounts of current and of future income tax expense or benefit",
        choice2: "The amount of current and deferred tax expense for each component of OCI",
        choice3: "The amount of unused income tax losses, reductions, and deductible temporary differences",
        choice4: "The amounts of current and of future income tax expense or benefit related to capital transactions or transactions recognized in equity",
        answer: 2,
    },
    {
        question: "ABC Inc. has current tax expenses for its continuing operations and discontinuing operations. These expenses are reported on the income statement as _________.",
        choice1: "A single line of current tax expense above Net income",
        choice2: "A single line of current tax expense above discontinuing operations",
        choice3: "A line of current tax expense under income (loss) from continuing operations before tax and another line under Income from discontinued operations",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "A debit balance in the Income Tax Payable account is reported as ______ on the SFP.",
        choice1: "Income Tax Payable and Current Asset",
        choice2: "Income Tax Receivable and Current Liability",
        choice3: "Income Tax Receivable and Current Asset",
        choice4: "Income Tax Payable and Current Liability",
        answer: 3,
    },
    {
        question: "What is the difference between the Direct Adjustment and Allowance Method?",
        choice1: "Direct Adjustment retains the relationship between future deductibles and the Deferred Tax Asset Account",
        choice2: "Allowance Method retains the relationship between future deductibles and the Deferred Tax Asset Account",
        choice3: " ",
        choice4: " ",
        answer: 2,
    },
    {
        question: "When must the Deferred Tax Asset account be reviewed?",
        choice1: "Every 6 months",
        choice2: "Every 3 months",
        choice3: "Each period",
        choice4: "At year end",
        answer: 4,
    },
    {
        question: "How long can a corporation choose to carry forward a tax loss?",
        choice1: "20 years",
        choice2: "1 year",
        choice3: "Infinity",
        choice4: "3 years",
        answer: 1,
    },
    {
        question: "How long can a corporation choose to carry back a tax loss?",
        choice1: "20 years",
        choice2: "1 year",
        choice3: "Infinity",
        choice4: "3 years",
        answer: 4,
    },
    {
        question: "How a tax loss should be used depends on which of the following factors? ",
        choice1: "How the tax loss was incurred",
        choice2: "How large the company is",
        choice3: "Previous tax loss decisions",
        choice4: "Past and anticipated future tax rates",
        answer: 4,
    },//Kaylee - 10 of 22
    {
        question: "ASPE requires separate disclosures when tax rates change regarding the future tax expense or benefit. True or false",
        choice1: "True",
        choice2: "False",
        choice3: " ",
        choice4: " ",
        answer: 2,
    },
    {
        question: "Which of the following journal entries is recorded on the date that a new tax rate becomes enacted. Assume there is a $250,000 decrease in the deferred tax liability.",
        choice1: "Dr. Deferred tax benefit & Cr. Deferred tax liability ($250,000)",
        choice2: "Dr. Deferred tax liability & Cr. Deferred tax benefit ($250,000)",
        choice3: "Dr. Deferred tax liability & Cr. Deferred tax asset ($250,000)",
        choice4: "Dr. Deferred tax asset & Cr. Deferred tax liability ($250,000)",
        answer: 2,
    },
    {
        question: "What happens if tax rates change in future years?",
        choice1: "Apply the previous years tax rate to determine future years taxes",
        choice2: "Use the tax rates that are expected to apply when tax liabilities/assets are settled/realized",
        choice3: "Don’t use any tax rates for the future years",
        choice4: "Keep the same consistent tax rate regardless of future tax rate predictions",
        answer: 2,
    },
    {
        question: "The two main objectives when accounting for income tax are to recognize tax payable or refundable for the current period and recognize ____",
        choice1: "Deferred tax liabilities or assets for the future tax consequences of events",
        choice2: "The current rate of tax applied to the company",
        choice3: "Adjustments to current income taxes for changes in tax expense",
        choice4: "The application of different related transactions in retained earnings or OCI",
        answer: 1,
    },
    {
        question: "The local Walmart is subjected to a 25% rate and reports a $100,000 of accounting income for 2019. Their insurance premium and royalty expense recorded $2,500 per month beginning 2020. Warranty expenses were recognized as $25,000 for 2021. What is Walmart’s 2019 Income Tax Payable?",
        choice1: "$25,000 (100,000*25%)",
        choice2: "$85,000 (100,000*25%+2,500*12*2)",
        choice3: "$18,750 ([100,000-25,000]*25%)",
        choice4: "$3,750 ([100,000-25,000-2,500*2]*25%)",
        answer: 1,
    },
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 27

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

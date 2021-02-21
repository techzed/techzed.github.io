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
        question: 'Which is the correct sequence for the operating cycle?',
        choice1: 'Inventory, Production, Receivables, Cash',
        choice2: 'Cash, Production, Inventory, Receivables',
        choice3: 'Production, Inventory, Cash, Receivables',
        choice4: 'Cash, Inventory, Production, Receivables',
        answer: 4,
    },
        {
        question: '____________ are capital assets that have no physical substance',
        choice1: 'Tangible assets',
        choice2: 'Non-operating assets',
        choice3: 'Intangible assets',
        choice4: 'Current assets',
        answer: 3,
    },
    {
        question:
            "Non-current liabilities include all the following except:",
        choice1: "Trademarks",
        choice2: "Long-term investments",
        choice3: "Goodwill",
        choice4: "Prepaid expenses",
        answer: 4,
    },
    {
        question: "Inventories are assets that:",
        choice1: "held for sale in the ordinary course of business,",
        choice2: "in the process of production for such sale, or",
        choice3: "in the form of materials or supplies to be consumed in the production process or in the rendering of services.",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "Current liabilities are presented in what order?",
        choice1: "Not in any consistent order",
        choice2: "Indebtedness",
        choice3: "Monetary Value",
        choice4: "Current maturities",
        answer: 1,
    },
    {
        question: "For most industries, which is the correct orientation for current assets (most valued to least)",
        choice1: "Short-term investments, cash, accounts receivable, inventories and prepaid items",
        choice2: "Cash, short-term investments, accounts receivable, inventories and prepaid items",
        choice3: "Cash, short-term investments, accounts receivable, prepaid items and inventories",
        choice4: "Accounts receivable, cash, prepaid items, inventories, and accounts receivable",
        answer: 2,
    },
    {
        question: "What is a provision?",
        choice1: "A lability that has uncertain timing",
        choice2: "A material event that has an uncertain future",
        choice3: "Details on SFP line items",
        choice4: "Explanations about restricts that most likely apply to liabilities  ",
        answer: 1,
    },
    {
        question: "Contingent gains are recognized under both the ASPE and IFRS?",
        choice1: "True",
        choice2: "False",
        choice3: " ",
        choice4: " ",
        answer: 2,
    },
    {
        question: "Which of the following information generally acts as additional support to account titles and amounts in SFP?",
        choice1: "Contingencies",
        choice2: "Contractual situations",
        choice3: "Subsequent events",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "In the cash flow statement cash payments and receipts are organized into three activities:",
        choice1: "Financing activities, operating activities, and non-cash activities",
        choice2: "Investing activities, non-cash activities and financing activities",
        choice3: "Operating activities, investing activities and financing activities",
        choice4: "Non-cash activities, operating activities and investing activities",
        answer: 3,
    },
    {
        question: "Which of the following transactions would not be classified as financing activities:",
        choice1: "Issuance of common shares",
        choice2: "Redemption of bonds",
        choice3: "Amortization of patent",
        choice4: "Payment of cash dividend",
        answer: 3,
    },
    {
        question: "Which of the following transaction is classified as an operating activity:",
        choice1: "Payment of purchase",
        choice2: "Proceeds on sale of equipment",
        choice3: "Exchange of furniture for equipment",
        choice4: "Purchase of land",
        answer: 1,
    },//End Paige 12 questions
    {
        question: "Which of the following is not part of the operating activities of direct method when presenting the statement of cash flows:",
        choice1: "Interest Paid ",
        choice2: "Taxes Paid ",
        choice3: "Depreciation",
        choice4: "Cash Paid to suppliers and employees",
        answer: 3,
    },
    {
        question: "What are the two methods companies can prepare their statements of cash flows:",
        choice1: "Quick method and simplified method",
        choice2: "Direct method and indirect method",
        choice3: "Cash in method and Cash out method",
        choice4: "Free flow method and restricted method",
        answer: 2,
    },
    {
        question: "What is the formula to understand the liquidity from the statement of cash flows?",
        choice1: "Net cash provided by operating activities",
        choice2: "Cash ratio",
        choice3: "Cash liquidity ratio",
        choice4: "Current cash debt coverage ratio",
        answer: 4,
    },
    {
        question: "What is the formula to understand the financial flexibility from the statement of cash flows?",
        choice1: "Cash debt coverage ratio",
        choice2: "Cash provided ratio",
        choice3: "Cash flexibility ratio",
        choice4: "Free cash flow ratio",
        answer: 1,
    },
    {
        question: "Under what reporting standard must companies disclose the date that their financial statements were authorized for issue? ",
        choice1: "ASPE",
        choice2: "IRROC",
        choice3: "MFDA",
        choice4: "IFRS",
        answer: 4,
    },
    {
        question: "What is the formula for Free cash flow",
        choice1: "Net cash provided by operating activities - Capital expenditures - Dividends",
        choice2: "Net cash provided by operating activities - Dividends + Capital expenditures ",
        choice3: "Net cash provided by financing activities - Capital expenditures - Dividends",
        choice4: "Net cash provided by financing activities + Capital expenditures + Dividends",
        answer: 1,
    },
    {
        question: "Under ASPE , interest and dividends that are included in net income are treated as?",
        choice1: "Financing activities ",
        choice2: "Operating activities ",
        choice3: "Investing activities ",
        choice4: "None of the above ",
        answer: 2,
    },
    {
        question: "What is a /Lead-lag/ factor?",
        choice1: "The cash flow out happens prior to cash inflow ",
        choice2: "The leading companies cash statements are released before the others ",
        choice3: "The inventory is purchased after companies have sold it ",
        choice4: "All of the above ",
        answer: 1,
    },
    {
        question: "What does a low or negative amount of net cash provided by operating activities indicate?",
        choice1: "The company potentially had to borrow funds to operate ",
        choice2: "They did not generate enough money from operations ",
        choice3: "They potentially had to issue equity securities",
        choice4: "All of the Above ",
        answer: 4,
    },
    {
        question: "When creditors are looking into seeing if a company can repay their debt obligation they look at what? ",
        choice1: "Net cash provided by financing activities ",
        choice2: "Net cash provided by operating activities ",
        choice3: "Net cash provided by investing activities ",
        choice4: "Net Income",
        answer: 2,
    },//Kaylee - 10 of 22
    {
        question: "Which of the following being a consistently dominant source of income for a company could cause concern regarding the risk of investing?",
        choice1: "Financing activities",
        choice2: "Operating activities",
        choice3: "Service revenues",
        choice4: "None of the above, all sources of income are equally advantageous for those looking to invest",
        answer: 1,
    },
    {
        question: "The statement of financial position can provide information to assess investment risks. Which of the following factors can be gleaned from analyzing the statement of financial position?",
        choice1: "The company’s liquidity",
        choice2: "The company’s solvency",
        choice3: "The source of it’s income",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "Companies that use a higher proportion of debt are at _______ risk and require ________cash flow from operations to be sure they can keep up with upcoming payments",
        choice1: "Higher, lower",
        choice2: "Lower, lower",
        choice3: "Higher, higher",
        choice4: "Lower, higher",
        answer: 3,
    },
    {
        question: "What is the definition of Financial Flexibility?",
        choice1: "The amount of time that is expected to pass until an asset is realized",
        choice2: "The ability of an enterprise to take effective actions to alter the amounts and timing of cash flows so it can respond to unexpected needs and opportunities.",
        choice3: "The ability of an enterprise to pay its debts and related interest",
        choice4: " ",
        answer: 2,
    },
    {
        question: "Which of the following is not a major limitation of the Statement of Financial Position?",
        choice1: "Many of the items on the SFP are “hard numbers” that are less reliable",
        choice2: "Many assets and liabilities are stated at historical cost rather than fair value",
        choice3: "It is necessary to use judgement and estimates to determine certain figures on the SFP",
        choice4: "All of the above are major limitations of the Statement of Financial Position",
        answer: 1,
    },
    {
        question: "The Statement of Financial Position’s subsections are not as informative as the statement as a whole",
        choice1: "True",
        choice2: "False",
        choice3: " ",
        choice4: " ",
        answer: 2,
    },
    {
        question: "Non-monetary assets such as_______, _________, and intangibles such as________ should be classified separately on the Statement of Financial Position to give more significant information to stakeholders.",
        choice1: "Short-term investments; notes payable; bonds",
        choice2: "Inventory; PPE; Goodwill",
        choice3: "Accounts receivable; Bonds; Goodwill",
        choice4: "Short-term investments; Long-term investments; Inventory",
        answer: 2,
    },
    {
        question: "Which of the following is considered a monetary liability?",
        choice1: "Long-term debt",
        choice2: "Notes payable",
        choice3: "Accounts payable",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "Contracts that create a financial asset for one and a financial liability for another are called___________",
        choice1: "Accounts payable",
        choice2: "Cash contracts",
        choice3: "Financial instruments",
        choice4: "None of the above",
        answer: 3,
    },
    {
        question: "The three main components of a Statement of Financial Position include:",
        choice1: "Monetary, Non-monetary, and Retained earnings",
        choice2: "Cash, Liabilities, and Financial activities",
        choice3: "Assets, Liabilities, and Equity",
        choice4: "Assets, PPE, and Liabilities",
        answer: 3,
    }//Christine 10 of 32
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 32

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
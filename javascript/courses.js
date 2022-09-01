import { createTable } from "./statisticsModule.js"

const courses = [];
const teachings = [];
const capitaSelectas = [];
const capitaSelectaVisits = [];
const researchMeetings = [];
const worldHeadlines = [];


const courseTableElements = {
    "headers" : [],
    "bodyRows" : [],
    "footRows" : [[]],
}

const teachingTableElements = {
    "headers": [],
    "bodyRows": [],
    "footRows": [[]],
}

const capitaSelectaTableElements = {
    "headers": [],
    "bodyRows": [],
    "footRows": [[]],
}

const capitaSelectaVisitTableElements = {
    "headers": [],
    "bodyRows": [],
    "footRows": [[]],
}

const researchMeetingTableElements = {
    "headers": [],
    "bodyRows": [],
    "footRows": [[]],
}

const worldHeadlinesTableElements = {
    "headers": [],
    "bodyRows": [],
    "footRows": [[]],
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth()),
        date.getFullYear(),
    ].join('-');
}

function updateTable(array_, object_){
    for (let index = 0; index < array_.length; index++) {
        const course = array_[index];
    
        const row = []
    
        for (const key in course) {
            const value = course[key]
            row.push(value)
            if (object_["headers"].indexOf(key) == -1){
                object_["headers"].push(key)
    
                object_["footRows"][0].push("-")
            }
        }
        object_["bodyRows"].push(row)
    }
}

function createCourseObject(name, status, startDate, endDate, studyLoad, grade, pass){
    const course =  {
        "name" : name,
        "status" : status,
        "start_date" : formatDate(startDate),
        "end_date": formatDate(endDate),
        "study_load" : studyLoad,
        "grade": grade,
        "pass": pass,
    }
    courses.push(course)
}

function createTeachingObject(name, status, startDate, endDate, finished){
    const teaching =  {
        "name" : name,
        "status" : status,
        "start_date" : formatDate(startDate),
        "end_date": formatDate(endDate),
        "finished": finished,
    }

    teachings.push(teaching)
}

function createCapitaSelectaObject(name, status, date, finished){
    const capitaSelecta =  {
        "name" : name,
        "status" : status,
        "date" : formatDate(date),
        "finished": finished,
    }

    capitaSelectas.push(capitaSelecta)
}

function createCapitaSelectaVisitObject(entryTimeStamp, host, readingMaterial, capitaDate, summary){
    const capitaSelectaVisit =  {
        "entryTimeStamp" : formatDate(entryTimeStamp),
        "host" : host,
        "readingMaterial" : readingMaterial,
        "capitaDate": formatDate(capitaDate),
        "summary": summary,
    }

    capitaSelectaVisits.push(capitaSelectaVisit)
}

function createResearchMeetingObject(name, status, date, finished){
    const reserchMeeting =  {
        "name" : name,
        "status" : status,
        "date" : formatDate(date),
        "finished": finished,
    }

    researchMeetings.push(reserchMeeting)
}

function createWorldHeadelinesObject(name, status, date, finished){
    const worldHeadline =  {
        "name" : name,
        "status" : status,
        "date" : formatDate(date),
        "finished": finished,
    }

    worldHeadlines.push(worldHeadline)
}

createCourseObject("Introductory meeting", "done", new Date(2022, 5, 25), new Date(2022, 5, 25), 5, NaN, true)
createCourseObject("Masterclass Klinische Onderzoek & Epidemiologie (Noordwijk)", "done", new Date(24, 2, 2022), new Date(12, 3, 2022), 84, 8, true)
createCourseObject("Study design and their application in epidemiological research", "done", new Date(2022, 3, 7), new Date(2022, 7, 6), 84, 8, true)
createCourseObject("Scientific Conduct for PhDs(LUMC)", "done", new Date(2022, 2, 3), new Date(2022, 2, 3), 5, NaN, true)
createCourseObject("PhD Course: Regression Analysis", "done", new Date(2022, 6, 13), new Date(2022, 6, 17), 42, NaN, true)
createCourseObject("Statistical Aspects of Clinical Trials 2022", "done", new Date(2022, 4, 11), new Date(2022, 4, 13), 28, NaN, true)
createCourseObject("PINT", "planned", new Date(2022, 9, 13), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("Basic methods and reasoning in Biostatistics", "planned", new Date(2022, 8, 29), new Date(2022, 9, 16), "?", NaN, false)
createCourseObject("EBROK", "planned", new Date(2022, 9, 8), new Date(2022, 9, 8), "?", NaN, false)
createCourseObject("Schier", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("Causal inference", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("Survival analysis", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("Meta-analysis", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("Advanced Epi", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)
createCourseObject("SKIPE", "not planned", new Date(2022, 12, 31), new Date(2022, 12, 31), "?", NaN, false)

createTeachingObject("POV", "learning", new Date(2022, 9, 6), new Date(2022, 9, 6), false)
createTeachingObject("AWV2", "planned", new Date(2022, 12, 1), new Date(2022, 12, 6), false)
createTeachingObject("CRIP", "canceled", new Date(2022, 9, 29), new Date(2022, 12, 31), false)

createCapitaSelectaObject("Handling 0 observations", "planned", new Date(2022, 10, 4), false)
createCapitaSelectaObject("Machine readability", "not planned", new Date(2022, 12, 31), false)

createResearchMeetingObject("Chapter 3 of The Netherlands Code of Conduct for Research Integrity", "not planned", new Date(2022, 12, 31), false)
createResearchMeetingObject("Retraction rates, BMJ Christmas edition", "planned", new Date(2022, 12, 20), false)

createWorldHeadelinesObject("Weather reports", "planned", new Date(2022, 10, 4), false)

createCapitaSelectaVisitObject(new Date(2022, 1, 18, 12, 6, 10), "Daisy Latijnhouwers", "Perla J Marang-van de Mheen, Hein Putter, Esther Bastiaannet, Alex Bottle - Competing risks in quality and safety research: a framework to guide choice of analysis and improve reporting", new Date(2022, 1, 18), "Today’s subject was about competing risks. What they are, how they influence outcomes, and when to adjust for these risks. Multiple different scenarios were discussed to demonstrate the effect. The chairperson presented her own research and we discussed how competing risks should or should not be included. The overall conclusion is to know what exact question you want to answer and what kind of outcomes are you looking for.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1, 12, 5, 54), "Hine van Os", "Guidelines and quality criteria for artificial intelligence-based prediction models in healthcare: a scoping review. Anne A. H. de Hond", new Date(2022, 2, 1), "The introduction was about the current role of AI in healthcare and the European guidelines. We continued to define AI and machine learning. The message of the chair person was to look at what the exact model is you use instead of seeking a definition. Since it is a vague definition, there should be more focus on gray literature. This is underlined by the 22 added articles by experts. It is important to understand how AI works and how it comes to a conclusion. In practice we see automatization bias and over confidence when implementing decision making AI. The scoping review is the first step to implement field norms in the Netherlands. These results  will be translated into criteria by a task force. It is still a discussion who should be guard over the content over the field norm. The discussion at the end continued upon the extend of the implementation and definitions.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Iris Verhagen", "Methodological aspects of(electronic) diary studies", new Date(2022, 2, 15), "Iris discussed the origin of e-diaries and the advantages compared with paper diaries. A big problem with diaries is missing data. Using mixed models will assume your data is missing at random, while a lot will probably be missing not at random. Iris advised us to do sensitivity analysis with best / worst case scenarios to estimate the effect of the missing data. She also shared her own experiences and showed examples of her e-diary data collection.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Tariq Faquih", "Van Calster et al. BMC Medicine (2019) Calibration: the Achilles heel of predictive analytics.", new Date(2022, 2, 22), "Calibration is important to publish in the paper, but is rarely done. Bad calibration can lead to under- or overtreatment of patients. We discussed different ways to perform calibration in predictive analytics. It is discouraged to use the Hosmer-Lemeshow test to assess the calibration. You should try to prevent poor calibration e.g. by looking at correct sample size and using limited amount of variables. Also external validation and correction should be done and reported. The conclusion of the presentations was that it is important to evaluate calibration using appropriate measures and visualizations. We discussed the practical issues of recalibrations / external calibration.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Esther de Rooij", "What is an estimand & how does it relate to quantifying the effect of treatment on patient-reported quality of life outcomes in clinical trials? (2020) Rachael Lawrance et al.", new Date(2022, 3, 1), "Patient reported outcomes (PROs) are used to get the perspective of the patient. Sometimes they can be more interesting compared to hard endpoints. Using a nephrological example the chair explained how intercurrent events may interfere with a RCT. Five different strategies were introduces to handle ICE. Using an example of the article, we look at the 5 attributes of an estimand. Ignoring the confounding problem, we approached the same study as a observational studies.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Rolf Groenwold", "-", new Date(2022, 3, 29), "We discussed if the patient-preference study design might be preferred over conventional RCT because it would lead to more patient inclusions. However, you can view it as a separate RCT and observational study, but with selection bias because the preference is not a random process. It is also not logical how to interpret the  differences in the results. Also the preference may shift over time. It looks like a solution to a lot of problems, but it may introduce (more) negative effects.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Iris Verhagen", "Sex and Gender Differences Research Design for Basic, Clinical, and Population Studies: Essentials for Investigators (2018); Janet W. Rich-Edwards, et al.", new Date(2022, 4, 5), "We discussed the differences between the terms gender and sex. There are multiple ways to acquire the information from participants, but there are a lot of practical issues. Making distinctions between gender and sex in your methods also comes with power problems. There were a lot of questions regarding the differences in results, therefore the added value and the need of implementing gender as a variable. You have to think if it is important to implement gender differences in your design, and do not stratify for it post-hoc if you did not state it in the protocol.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Janet Kist", "Chava Ramspek et al. (2021) External validation of prognostic models: what, why, how, when and where?", new Date(2022, 4, 26), "Using the article of Chava and prepared questions, we discussed external validation models. There were several discussions about how we should interpret C-statistics in various situations. We ended with a discussion about the clinical usefulness and the interpretation of these models in different populations. You should always look if the predictors in the model are useful in your own population.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Rayna Anijs", "Anusha M Vable (2021) Code Review as a Simple Trick to Enhance Reproducibility, Accelerate Learning, and Improve the Quality of Your Team’s Research", new Date(2022, 5, 3), "We talked about the importance of Code review. By using online polls we talked about the implementation of code review in the department. There is a policy on code review, but this was not know by everyone. There was a discussion about the benefit of doing a review and who should do it. The overall conclusion was that it is important to do it, but think about how often and who should do it.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Bob Siegerink", "Prevalence of questionable research practices, research misconduct and their potential explanatory factors: A survey among academic researchers in The Netherlands (2022)", new Date(2022, 5, 24), "Today we discussed a nation wide survey in the Netherlands about research integrity. There was a lot of discussion about the quality and the message of the paper. Although there was a fair amount of criticism on the methods, mainly selection bias, the overall message is still of value. The effect of the randomized response method is not clear and therefore adds little value to results. Only extreme values may offer some actual quantitative information about research integrity. Nonetheless, the selection bias remains the elephant in the room when discussing this paper")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Kanishk Kaushik", "2020: How to use and assess qualitative research methods. Loraine Busetto et al.", new Date(2022, 6, 21), "We started with a discussion about the value of qualitive research and different views how to approach reality, but all the 'options' are dependent on a definition of reality, which we can not define, therefore I think you should not try to involve reality in science. We continued with the methods of qualitative research and the effect of all kinds of bias, but these biases are 'part' of the methods, and therefore should be taken into account, but is not a reason not to conduct these methods. The main issues for qualitative researchers will be the change in mindset. A mindset to help you throughout your research is to keep the goal of qualitative research in mind.")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Coen van der Meulen", "Zhang (2010) Methodological Challenges in Studying Risk Factors for Progression of Knee Osteoarthritis", new Date(2022, 6, 28), "Two main issues were discussed: collider bias and ceilling effects. Selection your population on a collider may result in a lower estimated or even opposite effect. By looking at te distribution, you can investigate if there might be collider bias in your study. Ceilling effects can go both ways depending on the question and data. When comparing continuous with categorical data it is important to know what kind of units you are comparing (if it even possible to compare them).")
createCapitaSelectaVisitObject(new Date(2022, 2, 1), "Louise Burggraaf", "-", new Date(2022, 8, 24), "We discussed how to balance benefits and harms within clinical studies. There are several different perspectives to take into account: patient, clinician, researcher, and the health care system. From each perspective, different effects matter. One research paper can not answer all questions at once and that should not be the aim of a research group. Interpreting effects as benefit or harm depends on the situation, person, and goal.")
createCapitaSelectaVisitObject(new Date(2022, 7, 31, 15, 30), "Jihee Han", "Thirteen Questions About Using Machine Learning in Causal Research (You Won't Believe the Answer to Number 10!)", new Date(2022, 7, 30, 10, 30), "There is discussion about the difference between Machine Learning and regression (some say it is the same). The main difference is that ML makes regression based on the results (to learn and make a better model). The conclusion was that machine learning will not be able to do causal research by itself, because it does not know what kind of variables it is handling. This can easily be added by using JSON database formats insead of standard csv dataformats.")

updateTable(courses, courseTableElements);
updateTable(teachings, teachingTableElements);
updateTable(capitaSelectas, capitaSelectaTableElements);
updateTable(researchMeetings, researchMeetingTableElements);
updateTable(worldHeadlines, worldHeadlinesTableElements);
updateTable(capitaSelectaVisits, capitaSelectaVisitTableElements)

const courseTable = createTable([courseTableElements["headers"]], courseTableElements["bodyRows"], courseTableElements["footRows"], "table1");
const teachingTable = createTable([teachingTableElements["headers"]], teachingTableElements["bodyRows"], teachingTableElements["footRows"], "table2");
const capitaSelectaTable = createTable([capitaSelectaTableElements["headers"]], capitaSelectaTableElements["bodyRows"], capitaSelectaTableElements["footRows"], "table3");
const researchMeetingTable = createTable([researchMeetingTableElements["headers"]], researchMeetingTableElements["bodyRows"], researchMeetingTableElements["footRows"], "table4");
const worldHeadlineTable = createTable([worldHeadlinesTableElements["headers"]], worldHeadlinesTableElements["bodyRows"], worldHeadlinesTableElements["footRows"], "table5");
const capitaSelectaVisitTable = createTable([capitaSelectaVisitTableElements["headers"]], capitaSelectaVisitTableElements["bodyRows"], capitaSelectaVisitTableElements["footRows"], "table6");

document.getElementById("courseTable").append(courseTable);
document.getElementById("teachingTable").append(teachingTable);
document.getElementById("capitaSelectaTable").append(capitaSelectaTable);
document.getElementById("researchMeetingTable").append(researchMeetingTable);
document.getElementById("worldHeadlineTable").append(worldHeadlineTable);
document.getElementById("capitaSelectaVisitTable").append(capitaSelectaVisitTable);
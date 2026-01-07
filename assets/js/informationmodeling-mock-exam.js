// Map fine-grained categories to IM documents (per-fragment grouping)
function categoryToDoc(category) {
    const c = (category || "").toLowerCase();

    // IM 2.x — ERD core
    if (c.includes("entity types") || c.includes("entity type") || c.includes("erd basics") || c === "entity types" || c === "entity") {
        return "IM 2.1 — ERD: Entity Types";
    }
    if (c.includes("attribute")) {
        return "IM 2.2 — ERD: Attributes";
    }
    if (c.includes("relationship") || c.includes("relationship degree") || c.includes("degree")) {
        return "IM 2.3 — ERD: Relationships";
    }
    if (c.includes("participation") || c.includes("cardinality") || c.includes("crow") || c.includes("notation") || c.includes("erd notation")) {
        return "IM 2.4 — Participation & Cardinality";
    }
    if (c.includes("key attribute")) {
        return "IM 2.5 — Key Attributes";
    }
    if (c.includes("weak entit")) {
        return "IM 2.6 — Weak Entities";
    }
    if (c.includes("inheritance") || c.includes("specialization") || c.includes("super-type") || c.includes("sub-type") || c.includes("super type") || c.includes("sub type")) {
        return "IM 2.7 — Inheritance / Specialization";
    }

    // IM 3 — Mapping conceptual to relational (+ Normalization topics)
    if (
        c.includes("mapping conceptual") ||
        c.includes("relational mapping") ||
        c.includes("mapping conceptual -> relational") ||
        c.includes("mapping conceptual to relational") ||
        c.includes("mapping conceptual ->") ||
        c.includes("mapping") ||
        c.includes("normalisatie") || c.includes("normaliz") ||
        c.includes("bcnf") || c.includes("4nf") || c.includes("5nf") ||
        c.includes("partiële") || c.includes("transitieve") || c.includes("strikvraag")
    ) {
        return "IM 3 — Mapping Conceptual → Relational";
    }

    // IM 4 — Modelling issues and general considerations
    if (
        c.includes("modelling issues") ||
        c.includes("modelling languages") ||
        c.includes("conceptual modelling") ||
        c.includes("conceptual vs logical") ||
        c.includes("data integrity") ||
        c.includes("sql vs nosql") ||
        c.includes("uod modeling") ||
        c.includes("constraints")
    ) {
        return "IM 4 — Modelling Issues";
    }

    // IM 7 — Change of UoD
    if (c.includes("change of uod") || c.includes("change of universe of discourse")) {
        return "IM 7 — Change of UoD";
    }

    // IM 8a — API
    if (
        c.includes("api") || c.includes("openapi") ||
        c.includes("http verbs") || c.includes("status codes") ||
        c.includes("parameter") || c.includes("semantic urls")
    ) {
        return "IM 8a — API";
    }

    // Mapping to an OO model (EF/C# etc.)
    if (
        c.includes("oo mapping") || c.includes("mapping oo") ||
        c.includes("c# mapping") || c.includes("oo design") ||
        c.includes("c# types") || c.includes("mapping identifiers")
    ) {
        return "IM — Mapping to an OO Model";
    }

    // IM 1.1 — Description of a System (fallback for very general system questions)
    if (c.includes("description of a system") || c.includes("system description")) {
        return "IM 1.1 — Description of a System";
    }

    return "IM — General";
}

const informationModelingQuizData = {
    title: "Information Modeling - ERD & Datamodellering",
    questions: allExamQuestions.map(q => ({
        lecture: categoryToDoc(q.category),
        question: q.question,
        options: q.options.map(opt => opt.text),
        correctAnswer: q.options.findIndex(opt => opt.isCorrect),
        explanationCorrect: "Correct! " + q.explanation,
        explanationIncorrect: q.explanation
    }))
};

document.addEventListener('DOMContentLoaded', () => {
    initQuiz(informationModelingQuizData);
});

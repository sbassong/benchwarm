/**
 * Name: Samuel Bassong Bassong
 */
import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";
import * as exercises from "./exercises_model.mjs";

const PORT = process.env.PORT;
const ERROR_INVALID_REQ = { Error: "Invalid request" };
const ERROR_NOT_FOUND = { Error: "Not found" };

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await exercises.connect();
    console.log(`Server listening on port ${PORT}...`);
});

/**
 *
 * @param {string} date
 * Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
 */
function isDateValid(date) {
    // Test using a regular expression.
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

/**
 *
 * @param {object} req request containing the body to be validated
 * @returns true if the req.body contains all 5 properties and they fullfil reqs
 */
function isValid(req) {
    const { name, reps, weight, unit, date } = req.body;
    if (!(name && reps && weight && unit && date)) return false;

    const nameIsValid = typeof name === "string" && name.length >= 1;
    const repsIsValid = Number.isInteger(reps) && reps > 0;
    const weightIsValid = Number.isInteger(weight) && weight > 0;
    const unitIsValid = unit === "kgs" || unit === "lbs";
    const dateIsValid = isDateValid(date);

    return (
        nameIsValid && repsIsValid && weightIsValid && unitIsValid && dateIsValid
    );
}


/**
 * Create a new exercise with the query parameters provided in the body
 */
app.post(
    "/exercises",
    asyncHandler(async (req, res) => {
        if (!isValid(req)) {
            res.status(400).json(ERROR_INVALID_REQ);
        } else {
            const exercise = await exercises.createExercise(
                req.body.name,
                req.body.reps,
                req.body.weight,
                req.body.unit,
                req.body.date
            );
            res.status(201).json(exercise);
        }
    })
);

/**
 * Retrieve all exercises object within the collection "exercises"
 */
app.get(
    "/exercises",
    asyncHandler(async (req, res) => {
        const foundExercises = await exercises.getExercises();
        res.status(200).json(foundExercises);
    })
);

/**
 * Retrive a exercise by id
 */
app.get(
    "/exercises/:id",
    asyncHandler(async (req, res) => {
        const exercise = await exercises.findExercise(req.params.id);

        exercise?._id
            ? res.status(200).json(exercise)
            : res.status(404).json(ERROR_NOT_FOUND);
    })
);

/**
 * Update an exercise by id
 */
app.put(
    "/exercises/:id",
    asyncHandler(async (req, res) => {
        if (!isValid(req)) return res.status(400).json(ERROR_INVALID_REQ);

        const updatedCount = await exercises.updateExercise(
            req.params.id,
            req.body
        );
        if (updatedCount) {
            const matchedExercise = await exercises.findExercise(req.params.id);
            res.status(200).json(matchedExercise);
        } else {
            res.status(404).json(ERROR_NOT_FOUND);
        }
    })
);

/**
 * Delete an exercise by id
 */
app.delete(
    "/exercises/:id",
    asyncHandler(async (req, res) => {
        const deletedCount = await exercises.deleteExercise(req.params.id);
        deletedCount
            ? res.status(204).send()
            : res.status(404).json(ERROR_NOT_FOUND);
    })
);
